import React from "react";
import PDF from "../documents/Max_Zander_SE_Resume_Feb_2021.pdf";


const Resume = () => (
    <div className="resume">
        <h1 id="resume-label">My Resume</h1>
        <embed
        src={PDF + "#toolbar=0"}
        type="application/pdf"
        height={645}
        width={500}
        />
    </div>
);

export default Resume;