import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";

import { RiTailwindCssFill } from "react-icons/ri";
import { SiAdobepremierepro, SiCanva, SiReaddotcv } from "react-icons/si";

import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

import furnitureStoreImg from "../assets/furnitureStore.png";
import ticTacToeImg from "../assets/tictactoe.png";
import sudukoSolverImg from "../assets/sudukoSolver.png";
import snakeGameImg from "../assets/snakeGame.png";
import amazonCloneImg from "../assets/amazonClone.png";
import algoVisualizerImg from "../assets/algoVisualizer.png";
import translingoGptImg from "../assets/translingoGpt.png";
import personalPortfolioImg from "../assets/personalPortfolio.png";
import focusFlowImg from "../assets/focusFlow.png";
import crowdFundImg from "../assets/crowdFund.png";
import riftwearImg from "../assets/riftwear.png";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Harshit Shrivastava",
  info: "Full-stack developer with a flair for graphic design and Software Development.",
};

export const ABOUT = {
  text1:
    "I create dynamic, responsive websites that blend creativity with efficiency",
  text2:
    "Hello! I'm Harshit Shrivastava, a full-stack developer with a flair for graphic design and Software Development. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.",
};

export const PROJECTS = [
  {
    title: "Rift Wear",
    subtitle:
      "An online e-commerce website for purchasing clothes with real users and real products",
    image: riftwearImg,
    link: "https://riftwear.in/",
  },
  {
    title: "Crowd Funding Platform",
    subtitle:
      "A crowd funding platform where you can create your own campaigns and get funds for it.",
    image: crowdFundImg,
    link: "https://crowd-funding-platform-pink.vercel.app/",
  },
  {
    title: "FocusFlow",
    subtitle:
      "A no distraction Youtube App where you get what you searched for.",
    image: focusFlowImg,
    link: "https://no-distraction-youtube-two.vercel.app/",
  },
  {
    title: "Furniture Store App",
    subtitle:
      "A full-stack Furniture Store App built with React, Node.js, Express.js and MongoDB",
    image: furnitureStoreImg,
    link: "https://github.com/Shrivastava-04/furnitureStoreApp",
  },
  {
    title: "Translingo Gpt",
    subtitle: "A web translator app that translates between langages.",
    image: translingoGptImg,
    link: "https://github.com/sen-Saptarshi/error404-hackfest24",
  },
  {
    title: "Algorithm Visualiser",
    subtitle:
      "A project that helps you to visualize how different sorting algorithms works.",
    image: algoVisualizerImg,
    link: "https://github.com/Shrivastava-04/algorithmVisualiser",
  },
  {
    title: "Personal Portfolio",
    subtitle: "A personal portfolio website designed with MERN stack.",
    image: personalPortfolioImg,
    link: "#",
  },
  {
    title: "Amazon Clone",
    subtitle: "A clone of Amazon made using HTML, CSS, and JavaScript",
    image: amazonCloneImg,
    link: "https://github.com/Shrivastava-04/Amazon_Clone",
  },
  {
    title: "Tic Tac Toe Game",
    subtitle: "A basic tic tac toe game built using React js.",
    image: ticTacToeImg,
    link: "https://github.com/Shrivastava-04/Tic-Tac-Toe-Game",
  },
  {
    title: "Sudoku Solver",
    subtitle:
      "A console based Sudoku solver built using c++ and concepts of Data Structures and Algotithm, mainly Backtracking.",
    image: sudukoSolverImg,
    link: "https://github.com/Shrivastava-04/Sudoku-Solver",
  },
  {
    title: "Snake Game",
    subtitle:
      "A console based snake game built using C++ and concepts of Data Structures and Algorithm.",
    image: snakeGameImg,
    link: "https://github.com/Shrivastava-04/Snake-Game",
  },
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "1 years",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "1 years",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "1 years",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl lg:text-6xl text-sky-600" />,
    name: "Tailwind css",
    experience: "1+ year",
  },
  {
    icon: (
      <FaGithub className="text-4xl lg:text-6xl text-slate-900 bg-white rounded-full" />
    ),
    name: "Git & Github",
    experience: "2+ year",
  },
  {
    icon: (
      <SiAdobepremierepro className="text-4xl lg:text-6xl  text-purple-950   " />
    ),
    name: "Premiere Pro",
    experience: "2+ year",
  },
  {
    icon: <SiCanva className="text-4xl lg:text-6xl  text-sky-500   " />,
    name: "Canva",
    experience: "2+ year",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=100090020540472&mibextid=JRoKGi",
    icon: (
      <FaFacebook
        fontSize={25}
        className="hover:opacity-80 hover:scale-125 transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
      />
    ),
  },
  {
    href: "https://www.instagram.com/shrivastava.4/",
    icon: (
      <FaInstagram
        fontSize={25}
        className="hover:opacity-80 hover:scale-125 transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
      />
    ),
  },
  {
    href: "https://x.com/shrivastava__4?t=0Y7qizJaKAiAClLM-eBkJA&s=09",
    icon: (
      <FaXTwitter
        fontSize={25}
        className="hover:opacity-80 hover:scale-125 transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
      />
    ),
  },
  {
    href: "https://github.com/Shrivastava-04",
    icon: (
      <FaGithub
        fontSize={25}
        className="hover:opacity-80 hover:scale-125 transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
      />
    ),
  },
  {
    href: "https://www.linkedin.com/in/harshitshrivastava01/",
    icon: (
      <FaLinkedin
        fontSize={25}
        className="hover:opacity-80 hover:scale-125 transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
      />
    ),
  },
  {
    href: "https://drive.google.com/file/d/1rNgcAWTXMPO6wOPlu_fqZwZ37Atx-TsR/view?usp=drive_link",
    icon: (
      <SiReaddotcv
        fontSize={25}
        className="hover:opacity-80 hover:scale-125 transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
      />
    ),
  },
];
