// src/types/react-step-progress-bar.d.ts
declare module 'react-step-progress-bar' {
    import * as React from 'react';
  
    interface ProgressBarProps {
      percent: number;
      filledBackground?: string;
      height?: string;
      width?: string;
      stepPositions?: number[];
      unfilledBackground?: string;
      text?: string;
      stepPadding?: number;
      steps: {
        transition: string;
        step: (props: { accomplished: boolean; index: number }) => React.ReactNode;
      }[];
    }
  
    export const ProgressBar: React.FC<ProgressBarProps>;
  
    interface StepProps {
      transition: string;
      children: (props: { accomplished: boolean; index: number }) => React.ReactNode;
    }
  
    export const Step: React.FC<StepProps>;
  }
  