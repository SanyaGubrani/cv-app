import PersonalDetails from "./PersonalDetails";
import { PersonalDetailsType } from "@/types/types";
import Divider from "@/shared/Divider";
import Summary from "./Summary";
import Experience from "./Experience";
import { ExperienceProps } from "@/types/types";
import Education from "./Education";
import { EducationType } from "@/types/types";
import Skills from "./Skills";
import DisplayPersonalInfo from "./DisplayPersonalInfo";
import DisplaySummary from "./DisplaySummary";
import DisplayExperience from "./DisplayExperience";
import DisplayEducation from "./DisplayEducation";
import DisplaySkills from "./DisplaySkills";
import useLocalStorage from "@/hooks/useLocalStorage";

const DisplayCV = () => {
    const [personalDetails, setPersonalDetails] =
        useLocalStorage<PersonalDetailsType>("personalDetails", {
            name: "",
            title: "",
            contact: "",
            email: "",
            location: "",
        });
    const [summary, setSummary] = useLocalStorage<string>("summary", "");
    const [experiences, setExperiences] = useLocalStorage<ExperienceProps[]>(
        "experiences",
        [
            {
                company: "",
                location: "",
                position: "",
                duration: "",
                description: "",
            },
        ]
    );

    const [education, setEducation] = useLocalStorage<EducationType[]>(
        "education",
        [
            {
                school: "",
                location: "",
                degree: "",
                year: "",
            },
        ]
    );

    const [skills, setSkills] = useLocalStorage<string[]>("skills", []);

    return (
        <div className="flex w-full ">
            <div className="w-[40%] px-5 mx-auto py-5 h-[1240px] space-y-4 custom-scrollbar overflow-y-scroll bg-white flex flex-col items-start justify-start gap-2">
                <PersonalDetails
                    name={personalDetails.name}
                    title={personalDetails.title}
                    contact={personalDetails.contact}
                    email={personalDetails.email}
                    location={personalDetails.location}
                    setPersonalDetails={setPersonalDetails}
                />
                <Divider />
                <Summary summary={summary} setSummary={setSummary} />
                <Experience
                    setExperience={setExperiences}
                    experiences={experiences}
                />
                <Education education={education} setEducation={setEducation} />
                <Skills skills={skills} setSkills={setSkills} />
            </div>

            <div className="w-[60%] mx-auto items-start justify-center bg-gray-100 p-8">
                {/* Personal Details */}
                <DisplayPersonalInfo personalInfo={personalDetails} />
                <Divider />

                {/* Summary */}
                <DisplaySummary summary={summary} />
                <Divider />

                {/* Expereince */}
                <DisplayExperience experiences={experiences} />
                <Divider />

                {/* Education */}
                <DisplayEducation education={education} />
                <Divider />

                {/* Skills */}
                <DisplaySkills skills={skills} />
            </div>
        </div>
    );
};

export default DisplayCV;
