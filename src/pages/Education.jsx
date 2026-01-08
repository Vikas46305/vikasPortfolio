import { useEffect } from "react";

const Education = () => {
    useEffect(() => {
        document.title = "Vikas Sharma - Education";
    }, []);

    const Education = [
        {
            collage: "IIMT University",
            address: "Meerut Uttar Pradesh | 2025",
            Option: [
                "Completed my Bachelors in Computer Application and achieved the aggregated CGPA 6.8.",
                "Actively being a part of Tech Society as a Coordinator and Mentor. Participated in many hackathon and led many projects with collaboration of students and professors.",
            ],
        },
        {
            collage: "Buddha Inter Collage",
            address: "Kushinagar Uttar Pradesh | 2022",
            Option: [
                "Completed 12th achieving aggregated percentage 60.2%",
                "Took part in school level events to enhance my interpersonal skills.",
            ],
        },
        {
            collage: "Buddha Inter Collage",
            address: "Kushinagar Uttar Pradesh | 2020",
            Option: [
                "Completed 10th achieving aggregated percentage 69.5%.",
                "Being a part of many technical and literacy clubs.",
                "Had a chance to be prefect for an entire year",
            ],
        },
    ];

    return (
        <div>
            <div className="flex items-center text-3xl font-semibold gap-4">
                <div className="text-orange-300">
                    <i class="ri-graduation-cap-fill"></i>
                </div>
                <h1>Education</h1>
            </div>

            <div className="flex relative left-3.5 -top-1.5 gap-5">
                <div className="w-0.5 md:h-[48vh] h-[70vh] bg-white"></div>
                <div>
                    {Education.map((data, index) => (
                        <ul className="my-5 mx-3" key={index}>
                            <li className="text-sm text-white/80">
                                <p className="text-xl font-semibold text-white/90">
                                    {data.collage}
                                </p>
                                <p>{data.address}</p>
                                <div>
                                    {data.Option.map((newData, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-3 ml-2 mt-1"
                                        >
                                            <p>
                                                <i class="ri-arrow-right-double-line"></i>
                                            </p>
                                            <p>{newData}</p>
                                        </div>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
