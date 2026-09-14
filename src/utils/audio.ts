// Audio synth helper for simulated MIDI feedback using standard Web Audio API
class PianoSynth {
  private ctx: AudioContext | null = null;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Frequencies for 2 octaves (C3 to B4)
  private noteFrequencies: { [key: number]: number } = {
    0: 130.81, // C3
    1: 138.59, // C#3
    2: 146.83, // D3
    3: 155.56, // D#3
    4: 164.81, // E3
    5: 174.61, // F3
    6: 185.00, // F#3
    7: 196.00, // G3
    8: 207.65, // G#3
    9: 220.00, // A3
    10: 233.08, // A#3
    11: 246.94, // B3
    12: 261.63, // C4
    13: 277.18, // C#4
    14: 293.66, // D4
    15: 311.13, // D#4
    16: 329.63, // E4
    17: 349.23, // F4
    18: 369.99, // F#4
    19: 392.00, // G4
    20: 415.30, // G#4
    21: 440.00, // A4
    22: 466.16, // A#4
    23: 493.88, // B4
    24: 523.25, // C5
  };

  playKey(keyIndex: number, duration: number = 0.8) {
    try {
      this.initCtx();
      if (!this.ctx) return;

      const freq = this.noteFrequencies[keyIndex] || 261.63;
      const now = this.ctx.currentTime;

      // Primary tone
      const osc = this.ctx.createOscillator();
      const oscHarmonic = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      oscHarmonic.type = 'sine';
      oscHarmonic.frequency.setValueAtTime(freq * 2, now);

      // Natural acoustic piano envelope
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.28, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.12, now + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      oscHarmonic.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      oscHarmonic.start(now);

      osc.stop(now + duration);
      oscHarmonic.stop(now + duration);
    } catch {
      // Audio context might be restricted before interaction
    }
  }

  playChord(keyIndices: number[], duration: number = 1.2) {
    keyIndices.forEach((k, idx) => {
      setTimeout(() => {
        this.playKey(k, duration);
      }, idx * 18);
    });
  }
}

export const pianoSynth = new PianoSynth();
