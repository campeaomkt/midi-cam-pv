export interface ScreenshotCard {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  chordName?: string;
  chordNotes?: string[];
  aspectRatio: '9:16' | '16:9';
  highlightKeys: number[]; // key indices 0..23 (2 octaves)
  statsText: string;
  color: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  instrument: string;
  avatarUrl: string;
  content: string;
  stars: number;
  highlight: string;
  followers?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'compatibilidade' | 'conexoes' | 'audio_video' | 'compra';
}

export interface ChordPreset {
  name: string;
  root: string;
  type: string;
  tensions: string;
  keys: number[]; // index 0..23
  notes: string[];
  description: string;
}
