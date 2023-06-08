import React, { Fragment } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import profile from "../assets/profile.jpg";

const Profile = () => {
    return (
        <React.Fragment>
            <section className="h-[calc(100vh-76px)] bg-indigo-950" id="profile">
                <div className="container flex items-center h-full mx-auto lg:pb-[88px] pb-[72px]">
                    <div className="flex flex-col gap-5 mx-auto lg:flex-row lg:items-center lg:justify-between">
                        <div className="lg:flex-2/3 text-center font-secondary lg:text-left">
                            <motion.div
                                variants={fadeIn("down", 0.3)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.5 }}
                            >
                                <div className="text-4xl lg:text-5xl font-bold">
                                    Hello! I'm <span className="font-bold text-pink-700">Dong-chan Koh</span>
                                </div>
                                <div className="text-2xl lg:text-3xl font-bold mt-1">
                                    seeking a <span className="font-bold text-cyan-700">Software Developer</span> job
                                </div>
                            </motion.div>
                            <motion.div
                                variants={fadeIn("down", 0.3)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.5 }}
                            >
                                <div className="max-w-2xl">
                                    <div className="mt-3 text-xl break-words">
                                        I'm a recent graduate of Computer Systems Technology program at BCIT.
                                    </div>
                                    <div className="text-xl break-words">
                                        With technical knowledge of computer science and experiences in full-stack web development projects, I'm eager to start my career in tech industry.
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={fadeIn("down", 0.3)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.5 }}
                            >
                                <div className="flex gap-7 justify-center lg:justify-start mt-5">
                                    <FaLinkedin
                                        className="text-4xl text-pink-700 hover:text-pink-500 hover:cursor-pointer"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.open("https://www.linkedin.com/in/kohdc1723", "_blank");
                                        }}
                                    />
                                    <FaGithub
                                        className="text-4xl text-pink-700 hover:text-pink-500 hover:cursor-pointer"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.open("https://github.com/kohdc1723", "_blank");
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </div>
                        <motion.div
                            variants={fadeIn("down", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.5 }}
                            className="mx-auto lg:flex-1/3"
                        >
                            <img 
                                src={profile}
                                alt="profile"
                                className="w-[300px] h-[300px] lg:w-[360px] lg:h-[360px] rounded-full shadow-pink-700 shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Profile;
