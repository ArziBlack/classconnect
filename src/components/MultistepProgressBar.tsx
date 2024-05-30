/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProgressBar, Step } from "react-step-progress-bar";
import "../styles/Progressbar.css";

const MultistepProgressBar = ({ page, onPageIndexClick }: any) => {
  // eslint-disable-next-line no-var
  var stepPercentage: number = 0;
  if (page === "pageone") {
    stepPercentage = 33.3;
  } else if (page === "pagetwo") {
    stepPercentage = 66.6;
  } else if (page === "pagethree") {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }
  return (
    <ProgressBar percent={stepPercentage}>
      <Step>
        {({ accomplished, index }: any) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageIndexClick("1")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }: any) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageIndexClick("2")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }: any) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageIndexClick("3")}
          >
            {index + 1}
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default MultistepProgressBar;
