import Signin from "@/components/Auth/Signin";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Logit Transporters | Signin",
    description: "This is the signin page of Logit Transporters.",
    // other metadata
}

const SigninPage = () => {
  return (
    <>
      <Signin />
    </>
  );
};

export default SigninPage;
