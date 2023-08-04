/**
 * testimonialItem.tsx
 * created 2021.03.22 23:00:00
 */


import React from "react";
import Image from "next/image";
import { Testimonial } from '@/types/testimonial';
import { SwiperSlide } from "swiper/react";

export default function TestimonialItem({ testimonial }: { testimonial: Testimonial }) {
    const { name, position, message } = testimonial;
    return (
        <>
            <SwiperSlide>
                <div className="bg-white rounded-lg shadow-solid-9 dark:shadow-none dark:bg-blacksection dark:border dark:border-strokedark p-9 pt-7.5">
                    <div className="flex justify-between border-b border-stroke dark:border-strokedark pb-6 mb-7.5">
                        <div>
                            <h4 className="text-black dark:text-white text-metatitle3 mb-1.5">
                                {name}
                            </h4>
                            <p>{position}</p>
                        </div>
                        <Image
                            width={60}
                            height={50}
                            className=""
                            src="./images/user/user-01.svg"
                            alt="User"
                        />
                    </div>

                    <p>
                        {message}
                    </p>
                </div>
            </SwiperSlide>
        </>
    );
}