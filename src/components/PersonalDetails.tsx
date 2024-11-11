import React from "react";
import { PersonalDetailsType } from "@/types/types";

type Props = {
    name: string;
    title: string;
    contact: string;
    email: string;
    location: string;
    setPersonalDetails: React.Dispatch<
        React.SetStateAction<PersonalDetailsType>
    >;
};

const PersonalDetails = ({
    name,
    title,
    contact,
    email,
    location,
    setPersonalDetails,
}: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPersonalDetails((prev: PersonalDetailsType) => ({
            ...prev,
            [name]: value,
        }));
    };

    const divStyles = `flex items-center justify-center p-2`;
    const inputStyles = `p-2 text-lg font-normal font-sans tracking-normal border-[3px] border-stone-500 rounded-lg`;
    const labelStyles = `w-28 font-medium mx-2 text-xl tracking-wide`;

    return (
        <div className="w-1/2 mx-auto min-h-screen bg-white flex flex-col items-start justify-start gap-2">
            <h1 className=" p-2 text-2xl font-semibold mb-2">
                Personal Details
            </h1>
            <div className={divStyles}>
                <label className={labelStyles}>Name </label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    className={inputStyles}
                />
            </div>
            <div className={divStyles}>
                <label className={labelStyles}>Job Title </label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    className={inputStyles}
                />
            </div>
            <div className={divStyles}>
                <label className={labelStyles}>Contact </label>
                <input
                    type="text"
                    name="contact"
                    value={contact}
                    onChange={handleChange}
                    className={inputStyles}
                />
            </div>
            <div className={divStyles}>
                <label className={labelStyles}>Email </label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className={inputStyles}
                />
            </div>
            <div className={divStyles}>
                <label className={labelStyles}>Location </label>
                <input
                    type="text"
                    name="location"
                    value={location}
                    onChange={handleChange}
                    className={inputStyles}
                />
            </div>
        </div>
    );
};

export default PersonalDetails;
