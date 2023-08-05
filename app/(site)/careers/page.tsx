/**
 * careers page
 * @packageDocumentation
 *
 */

import React from 'react';
import Breadcrumb from "@/components/Common/Breadcrumb";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "Logit Transporters | Careers",
    description: "This is the careers page of Logit Transporters.",
    // other metadata
}

export default function CareersPage() {
    return (
        <>
            <Breadcrumb pageName={'Careers'}
                        description={`we provide different opportunities to work with us through our internships and open 
                        positions in our team`}/>
        </>
    )
}