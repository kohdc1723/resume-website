import React, { useState, useEffect } from "react";
import { urlFor, client } from "../client";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Projects = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            const query = "*[_type == 'projects']";

            try {
                const response = await client.fetch(query);
                setProjects(response);
            } catch (err) {
                console.error(err);
            }
        };

        getProjects();
    }, []);

    return (
        <React.Fragment>
            <div id="projects" className="section pt-5 flex-col h-fit min-h-screen">
                <div className="font-bold text-3xl mb-5">Projects</div>
                
                <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className="w-[90%] flex justify-evenly flex-wrap gap-5"
                >
                    {projects
                        .sort((a, b) => b.index - a.index)
                        .map(project => (
                            <div key={project._id} className="bg-cyan-800 w-[400px] h-fit rounded-md p-2">
                                <div className="group relative">
                                    <img
                                        src={urlFor(project.thumbnail)}
                                        alt={project.name}
                                        className="w-[384px] h-[200px] object-contain bg-slate-700"
                                    />
                                    <div className="w-full h-full bottom-0 invisible absolute group-hover:visible bg-indigo-950 opacity-95 flex-col">
                                        <div className="flex flex-wrap justify-evenly gap-2 p-2">
                                            {project?.stack?.map((s, key) => (
                                                <span
                                                    key={key}
                                                    className="bg-cyan-700 px-3 text-base rounded-full font-bold"
                                                >
                                                    {s}
                                                </span>
                                            ))}
                                        </div>

                                        <p className="leading-tight break-words text-center p-2">{project?.projectInfo}</p>

                                        <div className="flex gap-5 justify-center pt-3">
                                            {project.gitLink ? (
                                                <AiFillGithub
                                                    className="hover:cursor-pointer text-cyan-700 hover:text-cyan-500 text-4xl"
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        window.open(`${project.gitLink}`, "_blank");
                                                    }}
                                                />
                                            ) : (
                                                <span></span>
                                            )}
                                            {project.projectLink ? (
                                                <AiOutlineLink
                                                    className="hover:cursor-pointer text-cyan-700 hover:text-cyan-500 text-4xl"
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        window.open(`${project.projectLink}`, "_blank");
                                                    }}
                                                />
                                            ) : (
                                                <span></span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-center font-bold">{project.title}</p>
                                <p className="text-center">{`${project.startDate} - ${project.endDate}`}</p>
                                <div className="text-center">
                                    <span
                                        className="underline hover:cursor-pointer"
                                        onClick={e => {
                                            e.preventDefault();
                                            navigate(`/details/${project._id}`);
                                        }}
                                    >
                                        {`View details >>`}
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </motion.div>
                {/* <div className="w-[90%] flex justify-evenly flex-wrap gap-5">
                    {projects
                        .sort((a, b) => b.index - a.index)
                        .map(project => (
                            <div key={project._id} className="bg-cyan-800 w-[400px] h-fit rounded-md p-2">
                                <div className="group relative">
                                    <img
                                        src={urlFor(project.thumbnail)}
                                        alt={project.name}
                                        className="w-[384px] h-[200px] object-contain bg-slate-700"
                                    />
                                    <div className="w-full h-full bottom-0 invisible absolute group-hover:visible bg-indigo-950 opacity-95 flex-col">
                                        <div className="flex flex-wrap justify-evenly gap-2 p-2">
                                            {project?.stack?.map((s, key) => (
                                                <span
                                                    key={key}
                                                    className="bg-cyan-700 px-3 text-base rounded-full font-bold"
                                                >
                                                    {s}
                                                </span>
                                            ))}
                                        </div>

                                        <p className="leading-tight break-words text-center p-2">{project?.projectInfo}</p>

                                        <div className="flex gap-5 justify-center pt-3">
                                            {project.gitLink ? (
                                                <AiFillGithub
                                                    className="hover:cursor-pointer text-cyan-700 hover:text-cyan-500 text-4xl"
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        window.open(`${project.gitLink}`, "_blank");
                                                    }}
                                                />
                                            ) : (
                                                <span></span>
                                            )}
                                            {project.projectLink ? (
                                                <AiOutlineLink
                                                    className="hover:cursor-pointer text-cyan-700 hover:text-cyan-500 text-4xl"
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        window.open(`${project.projectLink}`, "_blank");
                                                    }}
                                                />
                                            ) : (
                                                <span></span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-center font-bold">{project.title}</p>
                                <p className="text-center">{`${project.startDate} - ${project.endDate}`}</p>
                                <div className="text-center">
                                    <span
                                        className="underline hover:cursor-pointer"
                                        onClick={e => {
                                            e.preventDefault();
                                            navigate(`/details/${project._id}`);
                                        }}
                                    >
                                        {`View details >>`}
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div> */}
            </div>
        </React.Fragment>
    );
};

export default Projects;
