// PrivacyP.tsx
import React from "react";
import SecondaryHero from "../components/SecondaryHero";
import Footer from "../components/Footer";
import { PRIVACY_P_ILLUSTRATION } from "../constants/illustrations";

// Define the PrivacyP component
const PrivacyP: React.FC = () => {
  return (
    <>
      {/* Pass PrivacyText as a prop to Hero */}
      <div className="min-w-80">
        <SecondaryHero
          title={"Privacy policy"}
          imageUrl={PRIVACY_P_ILLUSTRATION}
          links={[]}
        />
      </div>
      <div className=" m-8 ">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Data Privacy</h2>
        </div>
        <p>
          "The organization takes your privacy seriously and only processes your
          personal information to make your experience better. In accordance
          with 2019 NDPR and other applicable regulations, continuing on this
          platform indicates your consent to the processing of your personal
          data by Hep, its strategic partners/service providers, as detailed in
          our{" "}
          <span className="border-b-2 border-indigo-500 text-indigo-500 ">
            Privacy Policy
          </span>
          <span>."</span>
        </p>
      </div>
    </>
  );
};

export default PrivacyP;
