import React from "react";
import { EducationType } from "@/types/types";
import { TrashIcon, PlusIcon } from "lucide-react";

interface EducationProps {
    education: EducationType[];
    setEducation: React.Dispatch<React.SetStateAction<EducationType[]>>;
}

const Education: React.FC<EducationProps> = ({ education, setEducation }) => {
    const handleEducationChange = (
        index: number,
        field: keyof EducationType,
        value: string
    ) => {
        setEducation((prev: EducationType[]) =>
            prev.map((edu: EducationType, i: number) =>
                i === index ? { ...edu, [field]: value } : edu
            )
        );
    };

    const addEducation = () => {
        setEducation((prev: EducationType[]) => [
            ...prev,
            {
                school: "",
                location: "",
                degree: "",
                year: "",
            },
        ]);
    };

    const deleteEducation = (index: number) => {
        setEducation((prev: EducationType[]) =>
            prev.filter((_, i) => i !== index)
        );
    };

    const divStyles = `flex items-center justify-center p-2 gap-2`;
    const inputStyles = `p-2 text-lg font-normal font-sans tracking-normal border-[3px] border-stone-500 rounded-lg`;
    const labelStyles = `w-28 font-medium mx-2 text-xl tracking-wide`;

    return (
        <div>
            <div className="flex items-center mb-2">
                <h1 className=" p-2 text-2xl font-semibold">Education</h1>
                <button
                    onClick={addEducation}
                    className="bg-stone-400 p-2 mx-4 text-white rounded-[50%] font-medium"
                >
                    <PlusIcon size={28} />
                </button>
            </div>

            {education.map((edu, index) => (
                <div key={index}>
                    <div className={divStyles}>
                        <label className={labelStyles}>School </label>
                        <input
                            name="school"
                            value={edu.school}
                            onChange={(e) =>
                                handleEducationChange(
                                    index,
                                    "school",
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
                            value={edu.location}
                            onChange={(e) =>
                                handleEducationChange(
                                    index,
                                    "location",
                                    e.target.value
                                )
                            }
                            className={inputStyles}
                        />
                    </div>

                    <div className={divStyles}>
                        <label className={labelStyles}>Degree </label>
                        <input
                            name="degree"
                            value={edu.degree}
                            onChange={(e) =>
                                handleEducationChange(
                                    index,
                                    "degree",
                                    e.target.value
                                )
                            }
                            className={inputStyles}
                        />
                    </div>

                    <div className={divStyles}>
                        <label className={labelStyles}>Year </label>
                        <input
                            name="year"
                            value={edu.year}
                            onChange={(e) =>
                                handleEducationChange(
                                    index,
                                    "year",
                                    e.target.value
                                )
                            }
                            className={inputStyles}
                        />
                    </div>
                    <div>
                        <span className="border-b-4"></span>
                        <button
                            onClick={() => deleteEducation(index)}
                            className="bg-stone-200 gap-2 px-4 py-2 rounded-lg font-medium m-2 my-5 flex items-center justify-center"
                        >
                            <span>Remove Education</span>
                            <TrashIcon />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Education;
