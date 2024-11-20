import React from "react";

interface DisplaySkillsProps {
    skills: string[];
}

const DisplaySkills: React.FC<DisplaySkillsProps> = ({ skills }) => {
    return (
        <div className="flex flex-col items-start justify-center gap-2 mt-9 mb-6 mx-6">
            <h2 className="text-xl font-medium uppercase font-mono text-stone-500">
                Skills
            </h2>
            <div className="text-stone-700 leading-normal tracking-[0.02em]">
                {skills && skills.length > 0 ? (
                    <ul className="list-disc pl-10 grid grid-cols-3 grid-rows-4 w-full">
                        {skills.map((skill, i) => (
                            <li key={i}>{skill}</li>
                        ))}
                    </ul>
                ) : (
                    <ul className="list-disc pl-10 grid grid-cols-3 w-full gap-x-10 gap-y-1">
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>Node.js</li>
                        <li>Python</li>
                        <li>HTML & CSS</li>
                        <li>Git & GitHub</li>
                        <li>SQL</li>
                        <li>REST APIs</li>
                        <li>Docker</li>
                        <li>Unit Testing</li>
                        <li>Agile Methodologies</li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default DisplaySkills;
