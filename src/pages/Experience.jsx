import React from "react";

const Experience = () => {

    const Experience = [
        "Built MERN stack applications during a 6-month training-cum-internship at CETPA Infotech, including a job portal backend using Node.js.",
        "Developed an AI-powered resume builder using React.js and Gemini AI for dynamic resume generation.",
        "Worked with React.js, Node.js, Express.js, MongoDB, and UI libraries like Tailwind CSS & Material UI to create responsive and scalable applications.",
        "Integrated multiple third-party APIs.",
        "Designed and improved UI components using React.js, Tailwind CSS, and Material UI, incorporating mentor and peer feedback to improve usability and navigation flow.",
        "Developed and maintained RESTful APIs using Node.js and Express.js, following modular architecture and best practices."
    ]

    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold">Experience</h1>
                <div className="w-16 h-1.5 bg-orange-300 rounded my-1"></div>
            </div>

            <div className="m-7 text-white/80 text-sm">
                <div>
                    <h1 className="text-xl font-semibold my-2">Cetpa infotech | MERN Stack</h1>
                    <p>Noida, Uttar Pradesh | SEP 2025 - Present</p>
                </div>

                <div className="mx-3">
                    {
                        Experience.map((data, index) => (
                            <div key={index} className="flex gap-4">
                                <p><i class="ri-arrow-right-double-fill"></i></p>
                                <p className="my-1">{data}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Experience;
