"use client";
import Link from "next/link";

const SidebarLink = () => {

  return (
    <>
      <li className="block">
        <Link
          href={`/help-center`}
          className={`text-base py-2 px-3 rounded-sm flex w-full bg-stroke text-black dark:text-white dark:bg-blackho`}
        >
          FAQs
        </Link>
        <Link
          href={`/help-center`}
          className={`text-base py-2 px-3 rounded-sm flex w-full text-black dark:text-white dark:bg-blackho`}
        >
          SLAs
        </Link>
        <Link
          href={`/help-center/return-policy`}
          className={`text-base py-2 px-3 rounded-sm flex w-full text-black dark:text-white dark:bg-blackho`}
        >
          Return Policy
        </Link>
        <Link
            href={`/help-center/refund-policy`}
            className={`text-base py-2 px-3 rounded-sm flex w-full text-black dark:text-white dark:bg-blackho`}
        >
          Refund Policy
        </Link>
        <Link
            href={`/help-center/privacy-policy`}
            className={`text-base py-2 px-3 rounded-sm flex w-full text-black dark:text-white dark:bg-blackho`}
        >
            Privacy Policy
        </Link>
        <Link
            href={`/help-center/terms-of-service`}
            className={`text-base py-2 px-3 rounded-sm flex w-full text-black dark:text-white dark:bg-blackho`}
        >
          Terms of Service
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
