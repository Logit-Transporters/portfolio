/**
 * return policy page
 * @packageDocumentation
 * @module return-policy
 *
 */
import React from 'react';
import Breadcrumb from "@/components/Common/Breadcrumb";

export default function ReturnPolicyPage() {
    return (
        <>
            <Breadcrumb pageName={'Return Policy'}
                        description={'This is the return policy page this is the' +
                            ' return policy of our company and we are committed to respecting what it details according to the law'}/>
        </>
    );
}