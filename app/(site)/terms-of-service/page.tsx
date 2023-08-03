/**
 * terms of service page
 * @packageDocumentation
 */

import React from 'react';
import Breadcrumb from "@/components/Common/Breadcrumb";

export default function TermsOfServicePage() {
    return (
        <>
            <Breadcrumb pageName={'Terms of Service'}
                        description={'This is the terms of service page this is the' +
                            ' terms of service of our company and we are committed to respecting what it details according to the law'}/>
        </>
    );
}