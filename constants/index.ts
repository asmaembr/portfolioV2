import { RxHome, RxPerson, RxDashboard, RxClipboard, RxActivityLog, RxAccessibility, RxAvatar, RxChatBubble } from "react-icons/rx";

export const SkillData = [
  {
    name: "C#",
    Image: "/csharp.svg",
    width: 50,
    height: 50,
  },
  {
    name: ".Net",
    Image: "/dotnet.svg",
    width: 50,
    height: 50,
  },
  {
    name: "Spring",
    Image: "/spring.svg",
    width: 50,
    height: 50,
  },
  {
    name: "Intellij",
    Image: "/intellij.svg",
    width: 50,
    height: 50,
  },
  {
    name: "Java",
    Image: "/java.svg",
    width: 50,
    height: 50,
  },
  {
    name: "Git ",
    Image: "/git.svg",
    width: 50,
    height: 50,
  },
  {
    name: "Figma",
    Image: "/figma.svg",
    width: 50,
    height: 50,
  },
  {
    name: "Azure",
    Image: "/azure.svg",
    width: 50,
    height: 50,
  },
  {
    name: "Docker",
    Image: "/docker.svg",
    width: 50,
    height: 50,
  },
  {
    name: "Gitlab",
    Image: "/gitlab.svg",
    width: 50,
    height: 50,
  },
  {
    name: "Jira",
    Image: "/jira.svg",
    width: 50,
    height: 50,
  },
  {
    name: "Slack",
    Image: "/slack.svg",
    width: 50,
    height: 60,
  },
  {
    name: "Flutter",
    Image: "/flutter.svg",
    width: 50,
    height: 50,
  },
  {
    name: "React",
    Image: "/react.svg",
    width: 50,
    height: 50,
  },
  {
    name: "Html 5",
    Image: "/html.svg",
    width: 50,
    height: 50,
  },
  {
    name: "Css",
    Image: "/css.svg",
    width: 50,
    height: 50,
  },
  {
    name: "Python",
    Image: "/python.svg",
    width: 50,
    height: 50,
  },
  {
    name: "Django",
    Image: "/django.svg",
    width: 50,
    height: 50,
  },

];
export const Socials = [

  {
    name: "Linkedin",
    src: "/linkedin.svg",
    link: "https://www.linkedin.com/in/asmae-moubarriz/",
    filter : 'brightness(0)',

  },
  {
    name: "Github",
    src: "/github.svg",
    link: "https://github.com/asmaembr",
    filter : 'brightness(0) ',
  
  },
  {
    name: "Email",
    src: "/mail.svg",
    link: "mailto:asmae.moubr@gmail.com",
    filter : 'brightness(0)',

  },  
  {
    name: "Discord",
    src: "/discord.svg",
    link: "https://discordapp.com/users/965362198199300146",
    filter : 'brightness(0)',
  }
];
export const Projects = [
  {
    title:"Audio File Management System",
    text: "Soundwave is a Web application built with Spring boot , Angular and Auth0 for the authentification , it allows users to manage their audio files, with features like audio file upload, like, search, and delete.",
    src: "/soundwave.ico",
    link:"https://github.com/asmaembr/Soundwave-June-2024",
    width: 60,
    height:60,
    img:"/github.svg",
    alt:'git repository',
    filter :'invert(1)'
  },
  {
    title:"Task Management System",
    text: "TaskFlow is a Web application built with Spring MVC and Thymeleaf. Managers  manage their projects and their tasks , as for the Members update the status of the tasks assigned to them and receive notifications.",
    src: "/taskflow.ico",
    link:"https://github.com/asmaembr/TaskFlow",
    width: 60,
    height:60,
    img:"/github.svg",
    alt:'git repository',
    filter :' invert(1) '
  },
  
  {
    title:"Car Rental System",
    text: "Car Rental is a Jira project for a PHP web application that allows users to rent cars. As a Scrum Master , I used tools to manage the workflow of the project , including Jira, Trello, GitLab, SmartDraw, Miro.",
    src: "/carental.svg",
    link:"https://emsi-project-mangement.atlassian.net/jira/software/projects/SCRUM/boards/1/timeline",
    width: 60,
    height: 60,
    img:"/jira.svg",
    alt:'jira project',  
    filter :'brightness(0) invert(1)'
  },
  {
    title:"ChatBot",
    text: "Amigo is a Multi-platforme application that allows users to communicate with the Gemini API using texting features. This Flutter ChatBot application includes packages such as DashChat and DialogFlow",
    src: "/amigo.svg",
    link:"https://github.com/asmaembr/Amigo-app",
    width: 60,
    height:60,  
    img:"/github.svg",
    alt:'git repository',
      filter :'invert(1)'
  },
  {
    title:"Music Player  ",
    text: "Jazz101 is a Mobile application that provides features such as playing and skipping jazz songs, and displaying the song's title and artist. This Flutter Music Player application includes packages such as AudioPlayer.",
    src: "/jazzapp.svg",
    link:"https://github.com/asmaembr/flutter-music-app",
    width: 60,
    height: 60,
   img:"/github.svg",
    alt:'git repository',
      filter :'invert(1)'
  },
  {
    title:"Budget Management System",
    text: "BudgetPlus is a Web application built with Java Android and SQLite , it allows users to manage their budget, with features like adding and deleting expenses and Revenus as well as a chart to visualize the budget.",
    src: "/budgetplus.png",
    link:"https://github.com/asmaembr/Gestion-Budgetaire",
    width: 50,
    height: 50,
    img:"/github.svg",
    alt:'git repository',
      filter :'invert(1)'
  },

  {
    title:"Course Management System",
    text: "MyCourse is a WordPress site to handle certificates and courses, with a Flutter mobile UI using the concept of WebViews and Network Dependencies to allow a direct connexion to the wordpress site .",
    src: "/mycourse.png",
    link:"https://github.com/asmaembr/MyCourse-Flutter-App",
    width: 70,
    height: 60, 
    img:"/github.svg",
    alt:'git repository',
    filter :'invert(1)'
  },
  {
    title:"Artificial Intelligence Project",
    text: "Facia is a Python Desktop Application developped that uses an OpenCV AI Model for age and gender detection from a given image or in real time, and prompt the results in a Tkinter UI.",
    src: "/facia.png",
    link:"https://github.com/asmaembr/Artificial-Intelligence-Project-June-2023-",
    width: 70,
    height: 70,
    img:"/github.svg",
    alt:'git repository',  
    filter :'invert(1)'
  },
  {
    title:"Activity Management System",
    text:" In the Context of An Intership , My task was to develop a Django Web application that allows LaPoste to manage their activities, with features like adding activities, and logging in as an admin or a user.",
    src: "/poste.png",
    link:"https://github.com/asmaembr/django-internship-2023",
    width: 80,
    height: 80,
    img:"/github.svg",
    alt:'git repository',
      filter :'invert(1)'
  },
];
export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/AboutMe",
    icon: RxPerson,
    link: "./AboutMe",
  },
  {
    name: "/Projects",
    icon: RxDashboard,
    link: "./Projects",
  },
  {
    name: "/ContactMe",
    icon: RxChatBubble,
    link: "./ContactMe",
  }
];