import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { urlFor, client } from "../client";
import { Header } from "../components";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Details = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const getProject = async () => {
            const query = `*[_type == "projects" && _id == "${id}"]`;

            try {
                const response = await client.fetch(query);
                setProject(response[0]);
            } catch (err) {
                console.error(err);
            }
        };

        getProject();
    }, [id]);

    return (
        <div className="bg-indigo-950 min-h-screen bg-cover overflow-hidden">
            <Header />

            <div className="container mx-auto">
                <h2 className="font-bold text-3xl my-5 text-center">Project Details</h2>

                <motion.div
                    variants={fadeIn("down", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className="my-5 w-full flex-col text-justify"
                >
                    <div className="bg-indigo-900 font-bold flex flex-row">
                        <div className="px-3 basis-1/2">Title</div>
                        <div className="px-3 basis-1/2">Period</div>
                    </div>
                    <div className="flex flex-row">
                        <div className="px-3 basis-1/2">{project?.title}</div>
                        <div className="px-3 basis-1/2">{project?.startDate} - {project?.endDate}</div>
                    </div>

                    <div className="bg-indigo-900 font-bold flex flex-row">
                        <div className="px-3 basis-1/2">Github Link</div>
                        <div className="px-3 basis-1/2">Project Link</div>
                    </div>
                    <div className="flex flex-row">
                        <div className="px-3 basis-1/2">
                            {project?.gitLink ? (
                                <a
                                    className="hover:cursor-pointer hover:font-bold hover:underline"
                                    onClick={e => {
                                        e.preventDefault();
                                        window.open(`${project?.gitLink}`, "_blank");
                                    }}
                                >
                                    {project?.gitLink}
                                </a>
                            ) : (
                                <p>Unavailable</p>
                            )}
                        </div>
                        <div className="px-3 basis-1/2">
                            {project?.projectLink ? (
                                <a
                                    className="hover:cursor-pointer hover:font-bold hover:underline"
                                    onClick={e => {
                                        e.preventDefault();
                                        window.open(`${project?.projectLink}`, "_blank");
                                    }}
                                >
                                    {project?.projectLink}
                                </a>
                            ) : (
                                <p>Unavailable</p>
                            )}
                        </div>
                    </div>

                    <div className="bg-indigo-900 font-bold px-3">Project Info</div>
                    <div className="px-3">{project?.projectInfo}</div>

                    <div className="bg-indigo-900 font-bold px-3">Description</div>
                    <div className="px-3">{project?.description}</div>

                    <div className="bg-indigo-900 font-bold px-3">Stack</div>
                    <div className="px-3">
                        {project?.stack.map((s, key) => (
                            <span key={key} className="mr-5">{s}</span>
                        ))}
                    </div>

                    <div className="bg-indigo-900 font-bold px-3">My Contributions</div>
                    <div className="px-3">
                        {project?.contributions?.map((c, index) => (
                            <p key={index}>● {c}</p>
                        ))}
                    </div>
                </motion.div>
                
                <h2 className="font-bold text-3xl mt-10 text-center">Screenshots</h2>
                <div className="flex-col mt-5">
                    {project?.screenshots?.map((ss, key) => (
                        <div key={key} className="mb-20 w-[80vw] h-[80vh] bg-indigo-950 mx-auto">
                            <img src={urlFor(ss.image)} alt="screenshot" className="w-full h-full object-contain" />
                            <p className="text-center">{ss.caption}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Details;