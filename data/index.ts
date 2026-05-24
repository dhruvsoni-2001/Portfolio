export const navItems = [
  { name: "About", link: "/#about" },
  { name: "Projects", link: "/#projects" },
  { name: "Testimonials", link: "/#testimonials" },
  { name: "Contact", link: "/#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Great products begin with great conversations — I thrive on clear, consistent communication. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg", // for Dark Background
    imgLight: "/computerDesk.jpg", // for Light Background
    spareImg: "",
  },
  {
    id: 2,
    title: "Timezone? Just a number. I align with teams across the globe seamlessly.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Evolving with tech, one deploy at a time.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Fueled by curiosity, driven by code. Let’s build what matters.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently sharpening my skills and building a rock-solid foundation.",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    // img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Got a vision? Let’s bring it to life together.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  //   {
  //     id: 1,
  //     title: "An Alarms Clock for Productivity",
  //     des: "An Alarm Clock for Productivity is a productivity app that helps you get things done in a more efficient way.",
  //     img: "/p1.svg",
  //     iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
  //     link: "https://github.com/dhruvsoni-2001/alarmclock",
  //   },
  //   {
  //     id: 2,
  //     title: "Aaven Pharmaceuticals",
  //     des: "A website for Aaven Pharmaceuticals with multiple pages and features.",
  //     img: "/aaven.svg",
  //     iconLists: ["/html.svg", "/css.svg", "/js.svg", "/wordpress.svg"],
  //     link: "https://aavenpharmaceutical.com/",
  //   },
  //   {
  //     id: 3,
  //     title: "Live Gold Silver Rate App",
  //     des: "A REAL-time Gold and Silver Rate App. This app is built as a PWA and can be installed on mobile devices. It is built using the latest tech stack and features a modern UI.",
  //     img: "/shivam.png",
  //     iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //     link: "https://github.com/adrianhajdin/ai_saas_app",
  //   },
  //   {
  //     id: 4,
  //     title: "Animated Apple Iphone 3D Website",
  //     des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //     img: "/p4.svg",
  //     iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //     link: "https://github.com/adrianhajdin/iphone",
  //   },
  // ];

  {
    id: 1,
    title: "Nexclock: AI-Powered Productivity Suite",
    des: "A comprehensive cross-platform productivity application. Features a React Native UI with precise alarm functionality built in native Kotlin. Integrated with SDLC tools, a reminder calendar for appointments, and a built-in AI chatbot capable of interfacing with free APIs and guiding users to run small, local LLMs (300M to 1B parameters).",
    img: "/nex.jpeg",
    iconLists: ["/re.svg", "/kotlin.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/dhruvsoni-2001/alarmclock",
  },
  {
    id: 2,
    title: "Aaven Pharmaceuticals",
    des: "A robust corporate website developed for a generic medicine manufacturing company based in Mehsana, exporting to Africa, Southeast Asia, and South America. Built on WordPress and heavily customized using raw HTML, CSS, and JavaScript for specialized functionality.",
    img: "/aaven.svg",
    iconLists: ["/wordpress.svg", "/html.svg", "/css.svg", "/js.svg"],
    link: "https://aavenpharmaceutical.com/",
  },
  {
    id: 3,
    title: "Shivam Gold Tharad",
    des: "A real-time, precision-driven tracking platform displaying live gold and silver bullion market rates. Engineered to deliver highly accurate market data with a modern, responsive user interface.",
    img: "/shivamgold.svg",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg"],
    link: "https://shivamgold.store/", // Update this link when ready
  },
  {
    id: 4,
    title: "Jewelry Calculator",
    des: "A dedicated React Native application engineered to digitalize and securely store jewelry transaction details, eliminating manual bookkeeping errors. State management is efficiently handled via Zustand, utilizing AsyncStorage for robust local data persistence.",
    img: "/Jewellcal.png", // You will need to add a new image for this
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg"],
    link: "https://github.com/dhruvsoni-2001", // Update this link when ready
  },
  {
    id: 5,
    title: "Wholesale Ornaments Portal",
    des: "An enterprise-level portal currently in development for wholesale jewelers. Designed to meticulously track the daily entry, exit, and workflow of precious metals and bulk inventory.",
    img: "/OrnaDesk.png", // Placeholder image
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"], // Adjust based on your stack
    link: "#",
  },
  {
    id: 6,
    title: "Universal Billing Software",
    des: "A cross-platform billing solution currently in active development, engineered to provide seamless invoicing, financial tracking, and receipt generation across both mobile and desktop environments.",
    img: "/UBS.png", // Placeholder image
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg"], // Adjust based on your stack
    link: "#",
  },
];
export const testimonials = [
  {
    quote:
      "We Collaborated with Dhruv on a project and were impressed with his work ethic and dedication. He is a valuable asset to any team. From the first interaction, Dhruv was professional, responsive, and clearly passionate about his work. He consistently went above and beyond to ensure our project was a success, and his technical skills are top-notch. I would highly recommend Dhruv to anyone looking for a talented and reliable developer.",
    name: "Aaryan Soni",
    title: "Vice President of Shivam Gold",
  },
  {
    quote:
      "We were looking for a developer who could maintain our website and provide us with the best possible service. Dhruv did an excellent job and we are very happy with his work. He was always available to help us with any issues we had and his response time was excellent.",
    name: "Rakesh patel",
    title: "Owner of PJM Exports",
  },
  {
    quote:
      "We both worked on this small project together. It was a great experience working with him. He helped me a lot in Development of the project and I am grateful to him for that. It was my First Project 'Aven Pharmaceuticals' and he was the one who guided me through it also helped me in the project.",
    name: "Jay Sadhu",
    title: "DevOps Enginner",
  },
  {
    quote:
      "We hired Dhruv to our company to work on a project and he did an excellent job. He was always available to help us with any issues we had and his response time was excellent. He is a valuable asset to any team. From the first interaction, Dhruv was professional, responsive, and clearly passionate about his work. He consistently went above and beyond to ensure our project was a success, and his technical skills are top-notch. I would highly recommend Dhruv to anyone looking for a talented and reliable developer.",
    name: "Anil Nayer",
    title: "Director of OpsXpress",
  },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/dhruvsoni-2001",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  //   link: "https://x.com/DhruvSoni15176",
  // },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/dhruv-k-soni/",
  },
  {
    id:3,
    img:"/whatsapp.svg",
    link:"https://wa.me/918780591947",
  }
];