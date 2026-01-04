import { NavLink } from 'react-router-dom'

const Project = () => {

    const Project = [
        {
            title: "Job Portal Backend",
            github: "github.com/Vikas46305/Job-Portal-Backend",
            live: "",
            description: "The Job Portal Backend is a secure RESTful API using Node.js, Express.js, and MongoDB. It supports job seekers, employers, and admins with features like job posts, applications, and role-based JWT authentication."
        },
        {
            title: "Youtube Backend",
            github: "github.com/Vikas46305/MERN_Youtube_Clone",
            live: "",
            description: "This backend project is a simplified version of a YouTube-like platform, built with Express.js and MongoDB, focusing on core functionality such as user authentication, video interaction (like/unlike), and channel features (subscribe/unsubscribe). JWT is used for secure, stateless authentication and protected routes."
        },
        {
            title: "Resume Builder With Gemini Ai",
            github: "github.com/Vikas46305/ResumeBuilder.ai.git",
            live: "airesume46305.netlify.app/",
            description: "An intelligent and modern resume builder powered by Gemini AI, built using Vite + React.js with advanced features like step-by-step form navigation, AI-assisted content generation, lazy loading with React Suspense, and full Redux Toolkit state management with Redux Persist for seamless user experience—even on page refresh."
        }
    ]

    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold">Project</h1>
                <div className="w-16 h-1.5 bg-orange-300 rounded my-1"></div>
            </div>

            <div className="m-7 text-sm space-y-4 overflow-hidden">
                {
                    Project.map((data, index) => (
                        <div key={index} className='space-y-1.5'>
                            <h1 className='text-xl font-semibold '>{data.title}</h1>
                            <div className='flex gap-5'>
                                <div><i class="ri-arrow-right-double-fill"></i></div>
                                <div className='flex items-center gap-2'>
                                    <p>Github Link : </p>
                                    <NavLink target='_blank' className="hover:text-indigo-500" to={data.github}>{data.github}</NavLink>
                                </div>
                            </div>
                            {
                                data.live.trim() && <div className='flex gap-5'>
                                    <div>
                                        <i class="ri-arrow-right-double-fill"></i>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p>Live Link : </p>
                                        <NavLink target='_blank' className="hover:text-indigo-500" to={data.live}>{data.live}</NavLink>
                                    </div>
                                </div>
                            }
                            <div className='flex gap-5'>
                                <p><i class="ri-arrow-right-double-fill"></i></p>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Project;
