// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { ProgressBar } from "react-step-progress-bar";
import "../styles/Progressbar.css";
// import { IMultistepProgressBarProps } from "../typings/signup";

const MultistepProgressBar = ({
  page,
  // onPageIndexClick,
}) => {
  let stepPercentage = 0;

  switch (page) {
    case "pageone":
      stepPercentage = 17;
      break;
    case "pagetwo":
      stepPercentage = 34;
      break;
    case "pagethree":
      stepPercentage = 51;
      break;
    case "pagefour":
      stepPercentage = 68;
      break;
    case "pagefive":
      stepPercentage = 85;
      break;
    case "pagefinal":
      stepPercentage = 100;
      break;
    default:
      stepPercentage = 0;
      break;
  }

  return (
    <ProgressBar percent={stepPercentage}>
      {/* Removed the Step with Number Tag because of the large number of pages that will be displayed in the step circles at the top */}
      {/* {["1", "2", "3", "4"].map((pageIndex, index) => (
        <Step key={index} transition="scale">
          {({ accomplished }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : ""}`}
              onClick={() => onPageIndexClick(pageIndex)}
            >
              {index + 1}
            </div>
          )}
        </Step>
      ))} */}
    </ProgressBar>
  );
};

export default MultistepProgressBar;
