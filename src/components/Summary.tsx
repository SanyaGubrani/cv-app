import React from "react";

interface SummaryProps {
    summary: string;
    setSummary: React.Dispatch<React.SetStateAction<string>>;
}

const Summary: React.FC<SummaryProps> = ({ summary, setSummary }) => {
    const handleSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSummary(e.target.value);
    };

    const textareaStyles = `p-2 text-lg font-normal font-sans tracking-normal border-[3px] border-stone-500 rounded-lg`;
    return (
        <div>
            <h1 className=" p-2 text-2xl font-semibold mb-2">
                Professional Summary
            </h1>
            <div className="flex items-center justify-center p-2">
                <textarea
                    value={summary}
                    onChange={handleSummaryChange}
                    placeholder="Enter your professional summary here..."
                    className={textareaStyles}
                    rows={4}
                    cols={46}
                />
            </div>
        </div>
    );
};

export default Summary;
