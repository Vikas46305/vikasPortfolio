import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { NavLink, useLocation } from "react-router-dom";

const Aside = () => {

    const location = useLocation()

    const Links = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Education",
            link: "/education",
        },
        {
            name: "Skill",
            link: "/skill",
        },
        {
            name: "Project",
            link: "/project",
        },
        {
            name: "Contact",
            link: "/contact",
        },
    ];

    const UserLink = [
        {
            icon: <i className="ri-mail-line"></i>,
            label: "Email Id",
            link: "vikassharma46305@gmail.com",
        },
        {
            icon: <i className="ri-github-fill"></i>,
            label: "Github",
            link: "github.com/Vikas46305",
        },
        {
            icon: <i className="ri-linkedin-box-fill"></i>,
            label: "Linkedin",
            link: "linkedin.com/in/vikas46305",
        },
        {
            icon: <i className="ri-map-pin-fill"></i>,
            label: "Address",
            link: "Kushinagar, Uttar Pradesh",
        },
    ];

    return (
        <div>
            <div className="space-y-4 overflow-hidden hidden md:flex flex-col">
                <div className="text-center">
                    <img
                        src="https://avatars.githubusercontent.com/u/154689108?v=4"
                        alt="Profile Image"
                        className="w-32 h-32 rounded-full m-auto mt-5"
                    />
                    <h1 className="text-2xl font-semibold my-2">Vikas Sharma</h1>
                    <p className="bg-white/10 rounded px-2.5 py-0.5 w-fit m-auto text-sm">
                        Full Stack Developer
                    </p>
                </div>

                <div className="w-full h-0.5 bg-white/60"></div>

                <div className="space-y-4">
                    {UserLink.map((data, index) => (
                        <ul key={index}>
                            <li className="flex items-center gap-4">
                                <div className="bg-white/20 px-1 rounded text-2xl">
                                    {data.icon}
                                </div>
                                <div className="text-sm cursor-pointer">
                                    <label className="text-white/60">
                                        {data.label}
                                    </label>
                                    <p>{data.link}</p>
                                </div>
                            </li>
                        </ul>
                    ))}
                    <div className="bg-white/20 w-full p-1.5 text-center rounded-lg">
                        <NavLink
                            target="_blank"
                            to='https://drive.google.com/file/d/1goEi9n7t4VDyV2_hW1mVwbGBv4TEByb4/view?usp=drive_link' variant="outline">
                            View Resume
                            <i className="ri-eye-line ml-2"></i>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="md:hidden">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <div className="flex justify-between">
                            <div>
                                <div className="flex gap-5">
                                    <img src="https://avatars.githubusercontent.com/u/154689108?v=4" alt="Profile Image" className="w-14 h-14 rounded-full" />
                                    <div>
                                        <h1 className="text-lg font-semibold">Vikas Sharma</h1>
                                        <p className="bg-white/20 px-3 py-0.5 rounded text-sm">Full Stack Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <AccordionTrigger />
                            </div>

                        </div>
                        <AccordionContent>

                            <div className="h-[1px] bg-white/30 my-3"></div>

                            <ul className="space-y-1">
                                <li>
                                    Email id : vikassharma46305@gmail.com
                                </li>
                                <li>
                                    Github : <NavLink
                                        to="github.com/Vikas46305" target="_blank">
                                        github.com/Vikas46305
                                    </NavLink>
                                </li>
                                <li>
                                    linkedin : <NavLink
                                        to="linkedin.com/in/vikas46305" target="_blank">
                                        linkedin.com/in/vikas46305
                                    </NavLink>
                                </li>

                                <div className="bg-white/20 w-full p-1.5 text-center rounded-lg">
                                    <NavLink
                                        target="_blank"
                                        to='https://drive.google.com/file/d/1goEi9n7t4VDyV2_hW1mVwbGBv4TEByb4/view?usp=drive_link' variant="outline">
                                        View Resume
                                        <i className="ri-eye-line ml-2"></i>
                                    </NavLink>
                                </div>

                            </ul>
                            <div className="h-[1px] bg-white/30 my-3"></div>
                            <div className="grid grid-cols-3 items-center gap-3">
                                {Links.map((data, index) => (
                                    <div key={index}>
                                        <NavLink
                                            to={data.link}
                                            className={`${data.link === location.pathname &&
                                                "text-orange-300 font-serif"
                                                }`}
                                        >
                                            {data.name}
                                        </NavLink>
                                    </div>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

        </div>
    );
};

export default Aside;
