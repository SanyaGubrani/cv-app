import React from "react";
import { EducationType } from "@/types/types";

interface DisplayEducationProps {
    education: EducationType[];
}

const DisplayEducation: React.FC<DisplayEducationProps> = ({ education }) => {
    return (
        <div className="flex flex-col items-start justify-center gap-2 mt-9 mb-6 mx-6">
            <h2 className="text-xl font-medium uppercase font-mono text-stone-500">
                Education
            </h2>
            {education.map((edu, index) => (
                <div
                    key={index}
                    className="w-full text-stone-700 flex flex-col leading-normal tracking-[0.02em] gap-y-2"
                >
                    <div className="w-full mx-auto flex gap-2 items-center justify-between">
                        <div className="flex gap-1 items-center justify-center">
                            <span className="font-medium">
                                {edu.degree || "Master's in Economics"}
                            </span>
                            <span>|</span>
                            <span>{edu.school || "University/College"}</span>
                            <span>|</span>
                            <span>{edu.location || "Location"}</span>
                        </div>
                        <p className="text-stone-600/80">
                            {edu.year || "March, 2024"}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DisplayEducation;
