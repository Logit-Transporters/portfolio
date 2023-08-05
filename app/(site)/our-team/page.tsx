/**
 * out teams page
 * @packageDocumentation
 * @module our-team
 */

import React from 'react';
import Breadcrumb from "@/components/Common/Breadcrumb";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Logit Transporters | Our Team",
    description: "This is the our team page of Logit Transporters.",
    // other metadata
}

export default function OurTeamPage() {
    return (
        <>
            <Breadcrumb pageName={'Our Team'} description={'Our team is made up of the following people'}/>
        </>
    );
}