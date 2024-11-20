import React, { useState } from "react";
import Summary from "./Summary";

interface DisplaySummaryProps {
    summary: string;
}

const DisplaySummary: React.FC<DisplaySummaryProps> = ({ summary }) => {
    return (
        <div className="flex flex-col items-start justify-center gap-2 mt-9 mb-6 mx-6">
            <h2 className="text-xl font-medium uppercase font-mono text-stone-500">
                Professional Overview
            </h2>
            <div className="text-stone-700 leading-normal tracking-[0.02em]">
                {summary ||
                    `Software developer with 8+ years of building web applications and microservices.
                            I combine coding skills with cloud architecture to create fast, reliable systems
                            on AWS and Azure. Experienced in JavaScript frameworks, Python, and container
                            management with Docker and Kubernetes. I've led dev teams, helped junior
                            developers grow, and built CI/CD pipelines that cut deployment time by
                            40%. Currently exploring serverless systems and ways to use AI in production code.`}
            </div>
        </div>
    );
};

export default DisplaySummary;
