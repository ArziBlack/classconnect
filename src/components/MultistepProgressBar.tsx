// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { ProgressBar, ProgressBarProps, Step } from "react-step-progress-bar";
import "../styles/Progressbar.css";
import { IMultistepProgressBarProps } from "../typings/signup";

const MultistepProgressBar: React.FC<IMultistepProgressBarProps> = ({
  page,
  onPageIndexClick,
}) => {
  let stepPercentage: number = 0;

  switch (page) {
    case "pageone":
      stepPercentage = 15;
      break;
    case "pagetwo":
      stepPercentage = 50;
      break;
    case "pagethree":
      stepPercentage = 83;
      break;
    case "pagefour":
      stepPercentage = 100;
      break;
    default:
      stepPercentage = 0;
      break;
  }

  return (
    <ProgressBar percent={stepPercentage} {...({} as ProgressBarProps)}>
      {["1", "2", "3", "4"].map((pageIndex, index) => (
        <Step key={index} transition="scale">
          {({ accomplished }: { accomplished: boolean }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : ""}`}
              onClick={() => onPageIndexClick(pageIndex)}
            >
              {index + 1}
            </div>
          )}
        </Step>
      ))}
    </ProgressBar>
  );
};

export default MultistepProgressBar;
