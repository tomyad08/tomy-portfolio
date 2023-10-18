interface Port {
  id: number;
  name: string;
  picture: string;
  description: string;
  link: string;
}

export const DataPort: Port[] = [
  {
    id: 1,
    name: "Binar Car Rental Admin",
    picture: "/bcr-car.png",
    description:
      "This website was built by our team (3 people). Then, token technology is used as a key to enter the main page. On the main page, users can do CRUD (Create, Read, Update, and Delete) databases that have provided by the Binar Academy API (Rest API) and Dashboard feature.",
    link: "https://bcr-admin-nu.vercel.app/",
  },
  {
    id: 2,
    name: "Game Alien Ditembakin",
    picture: "/game.png",
    description:
      "This is the first game project using React JS. On the front page, users can be pampered with 3D effects (parallax effect). Then go to the main page, two aliens that move freely randomly and independently. The user must double click on the moving alien image to earn points.",
    link: "https://alien-ditembakin.vercel.app/",
  },
  {
    id: 3,
    name: "Harmony Energy Dashboard",
    picture: "/dashboard.png",
    description:
      "This is a dummy project dashboard to understand business process requirements and employee activity needs using React JS and Tailwind CSS. The available features include login, main menu, project progress curve, driver reservation, HSE card, task department, announcement, help and employee data.",
    link: "https://dashboard-office-react.vercel.app/",
  },
  {
    id: 4,
    name: "Admin Data Mahasiswa",
    picture: "/mern.png",
    description:
      "This is my first project using MERN (Mongo DB, Express JS, React JS, and Node JS) stack. To make better security web, I use Json Web Token to create random string and unique.  Then, this website has provided CRUD (Create, Read, Update, and Delete).",
    link: "https://github.com/tomyad08/frontend-mern",
  },
  {
    id: 5,
    name: "WhatsApp Boot Using Node JS",
    picture: "/whatsapp.png",
    description:
      "The WhatsApp bot I created uses Node.js technology in combination with the @whiskeysockets/baileys module and WebSocket. The bot's response includes the ability to automatically reply to messages and respond when triggered by incoming data. Additionally, to facilitate future function development and minimize errors in complex code, I use TypeScript.",
    link: "https://github.com/tomyad08/wa-api ",
  },
  {
    id: 6,
    name: "Tomy Mengajar",
    picture: "/tomymengajar.png",
    description:
      "Tomy mengajar is private online website for UTBK preparation. It builds using Next JS  and Tailwind CSS.  The feature has some forms (signup, login, and joining form) and test online with time limit 90000s.  And for connecting to database, I use REST API.",
    link: "https://tomymengajar.vercel.app/",
  },
];
