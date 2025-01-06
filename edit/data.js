import { AiFillEdit } from "react-icons/ai"
import {SiCplusplus} from "react-icons/si"

export const details = {
        firstName: "Tushar",
        lastName: "Tiwari",
        role: "Web Developer",
        about: "Final Year Electronics and Communications Student at Indian Institute of Information Technology, Ranchi. Passionate about Web Dev!",
        email:"tushar21tiwari@gmail.com",
        gitHub: "https://github.com/tushar45264",
        instaGram: "https://www.instagram.com/tushar____45/",
        linkedIn: "https://www.linkedin.com/in/tushartiwari45/",
        twitter: ""
}
export const techMain = "I've worked with a range of technologies related to website development"

export const tech = [
    {
        id: "1",
        icon: () => <AiFillEdit/>,
        title: "Web Development",
        des: "MERN Stack, NextJS, GoLang"
    },
    {
        id: "2",
        icon: () => <SiCplusplus/>,
        title: "Languages",
        des: "C/C++, Javascript, Typescript, Python, Go"
    }
]

export const project = [
    {   
        id: "1",
        title: "EcoBite-Food waste Reduction System",
        img: "./5.png",
        des: "It connects food donors with food receivers and promotes sustainability. It features real-time food tracking, real-time chat between donors and receivers, and an online food claiming system.",
        tech: ["React", "NodeJs", "MongoDB", "Socket.io"],
        link: "https://github.com/tushar45264/EcoBite-FoodWasteReductionSystem"

    },
    {
        id: "2",
        title: "VibeVerse - Chat Application",
        img: "./4.png",
        des: "Real-time chat app with Next.js, Tailwind, TypeScript, and Pusher. 60% response time decrease, 30% user satisfaction increase. JWT auth, group chat, media sharing, MongoDB.",
        tech: ["Next.js v13", "Pusher", "Tailwind CSS", "Typescript"],
        link: "https://github.com/tushar45264/VibeVerse"
    },
    {
        id: "3",
        title: "NexChange - Ecommerce Store",
        img: "./6.png",
        des: "Extensive MERN stack e-commerce platform. Stripe integration, robust user auth, RESTful API, real-time updates.",
        tech: ["MERN", "Stripe", "Material-UI"],
        link: "https://github.com/tushar45264/E-Commerce"
    }
]