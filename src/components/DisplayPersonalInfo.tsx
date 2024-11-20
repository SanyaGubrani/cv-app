import React from "react";
import { PersonalDetailsType } from "@/types/types";
import Divider from "@/shared/Divider";

interface DisplayPersonalInfoProps {
    personalInfo: PersonalDetailsType;
}

const DisplayPersonalInfo: React.FC<DisplayPersonalInfoProps> = ({
    personalInfo,
}) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-2">
                <h2 className="tracking-widest text-3xl font-medium uppercase font-mono text-stone-700">
                    {personalInfo.name || "Katherine Cooper"}
                </h2>
                <h4 className="tracking-wide text-xl font-medium uppercase font-mono text-stone-500">
                    {personalInfo.title || "Software Developer"}{" "}
                </h4>
            </div>
            <Divider />
            <div className="flex items-center justify-center gap-2 text-stone-700">
                <p>{personalInfo.contact || "033-222-5555"}</p>
                <span className="text-stone-500">|</span>
                <p>{personalInfo.email || "katherine.cooper@gmail.com"}</p>
                <span className="text-stone-500">|</span>
                <p>{personalInfo.location || "Dexter Street, 1255 New York"}</p>
            </div>
        </>
    );
};

export default DisplayPersonalInfo;
