import { FaHtml5, FaCss3Alt, FaNodeJs, FaUser, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { SiTypescript, SiSketchup, SiAdobephotoshop, SiJavascript, SiGmail } from "react-icons/si";
import portfolio from "./assets/portfolio.jpg"
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <FaInstagram />,
  <FaTwitter />,
  <FaLinkedin />,
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Hariyono Rizki"
  },
  {
    id: 2,
    icon: <FaWhatsapp />,
    key: "Whatsapp",
    value: "+6285883789662"
  },
  {
    id: 3,
    icon: <SiGmail />,
    key: "Email",
    value: "contact@kiki-id.tk"
  }
]

export const icons = [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />, <FaNodeJs />, <SiSketchup />, <SiAdobephotoshop />]

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Photo Editor",
    company: "Gendhis Photo Studio"
  },
  {
    di: 2,
    year: "2021",
    position: "Freelance",
    company: "GitHub Contributors"
  },
  {
    id: 3,
    year: "2019",
    position: "Intern Web Dveloper",
    company: "shop.com.mm"
  }
]
export const finishes = [
  {
    id: 1,
    number: '3+',
    itemName: "Years Of Experience"
  },
  {
    id: 2,
    number: "13+",
    itemName: "Satisfied Customers"
  },
  {
    id: 3,
    number: "20+",
    itemName: "Designed Items"
  },
  {
    id: 4,
    number: "15+",
    itemName: "Clients Served"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "bot"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'bot'
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design"
  }
]


export const workNavs = [
  "All", "Web", "Bot", "Design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Mojokerto, East Java, Indonesia 61363"
  },
  {
    id: 2,
    icon: <SiGmail />,
    infoText: "contact@kiki-id.tk"
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    infoText: "+6285883789662"
  }
]
