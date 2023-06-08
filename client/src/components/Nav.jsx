import React from "react";
import { Link } from "react-scroll";
import { IoHomeSharp, IoSchoolSharp, IoCodeSlashSharp, IoHammerSharp, IoBriefcaseSharp } from "react-icons/io5"

const Nav = () => {
    return (
        <React.Fragment>
            <nav className="fixed bottom-2 lg:bottom-4 w-full overflow-hidden z-50">
                <div className="container mx-auto">
                    <div className="w-full bg-black/20 backdrop-blur-xl rounded-full max-w-sm mx-auto py-2 px-2 flex justify-between items-center text-2xl text-white/70">
                        <Link
                            to="profile"
                            className="cursor-pointer w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-700/50"
                            activeClass="bg-pink-700 rounded-full"
                            offset={-200}
                            smooth={true}
                            spy={true}
                        >
                            <IoHomeSharp />
                        </Link>
                        <Link
                            to="education"
                            className="cursor-pointer w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-700/50"
                            activeClass="bg-pink-700 rounded-full"
                            smooth={true}
                            spy={true}
                        >
                            <IoSchoolSharp />
                        </Link>
                        <Link
                            to="experiences"
                            className="cursor-pointer w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-700/50"
                            activeClass="bg-pink-700 rounded-full"
                            smooth={true}
                            spy={true}
                        >
                            <IoBriefcaseSharp />
                        </Link>
                        <Link
                            to="skills"
                            className="cursor-pointer w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-700/50"
                            activeClass="bg-pink-700 rounded-full"
                            smooth={true}
                            spy={true}
                        >
                            <IoHammerSharp />
                        </Link>
                        <Link
                            to="projects"
                            className="cursor-pointer w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-700/50"
                            activeClass="bg-pink-700 rounded-full"
                            smooth={true}
                            spy={true}
                        >
                            <IoCodeSlashSharp />
                        </Link>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Nav;
