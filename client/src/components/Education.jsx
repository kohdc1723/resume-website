import React from "react";
import { IoSchoolSharp } from "react-icons/io5"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Education = () => {
    return (
        <React.Fragment>
            <div id="education" className="section pt-5 flex-col">
                <div className="font-bold text-3xl mb-5">Education</div>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        contentStyle={{
                            background: "rgb(112 26 117)",
                            color: "white",
                            boxShadow: "none",
                            padding: "10px 20px"
                        }}
                        contentArrowStyle={{ borderRight: "20px solid rgb(112 26 117)" }}
                        date="2016 MAR - 2020 JUN"
                        icon={<IoSchoolSharp className="text-white" />}
                        iconStyle={{ background: "rgb(112 26 117)" }}
                    >
                        <div className="flex items-baseline gap-5">
                            <h3 className="font-bold text-2xl">Hanseo University</h3>
                            <h4 className="font-bold text-sm">Seosan, South Korea</h4>
                        </div>
                        <h4 className="text-lg">Airline Pilot Flight Operations Degree</h4>
                        <p>● Withdrew in junior year</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{
                            background: "rgb(131 24 67)",
                            color: "white",
                            boxShadow: "none",
                            padding: "10px 20px"
                        }}
                        contentArrowStyle={{ borderRight: "20px solid rgb(131 24 67)" }}
                        date="2021 SEP - 2023 MAY"
                        icon={<IoSchoolSharp className="text-white" />}
                        iconStyle={{ background: "rgb(131 24 67)" }}
                    >
                        <div className="flex items-baseline gap-5">
                            <h3 className="font-bold text-2xl">British Columbia Institute of Technology</h3>
                            <h4 className="font-bold text-sm">Burnaby BC, Canada</h4>
                        </div>
                        <h4 className="text-lg">Computer Systems Technology Diploma</h4>
                        <p>● Information Systems option</p>
                        <p>● Graduated in May 2023</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </React.Fragment>
    );
};

export default Education;
