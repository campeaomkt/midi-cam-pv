import { ScreenshotCard, Testimonial, FaqItem, ChordPreset } from './types';

export const HOTMART_CHECKOUT_URL = 'https://pay.hotmart.com/O107610848O?checkoutMode=10&hideBillet=1';

export const SCREENSHOT_CARDS: ScreenshotCard[] = [
  {
    id: 'modo-celular',
    badge: 'Modo 1 • 100% Celular',
    title: 'Graba Solo con tu Celular',
    subtitle: 'Timbres propios en formato .SF2 sin DAW',
    description: 'Conecta tu teclado directamente al smartphone mediante un cable OTG. Carga tus propios SoundFonts (.sf2) de pianos, Rhodes y sintetizadores sin necesidad de computadora ni DAW. El celular graba video, audio del timbre y el teclado virtual sincronizados en 1 solo clic.',
    chordName: 'Cmaj7 (9)',
    chordNotes: ['C3', 'E3', 'G3', 'B3', 'D4'],
    aspectRatio: '9:16',
    highlightKeys: [0, 4, 7, 11, 14],
    statsText: '100% Celular • Timbres .SF2',
    color: '#00f2c3',
    features: ['Soporte nativo para .SF2', 'Sin necesidad de DAW', 'Cable OTG directo al celular']
  },
  {
    id: 'modo-wifi-pc',
    badge: 'Modo 2 • Conexión Inalámbrica',
    title: 'Sincronización con PC vía Código QR',
    subtitle: 'Conexión Wi-Fi instantánea en 3 segundos',
    description: 'Descarga la app oficial para PC (Windows) y apunta la cámara de tu celular al código QR en pantalla. Todo lo que toques en tu teclado controlador conectado a la PC se ilumina en el teclado virtual del celular en tiempo real, con latencia cero.',
    chordName: 'F#m7 (b5, 11)',
    chordNotes: ['F#2', 'A2', 'C3', 'E3', 'B3'],
    aspectRatio: '9:16',
    highlightKeys: [6, 9, 12, 16, 23],
    statsText: 'Código QR Wi-Fi • Cero Latencia',
    color: '#00f2c3',
    features: ['Sincronización Wi-Fi instantánea', 'Controlador en PC -> Celular', 'Soporte para SF2 en PC']
  },
  {
    id: 'youtube-sync',
    badge: 'Exclusivo • YouTube Sync',
    title: 'Playbacks de YouTube en el Celular',
    subtitle: 'Grabación perfectamente sincronizada',
    description: 'Carga cualquier enlace o video de YouTube dentro de la app en la PC. El celular recibe todo en tiempo real: audio de YouTube, audio de tu timbre y el teclado virtual iluminado. Graba todo de una sola vez con sincronía absoluta y sin latencia.',
    chordName: 'Abmaj9 (#11)',
    chordNotes: ['Ab2', 'C3', 'Eb3', 'G3', 'D4'],
    aspectRatio: '16:9',
    highlightKeys: [8, 12, 15, 19, 26],
    statsText: 'Audio YouTube + Timbre + Video',
    color: '#ef4444',
    features: ['Carga cualquier video de YouTube', 'Audio y MIDI integrados en el celular', '1 sola toma grabada con todo listo']
  },
  {
    id: 'personalizacao',
    badge: 'Personalización • A tu Manera',
    title: 'Personalización Total de Estilo',
    subtitle: 'Colores, modelos de teclado y filtros',
    description: 'Dale a la app tu propia identidad visual: elige colores neón vibrantes para las teclas (Cian, Púrpura Synth, Ámbar, Rojo), cambia modelos de 25 a 88 teclas con perspectiva 3D y aplica filtros cinematográficos de cámara listos para redes sociales.',
    chordName: 'Bb13 (sus4)',
    chordNotes: ['Bb2', 'Eb3', 'F3', 'Ab3', 'C4', 'G4'],
    aspectRatio: '9:16',
    highlightKeys: [10, 15, 17, 20, 24],
    statsText: 'Colores • 25 a 88 Teclas • Filtros',
    color: '#00f2c3',
    features: ['Colores neón configurables', 'Modelos de teclados virtuales', 'Filtros de cámara profesionales']
  },
  {
    id: 'camera-pro',
    badge: 'Estudio Pro • 4K 60FPS',
    title: 'Cámara Pro & Detección de Acordes',
    subtitle: 'Cifrado armónico polifónico en tiempo real',
    description: 'Reconocimiento instantáneo de acordes complejos, tétradas e inversiones. Grabación en alta definición 4K a 60 FPS con controles profesionales y exportación automática directo a la galería del smartphone.',
    chordName: 'Dm9 / G',
    chordNotes: ['G1', 'D3', 'F3', 'A3', 'C4', 'E4'],
    aspectRatio: '9:16',
    highlightKeys: [7, 14, 17, 21, 24],
    statsText: '4K 60 FPS • Acordes en Tiempo Real',
    color: '#00f2c3',
    features: ['Más de 1.800 acordes detectados', 'Video 4K/60FPS para Reels & Shorts', '1 toque para guardar en galería']
  }
];

export const CHORD_PRESETS: ChordPreset[] = [
  {
    name: 'Cmaj9',
    root: 'Do',
    type: 'Mayor con Séptima Mayor',
    tensions: '9ª mayor',
    keys: [0, 4, 7, 11, 14],
    notes: ['C', 'E', 'G', 'B', 'D'],
    description: 'Acorde suave y luminoso muy utilizado en Neo-Soul, Baladas y Lo-Fi.'
  },
  {
    name: 'F#m7 (b5)',
    root: 'Fa sostenido',
    type: 'Semidisminuido',
    tensions: 'b5, 7ª menor',
    keys: [6, 9, 12, 16],
    notes: ['F#', 'A', 'C', 'E'],
    description: 'Tensión clásica de preparación en cadencias menores y Jazz.'
  },
  {
    name: 'Dm9',
    root: 'Re',
    type: 'Menor con Séptima',
    tensions: '9ª añadida',
    keys: [2, 5, 9, 12, 14],
    notes: ['D', 'F', 'A', 'C', 'E'],
    description: 'Rico y aterciopelado, ideal para introducciones y baladas modernas.'
  },
  {
    name: 'G13 (b9)',
    root: 'Sol',
    type: 'Dominante Alterado',
    tensions: '13ª, b9',
    keys: [7, 10, 11, 14, 16],
    notes: ['G', 'B', 'D', 'F', 'Ab', 'E'],
    description: 'Armonía refinada de Gospel y Jazz contemporáneo con resolución potente.'
  },
  {
    name: 'Abmaj7 (#11)',
    root: 'La bemol',
    type: 'Modo Lidio',
    tensions: '#11, 7M',
    keys: [8, 12, 15, 18, 20],
    notes: ['Ab', 'C', 'Eb', 'G', 'D'],
    description: 'Sensación etérea y cinematográfica, muy popular en bandas sonoras y fusion.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Gabriel Rezende',
    role: 'Pianista & Productor Musical',
    instrument: 'Nord Stage 3',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    content: 'Pasaba casi 3 horas al día sincronizando MIDI en After Effects y Premiere para publicar un Reel de 30 segundos. Con MIDI Cam, conecto el cable OTG a mi teclado, toco y con 1 solo clic el video ya queda listo con las teclas iluminadas y el acorde en pantalla. Transformó por completo mi rutina.',
    stars: 5,
    highlight: 'Ahorro 15 horas semanales de edición',
    followers: '142k seguidores'
  },
  {
    id: '2',
    name: 'Larissa Alencar',
    role: 'Profesora de Piano Popular',
    instrument: 'Yamaha P-125',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    content: 'El detector de acordes es increíblemente preciso. Mis alumnos quedan fascinados porque pueden ver con total claridad la posición de mis manos junto con el cifrado y el color neón en las teclas. No existe nada igual en el mercado.',
    stars: 5,
    highlight: 'Didáctica visual 10x superior para mis alumnos',
    followers: '89k suscriptores'
  },
  {
    id: '3',
    name: 'Matheus Fontes',
    role: 'Creador de Contenido y Tecladista',
    instrument: 'Roland Fantom 08',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    content: 'La perspectiva 3D de las teclas es un detalle genial: parece que el teclado virtual fuera una extensión exacta de mis dedos. He grabado mis últimos 20 videos todos con MIDI Cam en 4K. El estilo cian neón se convirtió en el sello distintivo de mi canal.',
    stars: 5,
    highlight: 'Calidad 4K impecable y cero latencia',
    followers: '210k seguidores'
  },
  {
    id: '4',
    name: 'Beatriz Vasconcelos',
    role: 'Pianista Clásica & Jazz',
    instrument: 'Casio Privia PX-S3100',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    content: 'Incluso tocando voicings rápidos y acordes complejos con 6 o 7 notas, la respuesta gráfica no se traba jamás. La conexión inalámbrica vía Wi-Fi funciona de manera impecable sin cables estorbando la toma.',
    stars: 5,
    highlight: 'Respuesta polifónica perfecta a gran velocidad',
    followers: '45k seguidores'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'so-celular-sf2',
    category: 'conexoes',
    question: '¿Puedo usar únicamente el celular con cable y cargar mis propios timbres?',
    answer: '¡Sí! Si buscas máxima comodidad, puedes usar solo tu celular conectado directamente al teclado con un cable USB y adaptador OTG. MIDI Cam te permite cargar timbres propios en formato SoundFont (.sf2) directamente en la memoria del celular, sin depender de ningún DAW (como Reaper, Ableton o FL Studio) ni de una computadora. La app procesa el audio del instrumento con alta fidelidad y graba el video con las teclas iluminadas de manera 100% autónoma.'
  },
  {
    id: 'gravacao-sem-fio-qr',
    category: 'conexoes',
    question: '¿Cómo funciona la grabación inalámbrica con la computadora mediante código QR?',
    answer: 'Es muy sencillo e instantáneo: solo descargas la aplicación oficial de MIDI Cam para PC (Windows). Al abrir el programa en la PC, verás un código QR en pantalla. Apuntas la cámara de tu celular, escaneas el código y ambos se sincronizan por Wi-Fi en menos de 3 segundos. ¡Todo lo que toques en tu teclado controlador conectado a la PC se refleja en el teclado virtual del celular en tiempo real, sin latencia!'
  },
  {
    id: 'youtube-integrado',
    category: 'audio_video',
    question: '¿Cómo funciona la grabación integrada con videos de YouTube?',
    answer: 'Es una de las funciones más potentes de MIDI Cam: dentro de la aplicación en la PC, puedes cargar cualquier video o pista de YouTube (backing tracks, canciones de práctica o tutoriales). Al grabar, el celular recibe todo simultáneamente: el audio de YouTube, el sonido de tu timbre (formato .sf2) y el teclado virtual iluminado. El video final se guarda directo en el celular en 1 sola toma perfectamente sincronizada sin desfases.'
  },
  {
    id: 'personalizacao-visual',
    category: 'audio_video',
    question: '¿Puedo personalizar los colores, modelos de teclado y filtros de cámara?',
    answer: '¡Sí, la personalización es total! Puedes elegir los colores neón de las teclas iluminadas (Cian Neón Oficial, Púrpura Synthwave, Ámbar Vintage, Rojo REC, Azul Eléctrico y Verde Esmeralda), configurar modelos de teclado virtual (de 25 a 88 teclas) y aplicar filtros cinematográficos de cámara listos para destacar tus videos en redes sociales (Reels, TikTok, Shorts).'
  },
  {
    id: 'compatibilidade-sistemas',
    category: 'compatibilidade',
    question: '¿Qué sistemas operativos son compatibles actualmente?',
    answer: 'MIDI Cam es compatible con Android y Windows. Puedes usarlo en tu celular o tablet Android de forma 100% independiente con cable OTG, o en conjunto con la aplicación para computadoras con Windows mediante Wi-Fi.'
  },
  {
    id: 'teclados-compativeis',
    category: 'compatibilidade',
    question: '¿Cualquier teclado o controlador es compatible?',
    answer: '¡Sí! MIDI Cam es compatible con cualquier teclado, piano digital o controlador que cuente con salida USB-MIDI estándar o conexión MIDI tradicional (Yamaha, Roland, Casio, Nord, Korg, Novation, Alesis, Behringer, Kurzweil, M-Audio, Arturia, Kawai, etc.).'
  },
  {
    id: 'desenvolvedor-eliab',
    category: 'compra',
    question: '¿Quién es el desarrollador de MIDI Cam?',
    answer: 'MIDI Cam fue desarrollado por Eliab Campos, pianista y profesor de teclado con más de 15 años de experiencia, creado con un enfoque total en las necesidades reales de los músicos que buscan practicidad, sincronía perfecta y libertad creativa.'
  },
  {
    id: 'licenca-vitalicia',
    category: 'compra',
    question: '¿El precio de U$7,90 es una suscripción mensual o un pago único?',
    answer: 'Es un PAGO ÚNICO de U$7,90. Obtienes acceso de por vida a la aplicación oficial MIDI Cam para Celular (Android) y para PC (Windows) con todas las actualizaciones futuras incluidas, sin cargos recurrentes jamás.'
  },
  {
    id: 'garantia',
    category: 'compra',
    question: '¿Cómo funciona la garantía incondicional de 7 días?',
    answer: 'Puedes probar MIDI Cam con total tranquilidad en tu estudio o casa. Si por cualquier motivo no quedas 100% satisfecho, simplemente envías un mensaje a soporte y te reembolsamos el importe total de U$7,90 de inmediato.'
  }
];
