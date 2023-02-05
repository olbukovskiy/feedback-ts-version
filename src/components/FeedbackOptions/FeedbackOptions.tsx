import React from "react";
import { nanoid } from "nanoid";
import { Button, Wrapper } from "./FeedbackOptions.styled";

type FeedbackOptionsType = {
  options: string[];
  onLeaveFeedback: (item: string) => void;
};

const FeedbackOptions: React.FunctionComponent<FeedbackOptionsType> = ({
  options,
  onLeaveFeedback,
}) => {
  return (
    <Wrapper>
      {options.map((option) => {
        return (
          <Button
            key={nanoid()}
            type="button"
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {capitalizeWord(option)}
          </Button>
        );
      })}
    </Wrapper>
  );
};

function capitalizeWord(word: string): string {
  return word[0].toUpperCase() + word.slice(1);
}

export default FeedbackOptions;
