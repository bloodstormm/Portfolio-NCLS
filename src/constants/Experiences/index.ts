import { ExperiencesType } from "./../../types/Experiences/index";
import {
  FaReact,
  FaHtml5,
  FaPython,
  FaJira,
  FaDrupal,
  FaFigma,
  FaVideo,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiFileExcel2Line } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

export const experiences: ExperiencesType[] = [
  { 
    company: "CI&T - Software",
    initialDate: "03/2025",
    finalDate: "Atualmente",
    role: "UI Designer",
    stack: [FaJira, FaFigma, FaVideo],
  },
  {
    company: "Johnson & Johnson",
    initialDate: "01/2023",
    finalDate: "12/2024",
    role: "Estágio",
    stack: [FaJira, FaDrupal, FaFigma, FaReact],
    description:
      "- Desenvolvedor Front End com foco em UX/UI, responsável pela criação de novos componentes e páginas web otimizadas, aumentando a retenção de público no site em mais de 20% \n\n- Liderança na integração entre times de desenvolvimento, UX/UI e parceiros de negócios na América Latina, garantindo entregas rápidas e de alta qualidade \n\n- Responsável pelo rebranding do Janssen Pro, implementando a nova identidade visual no portal médico com JavaScript e Drupal, em parceria com a equipe de UX/UI",
  },
  {
    company: "Optimus GIS",
    initialDate: "08/2022",
    finalDate: "12/2022",
    role: "Estágio",
    description:
      "Criação de interfaces web para clientes de base florestal, como Suzano e Eldorado, usando ReactJS e TailwindCSS. Fui responsável por desenvolver e integrar front-end com APIs ",
    stack: [FaReact, SiTailwindcss, FaHtml5],
  },
  {
    company: "Villarta Elevadores",
    initialDate: "06/2021",
    finalDate: "06/2022",
    role: "Menor Aprendiz",
    description:
      "Atuação no setor de compras e almoxarifado, gerenciando cotações e o controle de estoque de peças. Fui reconhecido por propor melhorias na organização das atividades",
    stack: [RiFileExcel2Line, FaPython, HiOutlineMail],
  },
];
