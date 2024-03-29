import { useRef } from "react";
import axios from 'axios';
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Snapgram",
        img: "/snapgram.jpg",
        desc: "Snapgram is an inspiring and friendly React app that allows users to register, create their unique profile and share the exciting moments of their lives. With Snapgram, users can post photos and videos, add creative captions, and share experiences with other community members.",
        link: "https://snapgram-azure.vercel.app/",
    },
    {
        id: 2,
        title: "Anime Vault",
        img: "/anime-vault.jpg",
        desc: "'Anime Vault' is an exciting mobile app for anime lovers, created with a passion for Japanese animation in mind. Immerse yourself in the world of anime with this app that gives you access to a huge range of anime series, movies and cartoons.",
        link: "https://anime-vault-pied.vercel.app",
    },
    {
        id: 3,
        akul: true,
        title: "Business Process Hub",
        img: "/akul.jpg",
        desc: "Welcome to the Unified Process Hub — your key to streamlined efficiency. Manage your business processes seamlessly from a centralized hub, take command of operations, monitor real-time progress, and make informed decisions. Elevate your management strategy with unparalleled efficiency.",
        link: "http://dev.akul.az/?showDemo=true",
    },
    {
        id: 4,
        title: "Hotelzz",
        img: "/hotel-managements.jpg",
        desc: "Experience an Exquisite Hotel Immersed in Rich History and Timeless Elegance.",
        link: "https://hotel-management-delta.vercel.app/",
    },
    {
        id: 5,
        title: "Figma clone",
        img: "/figma-clone.jpg",
        desc: "A minimalistic Figma clone to show how to add real-world features like live collaboration with cursor chat, comments, reactions, and drawing designs (shapes, image upload) on the canvas using fabric.js.",
        link: "https://rk-figma.vercel.app/",
    },
    {
        id: 6,
        title: "Shoes",
        img: "/shoes.jpg",
        desc: "The 'Shoes' website is an interactive web resource developed using React, designed to sell shoes. It offers a wide range of shoes of different styles and brands, an easy-to-use interface for browsing products, and an easy purchasing process.",
        link: "https://shoes-green.vercel.app/",
    },
    {
        id: 7,
        title: "AI Brainwave",
        img: "/ai-brainwave.jpg",
        desc: "Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.",
        link: "https://ai-brainwave-five.vercel.app/",
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={item.link}
                            >
                                See Demo
                            </a>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div
                    style={{ scaleX }}
                    className="progressBar"
                ></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
