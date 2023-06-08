import React from "react";
import { IoBriefcaseSharp } from "react-icons/io5"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

const Experiences = () => {
    return (
        <React.Fragment>
            <div id="experiences" className="section pt-5 flex-col">
                <div className="font-bold text-3xl mb-5">Experiences</div>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        contentStyle={{
                            background: "rgb(6 78 59)",
                            color: "white",
                            boxShadow: "none",
                            padding: "10px 20px"
                        }}
                        contentArrowStyle={{ borderRight: "20px solid rgb(6 78 59)" }}
                        date="2016 AUG - 2018 APR (21 months)"
                        icon={<IoBriefcaseSharp className="text-white" />}
                        iconStyle={{ background: "rgb(6 78 59)" }}
                    >
                        <div className="flex items-baseline gap-5">
                            <h3 className="font-bold text-xl">US 8th Army</h3>
                            <h4 className="font-bold text-sm">Seoul, South Korea</h4>
                        </div>
                        <h4 className="text-lg">Air Operations Specialist</h4>
                        <p>● Military service as Korean Augmentation to the United States Army</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{
                            background: "rgb(22 78 99)",
                            color: "white",
                            boxShadow: "none",
                            padding: "10px 20px"
                        }}
                        contentArrowStyle={{ borderRight: "20px solid rgb(22 78 99)" }}
                        date="2023 JAN - 2023 APR (4 months)"
                        icon={<IoBriefcaseSharp className="text-white" />}
                        iconStyle={{ background: "rgb(22 78 99)" }}
                    >
                        <div className="flex items-baseline gap-5">
                            <h3 className="font-bold text-xl">DevRel.Agency</h3>
                            <h4 className="font-bold text-sm">London, GB</h4>
                        </div>
                        <h4 className="text-lg">Software Developer</h4>
                        <p>● 5-sprint BCIT ISSP (Industry Sponsored Student Project) program</p>
                        <p>● Developed a <span className="font-bold">"Developer Journey Map"</span>, a visualization that identifies the path a developer follows and experiences</p>
                        <p>● React.js / Node.js / Express.js / MongoDB</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="shadow-none"
                        contentStyle={{
                            background: "rgb(30 58 138)",
                            color: "white",
                            boxShadow: "none",
                            padding: "10px 20px"
                        }}
                        contentArrowStyle={{ borderRight: "20px solid rgb(30 58 138)" }}
                        date="2023 APR - 2023 MAY (1 month)"
                        icon={<IoBriefcaseSharp className="text-white" />}
                        iconStyle={{ background: "rgb(30 58 138)" }}
                    >
                        <div className="flex items-baseline gap-5">
                            <h3 className="font-bold text-xl">Love Your Planet Foundation</h3>
                            <h4 className="font-bold text-sm">Chilliwack, BC, Canada</h4>
                        </div>
                        <h4 className="text-lg">Software Developer</h4>
                        <p>● 5-sprint BCIT ISSP (Industry Sponsored Student Project) program</p>
                        <p>● Participated in the development cycle of <span className="font-bold">"Love Your Planet Mobile App"</span> which is an easy-to-use social media for sustainability</p>
                        <p>● React Native / Node.js / Express.js / MongoDB</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </React.Fragment>
    );
};

export default Experiences;
