import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import { PersonalDetailsType } from "@/types/types";
import Divider from "@/shared/Divider";

const DisplayPersonalDetails = () => {
    const [personalDetails, setPersonalDetails] = useState<PersonalDetailsType>(
        {
            name: "",
            title: "",
            contact: "",
            email: "",
            location: "",
        }
    );
    return (
        <div className="flex w-full p-6">
            <PersonalDetails
                name={personalDetails.name}
                title={personalDetails.title}
                contact={personalDetails.contact}
                email={personalDetails.email}
                location={personalDetails.location}
                setPersonalDetails={setPersonalDetails}
            />

            <div className="w-1/2 mx-auto min-h-screen items-start justify-center bg-gray-100 p-3 py-6">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h2 className="tracking-widest text-3xl font-medium uppercase font-mono text-stone-700">
                        {personalDetails.name || "Katherine Cooper"}
                    </h2>
                    <h4 className="tracking-wide text-xl font-medium uppercase font-mono text-stone-500">
                        {personalDetails.title || "Software Developer"}{" "}
                    </h4>
                </div>
                <Divider />
                <div className="flex items-center justify-center gap-2 text-stone-700">
                    <p>{personalDetails.contact || "033-222-5555"}</p>
                    <span className="text-stone-500">|</span>
                    <p>
                        {personalDetails.email || "katherine.cooper@gmail.com"}
                    </p>
                    <span className="text-stone-500">|</span>
                    <p>
                        {personalDetails.location ||
                            "Dexter Street, 1255 New York"}
                    </p>
                </div>
                <Divider />
            </div>
        </div>
    );
};

export default DisplayPersonalDetails;
