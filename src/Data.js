import { FaHtml5, FaCss3Alt, FaNodeJs, FaUser, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { SiTypescript, SiSketchup, SiAdobephotoshop, SiJavascript, SiGmail, SiPhp, SiMysql } from "react-icons/si";
import dev1 from "./assets/dev1.png";

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

export const icons = [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />, <SiPhp />, <SiMysql />, <FaNodeJs />, <SiSketchup />, <SiAdobephotoshop />]

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
    img: dev1,
    name: "project 1",
    category: "web",
    url: "https://kiki-id.tk"
  },
  {
    id: 2,
    img: dev1,
    name: "project 2",
    category: "web",
    url: "https://wukomarosa.tk/portofolio"
  },
  {
    id: 3,
    img: dev1,
    name: "project 3",
    category: "web",
    url: "#"
  },
  {
    id: 4,
    img: dev1,
    name: "project 4",
    category: "bot",
    url: "#"
  },
  {
    id: 5,
    img: dev1,
    name: "project 5",
    category: 'bot',
    url: "#"
  },
  {
    id: 6,
    img: dev1,
    name: "project 6",
    category: "design",
    url: "#"
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
