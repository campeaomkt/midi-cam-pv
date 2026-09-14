// Intelligent chord detection engine based on active MIDI pitch classes
const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

export function detectChordFromKeys(activeKeyIndices: number[]): {
  chordName: string;
  root: string;
  type: string;
  tensions: string;
  notes: string[];
} {
  if (!activeKeyIndices || activeKeyIndices.length === 0) {
    return {
      chordName: 'Toque nas teclas...',
      root: '-',
      type: 'Aguardando entrada MIDI',
      tensions: '',
      notes: [],
    };
  }

  // Map to pitch classes 0..11
  const pitchClasses = Array.from(
    new Set(activeKeyIndices.map((k) => k % 12))
  ).sort((a, b) => a - b);

  const notes = pitchClasses.map((pc) => NOTE_NAMES[pc]);

  if (pitchClasses.length === 1) {
    const rootName = NOTE_NAMES[pitchClasses[0]];
    return {
      chordName: `${rootName} (Nota Solo)`,
      root: rootName,
      type: 'Nota fundamental',
      tensions: '',
      notes,
    };
  }

  // Find lowest note as root candidate or best matching harmonic root
  const lowestKey = Math.min(...activeKeyIndices);
  const bassPc = lowestKey % 12;

  // Test root candidates
  for (const rootPc of [bassPc, ...pitchClasses.filter((p) => p !== bassPc)]) {
    const rootName = NOTE_NAMES[rootPc];
    // compute intervals relative to root
    const intervals = pitchClasses
      .map((pc) => (pc - rootPc + 12) % 12)
      .sort((a, b) => a - b);

    const intSet = new Set(intervals);

    // Major 9 / Major 7
    if (intSet.has(4) && intSet.has(7) && intSet.has(11) && intSet.has(2)) {
      return {
        chordName: `${rootName}maj9`,
        root: rootName,
        type: 'Maior com Sétima e Nona',
        tensions: '7M, 9ª',
        notes,
      };
    }
    if (intSet.has(4) && intSet.has(7) && intSet.has(11)) {
      return {
        chordName: `${rootName}maj7`,
        root: rootName,
        type: 'Maior com Sétima Maior',
        tensions: '7M',
        notes,
      };
    }

    // Minor 9 / Minor 7
    if (intSet.has(3) && intSet.has(7) && intSet.has(10) && intSet.has(2)) {
      return {
        chordName: `${rootName}m9`,
        root: rootName,
        type: 'Menor com Nona',
        tensions: '7m, 9ª',
        notes,
      };
    }
    if (intSet.has(3) && intSet.has(7) && intSet.has(10)) {
      return {
        chordName: `${rootName}m7`,
        root: rootName,
        type: 'Menor com Sétima',
        tensions: '7m',
        notes,
      };
    }

    // Half-diminished (m7b5)
    if (intSet.has(3) && intSet.has(6) && intSet.has(10)) {
      return {
        chordName: `${rootName}m7(b5)`,
        root: rootName,
        type: 'Meio-Diminuto',
        tensions: 'b5, 7m',
        notes,
      };
    }

    // Dominant 7 / 9 / 13
    if (intSet.has(4) && intSet.has(10)) {
      if (intSet.has(9) || intSet.has(2)) {
        return {
          chordName: `${rootName}13`,
          root: rootName,
          type: 'Dominante com Décima Terceira',
          tensions: '13ª, 7m',
          notes,
        };
      }
      return {
        chordName: `${rootName}7`,
        root: rootName,
        type: 'Dominante',
        tensions: '7m',
        notes,
      };
    }

    // Basic Triads
    if (intSet.has(4) && intSet.has(7)) {
      const inv = bassPc !== rootPc ? ` / ${NOTE_NAMES[bassPc]}` : '';
      return {
        chordName: `${rootName}${inv}`,
        root: rootName,
        type: 'Tríade Maior',
        tensions: inv ? `Baixo em ${NOTE_NAMES[bassPc]}` : 'Perfeita',
        notes,
      };
    }
    if (intSet.has(3) && intSet.has(7)) {
      const inv = bassPc !== rootPc ? ` / ${NOTE_NAMES[bassPc]}` : '';
      return {
        chordName: `${rootName}m${inv}`,
        root: rootName,
        type: 'Tríade Menor',
        tensions: inv ? `Baixo em ${NOTE_NAMES[bassPc]}` : 'Menor',
        notes,
      };
    }
    if (intSet.has(3) && intSet.has(6)) {
      return {
        chordName: `${rootName}dim`,
        root: rootName,
        type: 'Diminuto',
        tensions: '5ª diminuta',
        notes,
      };
    }
    if (intSet.has(4) && intSet.has(8)) {
      return {
        chordName: `${rootName}aug`,
        root: rootName,
        type: 'Aumentado',
        tensions: '#5',
        notes,
      };
    }
    if (intSet.has(5) && intSet.has(7)) {
      return {
        chordName: `${rootName}sus4`,
        root: rootName,
        type: 'Suspenso 4',
        tensions: '4ª justa',
        notes,
      };
    }
  }

  // Fallback voicing
  const fallbackRoot = NOTE_NAMES[bassPc];
  return {
    chordName: `${fallbackRoot} Voicing [${notes.join(', ')}]`,
    root: fallbackRoot,
    type: 'Voicing Polifônico',
    tensions: `${notes.length} notas simultâneas`,
    notes,
  };
}
