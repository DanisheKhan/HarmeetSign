// Website data constants

export const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Music", path: "/music" },
  { title: "Awards", path: "/awards" },
  { title: "Gallery", path: "/gallery" },
  { title: "Contact", path: "/contact" },
];

export const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/harmeetmeet",
    icon: "FaInstagram",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/harmeetmeet",
    icon: "FaYoutube",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/harmeetmeet",
    icon: "FaSpotify",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/harmeetmeet",
    icon: "FaFacebook",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/harmeetmeet",
    icon: "FaTwitter",
  },
];

export const featuredMusic = [
  {
    id: 1,
    title: "Baby Doll",
    movie: "Ragini MMS 2",
    year: 2014,
    thumbnail: "/baby-doll-thumb.jpg",
    youtubeId: "yP9KiFTrWCU",
    description:
      "A chartbuster track that revolutionized the music industry with its unique sound.",
  },
  {
    id: 2,
    title: "Chittiyaan Kalaiyaan",
    movie: "Roy",
    year: 2015,
    thumbnail: "/chittiyaan-kalaiyaan-thumb.jpg",
    youtubeId: "zpsVpnvFfZQ",
    description:
      "An upbeat dance number that topped the charts for weeks after its release.",
  },
  {
    id: 3,
    title: "OMG - Oh My God!",
    movie: "Satyameva Jayate 2",
    year: 2021,
    thumbnail: "/omg-thumb.jpg",
    youtubeId: "3wZUjGqATEQ",
    description:
      "A high-energy track that combines traditional beats with modern music production.",
  },
  {
    id: 4,
    title: "Love Dose",
    movie: "Desi Kalakaar",
    year: 2014,
    thumbnail: "/love-dose-thumb.jpg",
    youtubeId: "_iFrDMArBDg",
    description:
      "A romantic track that showcases Harmeet's versatility as a music composer.",
  },
];

export const careerTimeline = [
  {
    year: "2005",
    title: "Early TV Appearances",
    description: "Started career with appearances on television music shows.",
    icon: "MdMusicNote",
  },
  {
    year: "2012",
    title: "Formation of Meet Bros",
    description:
      'Formed music duo "Meet Bros" which later became a significant name in Bollywood.',
    icon: "MdGroups",
  },
  {
    year: "2014",
    title: 'Breakthrough with "Baby Doll"',
    description:
      'Achieved mainstream success with the mega-hit "Baby Doll" from Ragini MMS 2.',
    icon: "MdStar",
  },
  {
    year: "2015",
    title: "Multiple Chart-toppers",
    description:
      'Released several chartbusters including "Chittiyaan Kalaiyaan" from Roy.',
    icon: "MdTrendingUp",
  },
  {
    year: "2018",
    title: "Solo Music Production",
    description:
      'Began producing music independently under the name "Harmeet Meet".',
    icon: "MdPerson",
  },
  {
    year: "2021",
    title: "Expanding Horizons",
    description:
      "Ventured into diverse music genres and international collaborations.",
    icon: "MdPublic",
  },
];

export const awards = [
  {
    id: 1,
    name: "Filmfare Award",
    category: "Best Music Director",
    year: "2015",
    project: "Baby Doll - Ragini MMS 2",
    image: "/filmfare-award.jpg",
  },
  {
    id: 2,
    name: "IIFA Award",
    category: "Best Music Direction",
    year: "2016",
    project: "Chittiyaan Kalaiyaan - Roy",
    image: "/iifa-award.jpg",
  },
  {
    id: 3,
    name: "Screen Award",
    category: "Best Music Director",
    year: "2014",
    project: "Various Works",
    image: "/screen-award.jpg",
  },
  {
    id: 4,
    name: "Dadasaheb Phalke Award",
    category: "Music Excellence",
    year: "2019",
    project: "Contribution to Indian Cinema",
    image: "/dadasaheb-phalke-award.jpg",
  },
];

export const galleryImages = {
  concerts: [
    { id: 1, src: "/concert-1.jpg", title: "Live at Mumbai, 2022" },
    { id: 2, src: "/concert-2.jpg", title: "International Tour, London 2021" },
    {
      id: 3,
      src: "/concert-3.jpg",
      title: "Music Festival Performance, Delhi 2020",
    },
    { id: 4, src: "/concert-4.jpg", title: "New Year Concert, Goa 2023" },
    { id: 5, src: "/concert-5.jpg", title: "University Tour, Pune 2019" },
    { id: 6, src: "/concert-6.jpg", title: "Corporate Event, Bangalore 2022" },
  ],
  studio: [
    { id: 1, src: "/studio-1.jpg", title: 'Recording Session for "OMG"' },
    { id: 2, src: "/studio-2.jpg", title: "Composing at Personal Studio" },
    { id: 3, src: "/studio-3.jpg", title: "Collaboration with Neha Kakkar" },
    { id: 4, src: "/studio-4.jpg", title: "Music Production Setup" },
    { id: 5, src: "/studio-5.jpg", title: "Behind the Scenes - Song Writing" },
  ],
  backstage: [
    {
      id: 1,
      src: "/backstage-1.jpg",
      title: "Preparing for Stage Performance",
    },
    { id: 2, src: "/backstage-2.jpg", title: "Meet & Greet with Fans, Delhi" },
    { id: 3, src: "/backstage-3.jpg", title: "With Team Before Concert" },
    {
      id: 4,
      src: "/backstage-4.jpg",
      title: "Celebrity Interaction at Award Show",
    },
  ],
};

export const quotes = [
  {
    quote:
      "My music is a reflection of the diverse cultural tapestry of India, blended with global sounds that resonate with audiences everywhere.",
    source: "Harmeet Meet, Billboard India Interview, 2021",
  },
  {
    quote:
      "I believe in creating music that not only entertains but also connects on an emotional level. That's the true power of music.",
    source: "Harmeet Meet, Rolling Stone Magazine, 2020",
  },
  {
    quote:
      "From classical training to modern production techniques, my journey has been about bridging worlds through sound.",
    source: "Harmeet Meet, TEDx Talk, 2022",
  },
];

export const aboutContent = {
  earlyLife: `
    Harmeet Singh was born and raised in Gwalior, a city known for its rich cultural and musical heritage. His formative years at The Scindia School laid the foundation for a holistic approach to art and creativity. Later, his education at Sydenham College in Mumbai expanded his horizons and introduced him to the vibrant entertainment industry of the city.
    
    Growing up in a family that appreciated music, Harmeet developed an ear for melody from a young age. His formal training in classical music combined with an innate ability to understand contemporary trends would later become his signature style.
  `,

  journey: `
    Harmeet's journey in the music industry began with television appearances where his talent quickly caught the attention of producers and directors. What started as small compositions for television programs gradually evolved into full-fledged music direction for films.
    
    The formation of Meet Bros marked a significant milestone in his career, allowing him to collaborate and create music that would soon dominate the Indian music charts. The transition from a duo to establishing his individual identity as Harmeet Meet showcases his versatility and commitment to musical exploration.
  `,

  musicStyle: `
    Harmeet Meet's musical style defies simple categorization. His compositions range from high-energy club anthems that dominate dance floors to soulful ballads that touch hearts. This versatility has allowed him to work across various film genres and independent projects.
    
    His approach to music production combines traditional Indian instruments with contemporary electronic sounds, creating a unique fusion that appeals to diverse audiences. His keen sense of current musical trends, coupled with a deep respect for classical elements, results in compositions that feel both fresh and timeless.
  `,

  socialImpact: `
    Beyond entertainment, Harmeet has used his platform to advocate for mental health awareness through the WeCare Initiative. The tragic loss of his friend, actor Kushal Punjabi, to depression in 2019 motivated him to speak openly about mental health issues in the entertainment industry.
    
    Through benefit concerts, awareness campaigns, and personal advocacy, he continues to emphasize the importance of mental wellbeing, particularly among artists and creative professionals who often face unique pressures and challenges.
  `,
};
