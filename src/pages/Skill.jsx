import React from "react";

const Skill = () => {
    const Skill = [
        {
            Frontend: [
                "HTML",
                "CSS",
                "Javascript",
                "React js",
                "Tailwind",
                "Redux",
                "Motion",
                "Shadcn UI",
                "Zustand",
            ],
        },
        {
            Backend: [
                "Node Js",
                "Express Js",
                "Mongodb",
                "Mysql",
                "Redis",
                "AWS",
            ],
        },
        {
            Language: ["Javascript", "Java", "Typescript"],
        },
        {
            Tool: [
                "Git",
                "Github",
                "VS Code",
                "Postman",
                "Docker",
                "Netlify",
                "Vercel",
                "Photoshop",
            ],
        },
    ];

    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold">My Skill</h1>
                <div className="w-16 h-1.5 bg-orange-300 rounded my-1"></div>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2 md:px-4">
                {Skill.map((category, index) => {
                    const categoryName = Object.keys(category)[0];
                    const skillsList = category[categoryName];

                    return (
                        <div
                            key={index}
                            className="border bg-white/10 text-white/80 p-3 rounded shadow"
                        >
                            <h2 className="text-lg font-semibold mb-2">
                                {categoryName}
                            </h2>
                            <ul className="list-none list-inside grid grid-cols-2 md:grid-cols-3 text-center gap-4">
                                {skillsList.map((skill, i) => (
                                    <li
                                        key={i}
                                        className="px-4 py-0.5 rounded-2xl border"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Skill;
