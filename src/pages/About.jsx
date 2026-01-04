import React from "react";

const About = () => {
    const CardItem = [
        {
            icon: <i class="ri-figma-line"></i>,
            title: "Web Design",
            description:
                "Crafting visually stunning, user-friendly designs that leave an impact.",
        },
        {
            icon: <i class="ri-reactjs-line"></i>,
            title: "Frontend Development",
            description:
                "Creating interactive and responsive user interfaces with modern frameworks.",
        },
        {
            icon: <i class="ri-server-fill"></i>,
            title: "Backend development",
            description:
                "Designing secure, scalable servers, APIs, and database solutions.",
        },
    ];

    return (
        <div>
            <div>
                <h1 className="text-3xl font-semibold">About Me</h1>
                <div className="w-16 h-1.5 rounded-2xl bg-orange-300 my-2"></div>
            </div>

            <div className="my-4 space-y-2">
                <h1>Hey, I am Vikas Sharma!</h1>
                <p>
                    I'm a passionate MERN stack developer focused on building
                    interactive, responsive web applications. I’ve worked on
                    personal and academic projects using MongoDB, Express.js,
                    React.js, and Node.js. I enjoy creating user-friendly
                    experiences with clean design, smooth animations, and
                    seamless transitions. Committed to continuous learning, I
                    strive to deliver impactful, modern web solutions.
                </p>
            </div>

            <div>
                <h1 className="text-2xl font-semibold">What i'm doing</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-3">
                    {CardItem.map((data, index) => (
                        <ul key={index} className="bg-white/20 p-4 rounded-xl">
                            <li className="flex items-center gap-5">
                                <div className="text-2xl px-2 py-1 bg-white/30 rounded text-orange-300">
                                    {data.icon}
                                </div>
                                <div>
                                    <h1 className="text-md font-semibold">
                                        {data.title}
                                    </h1>
                                    <p className="text-sm">
                                        {data.description}
                                    </p>
                                </div>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
