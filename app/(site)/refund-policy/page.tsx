/**
 * refund policy page
 * @packageDocumentation
 * @module refund-policy
 */

import React from 'react';
import Breadcrumb from "@/components/Common/Breadcrumb";

export default function RefundPolicyPage() {
    return (
        <>
            <Breadcrumb pageName={'Refund Policy'}
                        description={'This is the refund policy page this is the' +
                            ' refund policy of our company and we are committed to respecting what it details according to the law'}/>
        </>
    );
}