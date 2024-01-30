import { AiFillEdit } from "react-icons/ai"
import {SiCplusplus} from "react-icons/si"

export const details = {
        firstName: "Tushar",
        lastName: "Tiwari",
        role: "Web Developer",
        about: "Pre-Final Year Electronics and Communications Student at Indian Institute of Information Technology, Ranchi. Passionate about Web Dev!",
        email:"tushar.21ug2028@iiitranchi.ac.in",
        gitHub: "https://github.com/tushar45264",
        instaGram: "https://www.instagram.com/tushar____45/",
        linkedIn: "https://www.linkedin.com/in/tushar-tiwari-a44902228/",
        twitter: ""
}
export const techMain = "I've worked with a range of technologies related to website development"

export const tech = [
    {
        id: "1",
        icon: () => <AiFillEdit/>,
        title: "Web Development",
        des: "Experience with MERN Stack, NextJS, TailwindCSS, Typescript, Firebase"
    },
    {
        id: "2",
        icon: () => <SiCplusplus/>,
        title: "Languages",
        des: "Proficient in C++, Javascript, Python, C"
    }
]

export const project = [
    {
        id: "1",
        title: "VibeVerse - Chat Application",
        img: "./4.png",
        des: "Real-time chat app with Next.js, Tailwind, TypeScript, and Pusher. 60% response time decrease, 30% user satisfaction increase. JWT auth, group chat, media sharing, MongoDB.",
        tech: ["Next.js v13", "Pusher", "Tailwind CSS", "API", "Typescript"],
        link: "https://github.com/utkarsh0908/Table-Ordering"
    },
    {
        id: "2",
        title: "NexChange - Ecommerce Store",
        img: "./6.png",
        des: "Extensive MERN stack e-commerce platform. Stripe integration, robust user auth, RESTful API, real-time updates.",
        tech: ["MERN", "Stripe", "Material-UI"],
        link: "https://github.com/utkarsh0908/Store"
    },
    {
        id: "3",
        title: "Blog-Website",
        img: "./2.png",
        des: "Secure blog website with ExpressJs, Bootstrap, MongoDB, and Ejs. 2x faster rendering, user-friendly.",
        tech: ["ExpressJs", "Bootstrap", "EJs"],
        link: "https://github.com/utkarsh0908/SecretHub"
    },
    {
        id: "4",
        title: "Hotstar-Clone",
        img: "./3.png",
        des: "Hotstar Clone with React, Redux, Styled Components, and Firebase. Managed state, real-time data, user auth.",
        tech: ["React", "Redux", "Styled Comp", "API", "Firebase"],
        link: "https://github.com/utkarsh0908/WeatherApp"
    }
]