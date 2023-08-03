/**
 * @packageDocumentation
 * privacy policy page
 * @module privacy-policy
 */

import React from 'react';
import Breadcrumb from "@/components/Common/Breadcrumb";

export default function PrivacyPolicyPage() {
    return (
        <>
            <Breadcrumb pageName={'Privacy Policy'} description={'This is the privacy policy page this is the' +
                ' privacy policy of our company and we are committed to protecting your privacy'}/>
        </>
    );
}