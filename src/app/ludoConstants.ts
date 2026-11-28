export type BoardTheme = 'classic' | 'underwater' | 'space' | 'ancient';

export interface BoardSkinData {
  id: BoardTheme;
  nameAr: string;
  nameEn: string;
  image: string;
  icon: string;
}

export const BOARD_SKINS: Record<BoardTheme, BoardSkinData> = {
  classic: {
    id: 'classic',
    nameAr: 'الكلاسيكي التقليدي',
    nameEn: 'Classic Traditional',
    image: '/classic_ludo_board.svg',
    icon: '🎨',
  },
  space: {
    id: 'space',
    nameAr: 'مجرة الكواكب والفضاء',
    nameEn: 'Cosmic Galaxy & Planets',
    image: '/space_board.png',
    icon: '🪐',
  },
  underwater: {
    id: 'underwater',
    nameAr: 'عالم تحت الماء (المحيط)',
    nameEn: 'Underwater Ocean',
    image: '/board_skin_underwater.jpg',
    icon: '🌊',
  },
  ancient: {
    id: 'ancient',
    nameAr: 'أساطير الفراعنة والآثار',
    nameEn: 'Ancient Pharaonic Egypt',
    image: '/board_skin_pharaonic.jpg',
    icon: '🏺',
  },
};

export interface GiftItem {
  id: string;
  nameAr: string;
  nameEn: string;
  icon: string;
  cost: number;
  category: 'friendly' | 'prank';
  descAr: string;
  sound: 'splat' | 'slap' | 'boom' | 'chime' | 'funny';
}

export const GIFTS_LIST: GiftItem[] = [
  {
    id: 'handshake',
    nameAr: 'مرحبا ومصافحة',
    nameEn: 'Handshake',
    icon: '🤝',
    cost: 10,
    category: 'friendly',
    descAr: 'تحية ترحيب ومصافحة ودية من القلب',
    sound: 'chime',
  },
  {
    id: 'highfive',
    nameAr: '5 هاند (كف)',
    nameEn: 'High Five',
    icon: '✋',
    cost: 15,
    category: 'friendly',
    descAr: 'كف حماسي خمسة وخميسة للمنافس',
    sound: 'chime',
  },
  {
    id: 'flowers',
    nameAr: 'باقة ورد ملكية',
    nameEn: 'Royal Flowers',
    icon: '🌸',
    cost: 20,
    category: 'friendly',
    descAr: 'باقة زهور للتعبير عن الروح الرياضية',
    sound: 'chime',
  },
  {
    id: 'coffee',
    nameAr: 'فنجان قهوة',
    nameEn: 'Arabic Coffee',
    icon: '☕',
    cost: 15,
    category: 'friendly',
    descAr: 'قهوة عربية أصيلة وكرم ضيافة',
    sound: 'chime',
  },
  {
    id: 'crown',
    nameAr: 'تاج الملوك',
    nameEn: 'King Crown',
    icon: '👑',
    cost: 50,
    category: 'friendly',
    descAr: 'تتويج المنافس بتاج الفخامة والملوك',
    sound: 'chime',
  },
  {
    id: 'diamond',
    nameAr: 'ألماسة النصر',
    nameEn: 'Victory Diamond',
    icon: '💎',
    cost: 100,
    category: 'friendly',
    descAr: 'جوهرة أسطورية نادرة للمحترفين',
    sound: 'chime',
  },
  {
    id: 'love',
    nameAr: 'قلوب ومحبة',
    nameEn: 'Hearts Shower',
    icon: '💖',
    cost: 20,
    category: 'friendly',
    descAr: 'أمطار من القلوب والمودة بين الأصدقاء',
    sound: 'chime',
  },
  {
    id: 'egg',
    nameAr: 'ضرب بالبيض',
    nameEn: 'Throw Egg',
    icon: '🥚',
    cost: 15,
    category: 'prank',
    descAr: 'بيضة طائرة تفقس وتلطخ الوجه بصفار البيض!',
    sound: 'splat',
  },
  {
    id: 'slipper',
    nameAr: 'ضرب بالشبشب',
    nameEn: 'Slipper Slap',
    icon: '🩴',
    cost: 20,
    category: 'prank',
    descAr: 'لسعة شبشب أسطورية تهز الشاشة مع صوت رنان!',
    sound: 'slap',
  },
  {
    id: 'tomato',
    nameAr: 'طماطم مفعصة',
    nameEn: 'Squash Tomato',
    icon: '🍅',
    cost: 15,
    category: 'prank',
    descAr: 'طماطم طائرة تنفجر وتتفغص على وجه الخصم!',
    sound: 'splat',
  },
  {
    id: 'bomb',
    nameAr: 'قنبلة متفجرة',
    nameEn: 'Explosive Bomb',
    icon: '💣',
    cost: 30,
    category: 'prank',
    descAr: 'قنبلة موقوتة تنفجر بدخان وصوت انفجار قوي!',
    sound: 'boom',
  },
  {
    id: 'ice',
    nameAr: 'تجميد بالثلج',
    nameEn: 'Ice Freeze',
    icon: '🧊',
    cost: 20,
    category: 'prank',
    descAr: 'كتلة جليدية تجمد الخصم في مكانه مؤقتاً!',
    sound: 'chime',
  },
  {
    id: 'chicken',
    nameAr: 'فرخة تصرخ',
    nameEn: 'Screaming Chicken',
    icon: '🐔',
    cost: 25,
    category: 'prank',
    descAr: 'دجاجة مقالب تصرخ في وجه الخصم بشكل كوميدي!',
    sound: 'funny',
  },
  {
    id: 'fart',
    nameAr: 'ريح محرجة',
    nameEn: 'Poof Wind',
    icon: '💨',
    cost: 10,
    category: 'prank',
    descAr: 'مقلب هواء محرج يثير الضحك!',
    sound: 'funny',
  },
  {
    id: 'boxing',
    nameAr: 'لكمة ملاكمة',
    nameEn: 'Boxing Punch',
    icon: '🥊',
    cost: 25,
    category: 'prank',
    descAr: 'قفاز ملاكمة يطير ويسدد بوكس سريع للمنافس!',
    sound: 'slap',
  },
];

export interface H2HRecord {
  totalMatches: number;
  playerWins: number;
  opponentWins: number;
  byColor: { red: number; green: number; yellow: number };
  streak: number;
  history: Array<{
    id: string;
    date: string;
    winner: 'red' | 'green' | 'blue' | 'yellow';
    winnerName: string;
    playersCount: number;
  }>;
}

export interface RoomWallpaper {
  id: string;
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  image: string;
  icon: string;
  tagAr: string;
  tagEn: string;
  themeGradient: string;
  borderGlow: string;
  textColor: string;
}

export const ROOM_WALLPAPERS: RoomWallpaper[] = [
  {
    id: 'royal_gold',
    nameAr: '🏰 قصر السلاطين والمجلس الملكي (VIP)',
    nameEn: 'Royal Sultan Palace & Majlis',
    descAr: 'فخامة المخمل الأحمر والزخارف الذهبية الملكية مع كراسي الشيوخ والقهوة العربية',
    descEn: 'Luxury crimson velvet with golden royal borders and authentic majlis seating',
    image: '/board_skin_pharaonic.jpg',
    icon: '👑',
    tagAr: 'VIP ملكي',
    tagEn: 'Royal VIP',
    themeGradient: 'from-amber-950/90 via-red-950/80 to-slate-950',
    borderGlow: 'border-amber-400/80 shadow-[0_0_35px_rgba(245,158,11,0.4)]',
    textColor: 'text-amber-300',
  },
  {
    id: 'pharaonic',
    nameAr: '🏺 معبد الفراعنة والكنوز الذهبية',
    nameEn: 'Pharaonic Dynasty & Golden Treasures',
    descAr: 'نقوش الأهرامات ومفتاح الحياة ونهر النيل الخالد تحت بريق الذهب المصري القديم',
    descEn: 'Pyramids, hieroglyphics, sacred ankh, and eternal gold of ancient Egypt',
    image: '/board_skin_pharaonic.jpg',
    icon: '🏺',
    tagAr: 'أساطير فرعونية',
    tagEn: 'Pharaonic',
    themeGradient: 'from-amber-900/90 via-yellow-950/80 to-slate-950',
    borderGlow: 'border-yellow-400/80 shadow-[0_0_35px_rgba(234,179,8,0.4)]',
    textColor: 'text-yellow-300',
  },
  {
    id: 'cosmic',
    nameAr: '🌌 مجرة الكواكب والنيون السيبراني',
    nameEn: 'Cosmic Galaxy & Cyber Nebula',
    descAr: 'سماء الفضاء المظلمة مع سدم النجوم وكواكب بركانية وأضواء النيون الساحرة',
    descEn: 'Deep outer space, cosmic nebulae, glowing celestial rings and neon pulses',
    image: '/board_skin_cosmic.jpg',
    icon: '🪐',
    tagAr: 'خيال علمي وفضاء',
    tagEn: 'Cosmic Cyber',
    themeGradient: 'from-purple-950/90 via-indigo-950/80 to-slate-950',
    borderGlow: 'border-purple-400/80 shadow-[0_0_35px_rgba(168,85,247,0.4)]',
    textColor: 'text-purple-300',
  },
  {
    id: 'underwater',
    nameAr: '🌊 أعماق أطلانطس والمحيط الغارق',
    nameEn: 'Deep Atlantis Oceanic Abyss',
    descAr: 'عالم الشعب المرجانية والغواصات والبلورات المائية مع هدوء أمواج البحر',
    descEn: 'Coral reefs, ancient submerged palaces, glowing aquatic orbs and serene deep blues',
    image: '/board_skin_underwater.jpg',
    icon: '🔱',
    tagAr: 'أعماق البحار',
    tagEn: 'Deep Atlantis',
    themeGradient: 'from-cyan-950/90 via-blue-950/80 to-slate-950',
    borderGlow: 'border-cyan-400/80 shadow-[0_0_35px_rgba(6,182,212,0.4)]',
    textColor: 'text-cyan-300',
  },
  {
    id: 'traditional_cafe',
    nameAr: '☕ مقهى الحارة والقهوة البلدي',
    nameEn: 'Authentic Oriental Ahwa Cafe',
    descAr: 'أجواء الشاي بالنعناع وشيشة العجمي وطاولات الزهر الخشبية وصوت أم كلثوم',
    descEn: 'Warm lanterns, mint tea, wooden backgammon tables and vintage oriental melodies',
    image: '/classic_ludo_board.svg',
    icon: '☕',
    tagAr: 'أجواء القهوة الشعبية',
    tagEn: 'Oriental Ahwa',
    themeGradient: 'from-amber-950/90 via-stone-900/80 to-slate-950',
    borderGlow: 'border-orange-400/80 shadow-[0_0_35px_rgba(249,115,22,0.4)]',
    textColor: 'text-orange-300',
  },
  {
    id: 'ice_kingdom',
    nameAr: '❄️ مملكة الجليد والبلورات الزرقاء',
    nameEn: 'Frost Crystal Ice Citadel',
    descAr: 'قلعة الصقيع والرياح القطبية مع أحجار الياقوت الأزرق وجليد لا يذوب',
    descEn: 'Glacial sapphire throne, frostbound runes, and sparkling eternal icicles',
    image: '/board_skin_ice.jpg',
    icon: '❄️',
    tagAr: 'صقيع وجليد',
    tagEn: 'Frozen Realm',
    themeGradient: 'from-sky-950/90 via-blue-950/80 to-slate-950',
    borderGlow: 'border-sky-400/80 shadow-[0_0_35px_rgba(56,189,248,0.4)]',
    textColor: 'text-sky-300',
  },
  {
    id: 'ancient_temple',
    nameAr: '🏛️ حلبة أساطير التاريخ والفرسان',
    nameEn: 'Ancient Chronicles Arena',
    descAr: 'أعمدة المرمر الرومانية ودروع الفرسان ومدرجات التشجيع الحماسية',
    descEn: 'Colosseum marble pillars, champion shields, and legendary warrior spirits',
    image: '/board_skin_ancient.jpg',
    icon: '⚔️',
    tagAr: 'معارك وبطولات',
    tagEn: 'Historical Arena',
    themeGradient: 'from-stone-900/90 via-zinc-950/80 to-slate-950',
    borderGlow: 'border-amber-300/80 shadow-[0_0_35px_rgba(252,211,77,0.4)]',
    textColor: 'text-amber-200',
  },
  {
    id: 'cyber_arena',
    nameAr: '⚡ صالة النيون والسايبر المستقبلية',
    nameEn: 'Cyberpunk Neon Battleground',
    descAr: 'أضواء الليزر المتوهجة وشاشات الهولوجرام وأصوات التحدي الإلكترونية السريعة',
    descEn: 'Holographic interfaces, laser grids, synthwave pulses and hyper-speed action',
    image: '/space_board.png',
    icon: '⚡',
    tagAr: 'نيون وسايبر',
    tagEn: 'Cyber Arena',
    themeGradient: 'from-emerald-950/90 via-slate-950/80 to-black',
    borderGlow: 'border-emerald-400/80 shadow-[0_0_35px_rgba(52,211,153,0.4)]',
    textColor: 'text-emerald-300',
  },
];

export function getRoomWallpaper(id?: string): RoomWallpaper {
  return ROOM_WALLPAPERS.find((w) => w.id === id) || ROOM_WALLPAPERS[0];
}

export interface PublicLudoRoom {
  id: string;
  nameAr: string;
  nameEn: string;
  hostId?: string;
  hostName: string;
  hostAvatar: string;
  flag: string;
  playerCount: 2 | 4;
  currentPlayers: number;
  spectatorsCount: number;
  entryFee: number;
  prizeAmount: number;
  status: 'waiting' | 'in_game';
  modeType: 'classic' | 'blitz';
  isOpen?: boolean;
  roomLevel?: number;
  bannedIds?: string[];
  backgroundId?: string;
  announcement?: string;
}

export const LUDO_PUBLIC_ROOMS: PublicLudoRoom[] = [
  {
    id: 'room-vip-1',
    nameAr: '🏰 قاعة الملوك الكبرى (VIP)',
    nameEn: 'Grand Kings Hall (VIP)',
    hostName: 'الساحر الملكي',
    hostAvatar: '/laugh_emote.png',
    flag: '🇪🇬',
    playerCount: 4,
    currentPlayers: 3,
    spectatorsCount: 4,
    entryFee: 100,
    prizeAmount: 380,
    status: 'waiting',
    modeType: 'classic',
    backgroundId: 'pharaonic',
    announcement: 'أهلاً بكم في قاعة كبار الشخصيات.. اللعب برهان عالي وبحضور المتفرجين على المايك 👑🎙️',
  },
  {
    id: 'room-blitz-2',
    nameAr: '⚡ تحدي النرد السريع (خاطف)',
    nameEn: 'Blitz Dice Showdown',
    hostName: 'صقر الخليج',
    hostAvatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Saqr',
    flag: '🇸🇦',
    playerCount: 2,
    currentPlayers: 1,
    spectatorsCount: 2,
    entryFee: 50,
    prizeAmount: 95,
    status: 'waiting',
    modeType: 'blitz',
    backgroundId: 'cosmic',
    announcement: 'سرعة البرق ونرد حاسم.. مواجهة ثنائية مباشرة بدون تردد! ⚡🎲',
  },
  {
    id: 'room-classic-3',
    nameAr: '🎲 مجلس أبطال لودو العربي',
    nameEn: 'Arab Ludo Champions Majlis',
    hostName: 'حنين نورتي',
    hostAvatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Haneen',
    flag: '🇦🇪',
    playerCount: 4,
    currentPlayers: 4,
    spectatorsCount: 7,
    entryFee: 500,
    prizeAmount: 1900,
    status: 'in_game',
    modeType: 'classic',
    backgroundId: 'underwater',
    announcement: 'مجلس الأخوة والدردشة الطيبة واللعب النظيف.. مرحباً بالجميع 🎙️🤝',
  },
  {
    id: 'room-alex-4',
    nameAr: '🌊 ملتقى الإسكندرية الدولي',
    nameEn: 'Alexandria Shore Arena',
    hostName: 'البرنس المصري',
    hostAvatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=AhmedEG',
    flag: '🇪🇬',
    playerCount: 4,
    currentPlayers: 2,
    spectatorsCount: 3,
    entryFee: 50,
    prizeAmount: 190,
    status: 'waiting',
    modeType: 'classic',
    backgroundId: 'traditional_cafe',
    announcement: 'شاي بنعناع وضحك للصبح على شاطئ البحر.. تفضلوا على الطاولة 🌊☕',
  },
];
