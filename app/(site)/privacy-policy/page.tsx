/**
 * @packageDocumentation
 * privacy policy page
 * @module privacy-policy
 */

import React from 'react';
import Breadcrumb from "@/components/Common/Breadcrumb";
import SidebarLink from "@/components/Docs/SidebarLink";
import { PrivacyPolicy } from '../../../types/privacyPolicy';

export default function PrivacyPolicyPage() {
    return (
        <>
            <Breadcrumb pageName={'Privacy Policy'} description={'This is the privacy policy page this is the' +
                ' privacy policy of our company and we are committed to protecting your privacy'} />
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
                            <div className="blog-details blog-details-docs rounded-sm bg-white py-11 px-8 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                                <h1>Privacy Policy</h1>

                                <p className="text-base text-body-color dark:text-body-color-dark">
                                    This document serves as a simple template to showcase 
                                    a sample
                                </p>
                                <p className="text-base text-body-color dark:text-body-color-dark">
                                    Please visit:{" "}
                                    <b>
                                        <a href="https://nextjstemplates.com/docs">
                                            nextjstemplates.com/docs
                                        </a>
                                    </b>{" "}
                                    to check out the real docs, setup guide and even video
                                    instructions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}