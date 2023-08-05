import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Logit Transporters | Signup",
    description: "This is the signup page of Logit Transporters.",
    // other metadata
}

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
