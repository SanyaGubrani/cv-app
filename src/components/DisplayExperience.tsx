import React from "react";
import { ExperienceProps } from "@/types/types";

interface DisplayExperienceProps {
    experiences: ExperienceProps[];
}

const DisplayExperience: React.FC<DisplayExperienceProps> = ({
    experiences,
}) => {
    return (
        <div className="flex flex-col items-start justify-center gap-1 mt-9 mb-6 mx-6">
            <h2 className="text-xl font-medium uppercase font-mono text-stone-500">
                Work Experience
            </h2>
            {experiences.map((experience, index) => (
                <div
                    key={index}
                    className="w-full text-stone-700 flex flex-col leading-normal tracking-[0.02em] gap-y-2"
                >
                    <div className="space-y-1">
                        <div className="w-full mx-auto flex items-center justify-between ">
                            <div className="flex items-center justify-start gap-1 mt-2">
                                <p className="font-semibold">
                                    {experience.company || "Tech Corp"}
                                </p>
                                <span>|</span>
                                {experience.position || "Software Developer"}
                                <span>|</span>
                                {experience.location || "New York, NY"}
                            </div>
                            <p className="text-stone-600/80">
                                {experience.duration || "2020-2024"}
                            </p>
                        </div>
                        {experience.description ? (
                            <ul className="list-disc pl-10">
                                {experience.description
                                    .split(",")
                                    .map((item, index) => (
                                        <li key={index}>{item.trim()}</li>
                                    ))}
                            </ul>
                        ) : (
                            <ul className="list-disc pl-10">
                                <li>
                                    Developed and maintained web applications
                                    using React and Node.js
                                </li>
                                <li>
                                    Collaborated with cross-functional teams to
                                    design and implement new features
                                </li>
                                <li>
                                    Improved application performance by
                                    optimizing code and database queries
                                </li>
                                <li>
                                    Utilized REST APIs to integrate external
                                    services and enhance functionality
                                </li>
                                <li>
                                    Conducted code reviews and provided feedback
                                    to ensure coding standards
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DisplayExperience;
