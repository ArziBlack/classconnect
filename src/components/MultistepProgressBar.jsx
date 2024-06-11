import { ProgressBar } from "react-step-progress-bar";
import "../styles/Progressbar.css";

const MultistepProgressBar = ({
  page,
  // onPageIndexClick,
}) => {
  let stepPercentage = 0;

  switch (page) {
    case "pageone":
      stepPercentage = 14;
      break;
    case "pagetwo":
      stepPercentage = 28;
      break;
    case "pagethree":
      stepPercentage = 43;
      break;
    case "pagefour":
      stepPercentage = 57;
      break;
    case "pagefive":
      stepPercentage = 71;
      break;
    case "pagesix":
      stepPercentage = 86;
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
