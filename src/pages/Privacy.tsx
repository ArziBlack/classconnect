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
          description="Privacy policy"
        />
      </div>
      <div className=" m-8 ">
        <div dangerouslySetInnerHTML={{ __html: tnc }} />
      </div>
    </>
  );
};

export default Privacy;
