import React, { useState, useEffect } from "react";
import { urlFor, client } from "../client";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const getSkills = async () => {
            const query = "*[_type == 'skills']";

            try {
                const response = await client.fetch(query);
                setSkills(response);
            } catch (err) {
                console.error(err);
            }
        };

        getSkills();
    }, []);

    return (
        <React.Fragment>
            <div id="skills" className="section pt-5 flex-col">
                <div className="font-bold text-3xl mb-5">Skills</div>

                <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className="w-[95%] flex justify-center flex-wrap gap-3"
                >
                    {skills
                        .sort((a, b) => a.index - b.index)
                        .map(skill => (
                            <div key={skill._id}>
                                <div className="bg-slate-200 w-20 h-20 rounded-full flex items-center">
                                    <img
                                        src={urlFor(skill.image)}
                                        alt={skill.title}
                                        className="mx-auto w-10 h-10"
                                    />
                                </div>
                                <p className="text-center text-sm font-bold">{skill.name}</p>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </React.Fragment>
    );
};

export default Skills;
