import React from "react";
import { ExperienceProps } from "@/types/types";
import { TrashIcon, PlusIcon } from "lucide-react";


interface WorkExperienceProps {
    setExperience: React.Dispatch<React.SetStateAction<ExperienceProps[]>>;
    experiences: ExperienceProps[];
}

const Experience: React.FC<WorkExperienceProps> = ({
    setExperience,
    experiences,
}) => {
    const handleExperienceChange = (
        index: number,
        field: keyof ExperienceProps,
        value: string
    ) => {
        setExperience((prev: ExperienceProps[]) =>
            prev.map((exp: ExperienceProps, i: number) =>
                i === index ? { ...exp, [field]: value } : exp
            )
        );
    };

    const handleAddExperience = () => {
        setExperience((prev) => [
            ...prev,
            {
                company: "",
                location: "",
                position: "",
                duration: "",
                description: "",
            },
        ]);
    };

    const handleDeleteExperience = (index: number) => {
        setExperience((prev: ExperienceProps[]) =>
            prev.filter((_, i) => i !== index)
        );
    };

    const divStyles = `flex items-center justify-center p-2 gap-2`;
    const inputStyles = `p-2 text-lg font-normal font-sans tracking-normal border-[3px] border-stone-500 rounded-lg`;
    const labelStyles = `w-28 font-medium mx-2 text-xl tracking-wide`;
    const textareaStyles = `p-2 text-lg font-normal font-sans tracking-normal border-[3px] border-stone-500 rounded-lg`;

    return (
        <div>
            <div className="flex items-center mb-2">
                <h1 className=" p-2 text-2xl font-semibold">Work Experience</h1>
                <button
                    onClick={handleAddExperience}
                    className="bg-stone-400 p-2 mx-4 text-white rounded-[50%] font-medium"
                >
                    <PlusIcon size={28}/>
                </button>
            </div>

            {experiences.map((exp, index) => (
                <div
                    key={index}
                    className="flex flex-col items-start justify-start gap-5"
                >
                    <div className={divStyles}>
                        <label className={labelStyles}>Company Name </label>
                        <input
                            name="company"
                            value={exp.company}
                            onChange={(e) =>
                                handleExperienceChange(
                                    index,
                                    "company",
                                    e.target.value
                                )
                            }
                            className={inputStyles}
                        />
                    </div>
                    <div className={divStyles}>
                        <label className={labelStyles}>Location </label>
                        <input
                            name="location"
                            value={exp.location}
                            onChange={(e) =>
                                handleExperienceChange(
                                    index,
                                    "location",
                                    e.target.value
                                )
                            }
                            className={inputStyles}
                        />
                    </div>
                    <div className={divStyles}>
                        <label className={labelStyles}>Role </label>
                        <input
                            name="position"
                            value={exp.position}
                            onChange={(e) =>
                                handleExperienceChange(
                                    index,
                                    "position",
                                    e.target.value
                                )
                            }
                            className={inputStyles}
                        />
                    </div>

                    <div className={divStyles}>
                        <label className={labelStyles}>Duration </label>
                        <input
                            name="duration"
                            value={exp.duration}
                            onChange={(e) =>
                                handleExperienceChange(
                                    index,
                                    "duration",
                                    e.target.value
                                )
                            }
                            className={inputStyles}
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center pl-2">
                        <label className={labelStyles}>Description </label>
                        <p className="text-stone-600 pl-2 mb-3">
                            (Separate each point by a comma)
                        </p>

                        <textarea
                            name="description"
                            value={exp.description}
                            onChange={(e) =>
                                handleExperienceChange(
                                    index,
                                    "description",
                                    e.target.value
                                )
                            }
                            rows={4}
                            cols={40}
                            className={textareaStyles}
                        />
                    </div>
                    <div>
                        <button
                            onClick={() => handleDeleteExperience(index)}
                            className="bg-stone-200 gap-2 px-4 py-2 rounded-lg font-medium m-2 mb-5 flex items-center justify-center"
                        >
                            <span>Remove Experience</span>
                            <TrashIcon/>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experience;
