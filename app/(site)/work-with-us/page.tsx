/**
 * work-with-us Page
 */

import React from 'react';
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/WorkWithUs/Hero";
import Video from "@/components/WorkWithUs/Video";
import PartnerShips from "@/components/WorkWithUs/PartnerShips";
import Contact from "@/components/Contact";


export default function WorkWithUs() {
    return (
        <>
            <ScrollUp />
            <Hero />
            <Video />
            <PartnerShips />
            <Contact />
        </>
    );
}