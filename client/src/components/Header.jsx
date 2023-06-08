import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <div className="h-16 container mx-auto mt-3">
                <div className="h-full flex justify-start items-center">
                    <div
                        className="w-fit text-5xl text-slate-300 font-bold hover:cursor-pointer"
                        onClick={e => {
                            e.preventDefault();
                            navigate("/");
                        }}
                    >
                        Chan.Koh
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;
