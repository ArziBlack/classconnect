import React, { useEffect } from "react";
import SecondaryHero from "../components/SecondaryHero";
import { useAppDispatch, useAppSelector } from "../hooks/reactReduxHooks";
import { getTnC_Policy } from "../services/others/otherSlice";

const Privacy: React.FC = () => {
  const dispatch = useAppDispatch();
  const { tnc } = useAppSelector((store) => store.other);
  function getPrivacy() {
    dispatch(getTnC_Policy());
  }
  useEffect(() => {
    getPrivacy();
  }, []);
  console.log(tnc);

  return (
    <>
      <div className="min-w-80">
        <SecondaryHero
          title={"Terms of Condition & Privacy policy"}
          description="Our Terms and Conditions outline the rules and guidelines for using our services. They cover important aspects such as user responsibilities, privacy policies, and service limitations. By using our services, you agree to abide by these terms. Please read them carefully before proceeding."
        />
      </div>
      <div className=" m-8 ">
        <div dangerouslySetInnerHTML={{ __html: tnc }} />
      </div>
    </>
  );
};

export default Privacy;
