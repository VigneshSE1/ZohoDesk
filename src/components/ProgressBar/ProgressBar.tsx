import React, { FC, useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import ProgressStyles from "./ProgressBar.styles";

interface ProgressBarProps {
  progress: string;
  userScore: number | undefined;
  nextReward: any;
  level: number;
  previousReward: any;
}

const Progress: FC<ProgressBarProps> = (props) => {
  const [level, setLevel] = useState<number>(1);
  const [progress, setProgress] = useState<string>("0");
  useEffect(() => {
    if (!props?.nextReward?._id && props?.previousReward?._id) {
      setLevel(props.level);
      setProgress("100");
    } else {
      setLevel((props.level || 0) + 1);
      setProgress(props.progress);
    }
  }, [props.progress]);
  return (
    <ProgressStyles.ProProgressBar>
      <ProgressStyles.ProgresBarHeader>
        <ProgressStyles.ProgressHeading>
          {"Level " + level}
        </ProgressStyles.ProgressHeading>
        <div>
          {`${props.userScore || 0} points `}
          {props?.nextReward?.points
            ? `/ ${props?.nextReward?.points} points`
            : ``}
        </div>
      </ProgressStyles.ProgresBarHeader>
      <ProgressBar
        className="wrapper"
        completed={+progress}
        animateOnRender={true}
        maxCompleted={100}
        bgColor="#fc9300"
        isLabelVisible={false}
        height="15px"
        borderRadius="50px"
        baseBgColor="#fff6e6"
      />

      <ProgressStyles.ProgressBarFooter>
        <div>{+progress || 0}% completed</div>
      </ProgressStyles.ProgressBarFooter>
    </ProgressStyles.ProProgressBar>
  );
};

export default Progress;
