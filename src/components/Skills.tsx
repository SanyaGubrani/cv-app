import React from "react";

interface SkillsProps {
    skills: string[];
    setSkills: React.Dispatch<React.SetStateAction<string[]>>;
}

const Skills: React.FC<SkillsProps> = ({ skills, setSkills }) => {
    const textareaStyles = `p-2 text-lg font-normal font-sans tracking-normal border-[3px] border-stone-500 rounded-lg`;

    return (
        <div>
            <div className="flex flex-col items-start mb-2">
                <h1 className=" p-2 text-2xl font-semibold">Skills</h1>
                <p className="text-stone-600 pl-2 mb-3">
                    (Separate each skill by a comma)
                </p>
            </div>
            <div className="flex flex-col items-start justify-center pl-2">
                <textarea
                    name="description"
                    value={skills}
                    rows={4}
                    cols={40}
                    className={textareaStyles}
                    onChange={(e) => setSkills(e.target.value.split(","))}
                />
            </div>
        </div>
    );
};

export default Skills;
