/**
 * @packageDocumentation
 * privacy policy page
 * @module privacy-policy
 */

import React from 'react';
import Breadcrumb from "@/components/Common/Breadcrumb";
import SidebarLink from "@/components/BusinessDocs/privacyPolicyBarLink";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Logit Transporters | Privacy Policy",
    description: "This is the privacy policy page this is the privacy policy of our company and we are committed to protecting your privacy",
    // other metadata

}

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
                                <form action={""}
                                method={`{POST`}>
                                    <div className="flex flex-wrap xl:justify-between ">
                                        <div className="flex mb-4 md:mb-0">
                                            <input
                                                id="default-checkbox"
                                                type="checkbox"
                                                value=""
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-2"
                                            />
                                            <label
                                                htmlFor="default-checkbox"
                                                className="max-w-[425px] flex cursor-pointer select-none pl-5 text-sm"
                                            >
                                                By clicking Checkbox, you agree to abide by our Privacy Policy and Terms of Use.
                                                And consent cookie usage in browser.
                                            </label>
                                        </div>

                                        <button aria-label="send message" className="inline-flex items-center gap-2.5 bg-black hover:bg-blackho ease-in-out duration-300 dark:bg-btndark font-medium text-white rounded-full px-6 py-3">
                                            Accept
                                            <svg
                                                className="fill-white"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                                                    fill=""
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}