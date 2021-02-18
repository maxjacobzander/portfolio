// import React, {Component} from 'react';

// class Resume extends Component {

//     render() {
//         return (
//             <div>
//                 <object className="resume" data="https://f675d2b8-bbcd-4b2f-b6a0-eafac903cb04.filesusr.com/ugd/b2c140_d9bc5b6a78d84f189e5a15e839fab2b5.pdf" type="application/pdf">
//                 </object>
//             </div>
//         );
//     }
// }

// export default Resume;


import React from "react";
import PDF from "../documents/Max_Zander_SE_Resume_Feb_2021.pdf";

const Resume = () => (
    <div className="resume">
        <embed
        src={PDF + "#toolbar=0"}
        type="application/pdf"
        height={645}
        width={500}
        />
    </div>
);

export default Resume;