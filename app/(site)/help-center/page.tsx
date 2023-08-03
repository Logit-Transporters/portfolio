/**
 * help center page
 */


import React from 'react';
import Breadcrumb from "@/components/Common/Breadcrumb";


export default function HelpCenterPage() {
    return (
        <>
            <Breadcrumb pageName={'Help Center'}
                        description={'This is the help center is you self help center' + "round our services and products"
                            }/>
        </>
    )
}