import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import MainLayout from "./layout/MainLayout";
import Loading from "./_components/Loading";

const About = lazy(() => import("./pages/About"));
const Education = lazy(() => import("./pages/Education"));
const Skill = lazy(() => import("./pages/Skill"));
const Project = lazy(() => import("./pages/Project"));
const Contact = lazy(() => import("./pages/Contact"));
const Experience = lazy(() => import("./pages/Experience"));

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<About />} />
                        <Route path="education" element={<Education />} />
                        <Route path="skill" element={<Skill />} />
                        <Route path="project" element={<Project />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="/experience" element={<Experience />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
export default App;
