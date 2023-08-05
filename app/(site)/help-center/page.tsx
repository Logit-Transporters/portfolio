/**
 * help center page
 */


import React from 'react';
import Breadcrumb from "@/components/Common/Breadcrumb";
import SidebarLink from "@/components/Docs/SidebarLink";
import FAQ from "@/components/FAQ";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "Logit Transporters | Help Center",
    description: "This is the help center is you self help center" + "round our services and products",
    // other metadata

}


export default function HelpCenterPage() {
    return (
        <>
            <Breadcrumb pageName={`Resource Center`}
                        description={'This is the help center is you self help center' + "round our services and products"
                            }/>
            <section className=" mt-8 pb-16 md:pb-20 lg:pb-24 pt-24 md:pt-28 lg:pt-32">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 lg:w-1/4">
                            <div className="sticky top-[74px] p-4 border border-white shadow-solid-4 rounded-lg  transition-all  dark:border-strokedark dark:bg-blacksection">
                                <ul className="space-y-2">
                                    <SidebarLink />
                                </ul>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-3/4">
                            <FAQ />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}