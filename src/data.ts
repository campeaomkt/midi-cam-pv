import { ScreenshotCard, Testimonial, FaqItem, ChordPreset } from './types';

export const SCREENSHOT_CARDS: ScreenshotCard[] = [
  {
    id: 'modo-celular',
    badge: 'Modo 1 • 100% Celular',
    title: 'Grave Só com o Celular',
    subtitle: 'Timbres próprios em formato .SF2 sem DAW',
    description: 'Conecte seu teclado diretamente ao smartphone via cabo OTG. Carregue seus próprios SoundFonts (.sf2) de pianos, Rhodes e sintetizadores sem precisar de computador ou DAW. O celular grava vídeo, áudio do timbre e o teclado virtual sincronizados em 1 clique.',
    chordName: 'Cmaj7 (9)',
    chordNotes: ['C3', 'E3', 'G3', 'B3', 'D4'],
    aspectRatio: '9:16',
    highlightKeys: [0, 4, 7, 11, 14],
    statsText: '100% Celular • Timbres .SF2',
    color: '#00f2c3',
    features: ['Suporte nativo a .SF2', 'Sem necessidade de DAW', 'Cabo OTG direto no celular']
  },
  {
    id: 'modo-wifi-pc',
    badge: 'Modo 2 • Conexão Sem Fio',
    title: 'Sincronismo com PC via QR Code',
    subtitle: 'Conexão Wi-Fi instantânea em 3 segundos',
    description: 'Baixe o app oficial para PC (Windows) e aponte a câmera do celular para o QR Code na tela. Tudo o que você tocar no teclado controlador conectado ao PC acende no tecladinho virtual do celular em tempo real, com latência zero.',
    chordName: 'F#m7 (b5, 11)',
    chordNotes: ['F#2', 'A2', 'C3', 'E3', 'B3'],
    aspectRatio: '9:16',
    highlightKeys: [6, 9, 12, 16, 23],
    statsText: 'QR Code Wi-Fi • Zero Latência',
    color: '#00f2c3',
    features: ['Sincronismo Wi-Fi instantâneo', 'Controlador no PC -> Celular', 'Suporte a SF2 no PC']
  },
  {
    id: 'youtube-sync',
    badge: 'Exclusivo • YouTube Sync',
    title: 'Playbacks do YouTube no Celular',
    subtitle: 'Gravação perfeitamente sincronizada',
    description: 'Carregue qualquer link ou vídeo do YouTube dentro do app no PC. O celular recebe tudo em tempo real: áudio do YouTube, áudio do seu timbre e o tecladinho virtual aceso. Grava tudo de uma vez com sincronismo absoluto e sem latência.',
    chordName: 'Abmaj9 (#11)',
    chordNotes: ['Ab2', 'C3', 'Eb3', 'G3', 'D4'],
    aspectRatio: '16:9',
    highlightKeys: [8, 12, 15, 19, 26],
    statsText: 'Áudio YouTube + Timbre + Vídeo',
    color: '#ef4444',
    features: ['Carregue qualquer vídeo do YouTube', 'Áudio e MIDI integrados no celular', '1 take gravado com tudo pronto']
  },
  {
    id: 'personalizacao',
    badge: 'Customização • Do Seu Jeito',
    title: 'Personalização Total de Estilo',
    subtitle: 'Cores, modelos de teclado e filtros',
    description: 'Deixe o app com a sua identidade visual: escolha cores neon marcantes para as teclas (Ciano, Roxo Synth, Âmbar, Vermelho), altere modelos de 25 a 88 teclas com perspectiva 3D e aplique filtros cinematográficos de câmera prontos para redes sociais.',
    chordName: 'Bb13 (sus4)',
    chordNotes: ['Bb2', 'Eb3', 'F3', 'Ab3', 'C4', 'G4'],
    aspectRatio: '9:16',
    highlightKeys: [10, 15, 17, 20, 24],
    statsText: 'Cores • 25 a 88 Teclas • Filtros',
    color: '#00f2c3',
    features: ['Cores neon configuráveis', 'Modelos de teclados virtuais', 'Filtros de câmera profissionais']
  },
  {
    id: 'camera-pro',
    badge: 'Estúdio Pro • 4K 60FPS',
    title: 'Câmera Pro & Detecção de Acordes',
    subtitle: 'Cifragem harmônica polifônica em tempo real',
    description: 'Reconhecimento instantâneo de acordes complexos, tétrades e inversões. Gravação de alta definição em 4K a 60 FPS com controles profissionais e exportação automática direto para a galeria do smartphone.',
    chordName: 'Dm9 / G',
    chordNotes: ['G1', 'D3', 'F3', 'A3', 'C4', 'E4'],
    aspectRatio: '9:16',
    highlightKeys: [7, 14, 17, 21, 24],
    statsText: '4K 60 FPS • Cifras em Tempo Real',
    color: '#00f2c3',
    features: ['Mais de 1.800 acordes detectados', 'Vídeo 4K/60FPS para Reels & Shorts', '1 toque para salvar na galeria']
  }
];

export const CHORD_PRESETS: ChordPreset[] = [
  {
    name: 'Cmaj9',
    root: 'Dó',
    type: 'Maior com Sétima Maior',
    tensions: '9ª maior',
    keys: [0, 4, 7, 11, 14],
    notes: ['C', 'E', 'G', 'B', 'D'],
    description: 'Acorde suave e luminoso muito usado em Neo-Soul, MPB e Lo-Fi.'
  },
  {
    name: 'F#m7 (b5)',
    root: 'Fá sustenido',
    type: 'Meio-diminuto',
    tensions: 'b5, 7ª menor',
    keys: [6, 9, 12, 16],
    notes: ['F#', 'A', 'C', 'E'],
    description: 'Tensão clássica de preparação em cadências menores e Jazz.'
  },
  {
    name: 'Dm9',
    root: 'Ré',
    type: 'Menor com Sétima',
    tensions: '9ª adicionada',
    keys: [2, 5, 9, 12, 14],
    notes: ['D', 'F', 'A', 'C', 'E'],
    description: 'Rico e aveludado, ideal para introduções e baladas modernas.'
  },
  {
    name: 'G13 (b9)',
    root: 'Sol',
    type: 'Dominante Alterado',
    tensions: '13ª, b9',
    keys: [7, 10, 11, 14, 16],
    notes: ['G', 'B', 'D', 'F', 'Ab', 'E'],
    description: 'Harmonia refinada de Gospel e Jazz contemporâneo com resolução forte.'
  },
  {
    name: 'Abmaj7 (#11)',
    root: 'Lá bemol',
    type: 'Modo Lídio',
    tensions: '#11, 7M',
    keys: [8, 12, 15, 18, 20],
    notes: ['Ab', 'C', 'Eb', 'G', 'D'],
    description: 'Sensação etérea e cinematográfica, muito popular em trilhas e fusion.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Gabriel Rezende',
    role: 'Pianista & Produtor Musical',
    instrument: 'Nord Stage 3',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    content: 'Eu gastava quase 3 horas por dia sincronizando MIDI no After Effects e Premiere para postar um Reels de 30 segundos. Com o MIDI Cam, conecto o cabo OTG no meu teclado, toco e em 1 clique o vídeo já está pronto com as teclas acesas e o nome do acorde na tela. Mudou minha rotina.',
    stars: 5,
    highlight: 'Economizo 15 horas semanais de edição',
    followers: '142k seguidores'
  },
  {
    id: '2',
    name: 'Larissa Alencar',
    role: 'Professora de Piano Popular',
    instrument: 'Yamaha P-125',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    content: 'O detector de acordes é assustadoramente preciso. Meus alunos ficam encantados porque eles conseguem ver exatamente o formato da minha mão junto com a cifra e a cor neon nas teclas. Não existe nada similar no mercado.',
    stars: 5,
    highlight: 'Didática visual 10x superior para os alunos',
    followers: '89k inscritos'
  },
  {
    id: '3',
    name: 'Matheus Fontes',
    role: 'Criador de Conteúdo e Tecladista',
    instrument: 'Roland Fantom 08',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    content: 'A perspectiva 3D das teclas é um detalhe de gênio: parece que o teclado virtual é uma continuação exata dos meus dedos. Gravei meus últimos 20 vídeos todos pelo MIDI Cam em 4K. O visual ciano neon virou a marca registrada do meu canal.',
    stars: 5,
    highlight: 'Qualidade 4K impecável e zero latência',
    followers: '210k seguidores'
  },
  {
    id: '4',
    name: 'Beatriz Vasconcelos',
    role: 'Pianista Clássica & Jazz',
    instrument: 'Casio Privia PX-S3100',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    content: 'Mesmo tocando voicings rápidos e acordes com 6 ou 7 notas, a resposta gráfica não engasga. O suporte via Wi-Fi funciona perfeitamente sem nenhum cabo na gravação.',
    stars: 5,
    highlight: 'Perfeita resposta polifônica em alta velocidade',
    followers: '45k seguidores'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'so-celular-sf2',
    category: 'conexoes',
    question: 'Posso usar somente o celular via cabo e carregar meus próprios timbres?',
    answer: 'Sim! Se você preferir praticidade máxima, pode usar apenas o celular conectado diretamente ao teclado por um cabo USB com adaptador OTG. O MIDI Cam permite carregar timbres próprios no formato SoundFont (.sf2) direto na memória do celular, sem depender de nenhuma DAW (como Reaper, Ableton ou FL Studio) ou computador. O app processa o áudio do instrumento com fidelidade e grava o vídeo com as teclas acesas de forma 100% autônoma.'
  },
  {
    id: 'gravacao-sem-fio-qr',
    category: 'conexoes',
    question: 'Como funciona a gravação sem fio pelo computador com QR Code?',
    answer: 'É simples e instantâneo: basta baixar o aplicativo oficial do MIDI Cam para PC (Windows). Ao abrir o programa no PC, ele exibe um QR Code na tela. Você aponta a câmera do celular, lê o código e o sistema sincroniza via Wi-Fi em menos de 3 segundos. Tudo o que você tocar no seu teclado controlador conectado ao PC aparece no tecladinho virtual do celular em tempo real, com latência zero!'
  },
  {
    id: 'youtube-integrado',
    category: 'audio_video',
    question: 'Como funciona a gravação integrada com vídeos do YouTube?',
    answer: 'Esse é um dos recursos mais poderosos do MIDI Cam: dentro do aplicativo no PC, você pode carregar qualquer vídeo ou playback do YouTube (backing tracks, músicas de estudo ou aulas). Ao gravar, o celular recebe tudo simultaneamente: o áudio do YouTube, o áudio do seu timbre (formato .sf2) e o tecladinho virtual aceso. O vídeo final fica gravado direto no celular em 1 take perfeitamente sincronizado sem descompasso.'
  },
  {
    id: 'personalizacao-visual',
    category: 'audio_video',
    question: 'Posso personalizar as cores, modelos de teclado e filtros de câmera?',
    answer: 'Sim, a personalização é completa! Você pode escolher as cores neon das teclas iluminadas (Ciano Neon Oficial, Roxo Synthwave, Âmbar Vintage, Vermelho REC, Azul Elétrico e Verde Esmeralda), configurar modelos de teclado virtual (de 25 a 88 teclas) e aplicar filtros cinematográficos de câmera prontos para destacar seus vídeos nas redes sociais (Reels, TikTok, Shorts).'
  },
  {
    id: 'compatibilidade-sistemas',
    category: 'compatibilidade',
    question: 'Quais sistemas são compatíveis atualmente?',
    answer: 'O MIDI Cam é compatível com Android e Windows por enquanto. Você pode usar no celular ou tablet Android de forma 100% independente com cabo OTG, ou em conjunto com o aplicativo para computadores com Windows via Wi-Fi.'
  },
  {
    id: 'teclados-compativeis',
    category: 'compatibilidade',
    question: 'Qualquer teclado ou controlador é compatível?',
    answer: 'Sim! O MIDI Cam é compatível com qualquer teclado, piano digital ou controlador que possua saída USB-MIDI padrão ou conexão MIDI tradicional (Yamaha, Roland, Casio, Nord, Korg, Novation, Alesis, Behringer, Kurzweil, M-Audio, Arturia, Kawai, etc.).'
  },
  {
    id: 'desenvolvedor-eliab',
    category: 'compra',
    question: 'Quem é o desenvolvedor do MIDI Cam?',
    answer: 'O MIDI Cam foi desenvolvido por Eliab Campos, criado com foco total nas dores reais de tecladistas e criadores de conteúdo que buscam praticidade, sincronismo perfeito e liberdade sonora.'
  },
  {
    id: 'licenca-vitalicia',
    category: 'compra',
    question: 'O valor de R$ 24,90 é assinatura mensal ou pagamento único?',
    answer: 'É pagamento ÚNICO de R$ 24,90. Você tem acesso vitalício ao aplicativo oficial MIDI Cam para Celular (Android) e para PC (Windows) com todas as atualizações futuras inclusas, sem cobranças recorrentes.'
  },
  {
    id: 'garantia',
    category: 'compra',
    question: 'Como funciona a garantia incondicional de 7 dias?',
    answer: 'Você pode testar o MIDI Cam tranquilamente no seu setup. Se por qualquer motivo não ficar 100% satisfeito, basta enviar uma mensagem para o suporte que o valor de R$ 24,90 é reembolsado integralmente.'
  }
];
