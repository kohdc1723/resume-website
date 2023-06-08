import React from "react";
import { Route, Routes } from "react-router-dom";
import { Profile, Header, Nav, Education, Experiences, Skills, Projects } from "../components";

const Home = () => {
    return (
        <div className="bg-indigo-950 bg-no-repeat bg-cover overflow-hidden">
            <Header />
            <Profile />
            <Education />
            <Experiences />
            <Skills />
            <Projects />
            <Nav />
        </div>
    );
};

export default Home;