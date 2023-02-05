import { useState } from "react";

import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

function App() {
  const [good, setGood] = useState<number>(0);
  const [neutral, setNeutral] = useState<number>(0);
  const [bad, setBad] = useState<number>(0);

  const feedbacksState: {
    [property: string]: number;
  } = {
    good,
    neutral,
    bad,
  };
  const feedbackKeysArray = Object.keys(feedbacksState);

  const stateHandler = (item: string): void => {
    switch (item) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;

      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;

      case "bad":
        setBad((prevState) => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = (keysArray: string[]) => {
    return keysArray.reduce((total: number, item: string): number => {
      return total + feedbacksState[item];
    }, 0);
  };

  const countPositiveFeedbackPercentage = (total = 0) => {
    if (total === 0) {
      return `0`;
    }

    return `${Math.floor((good / total) * 100)}%`;
  };

  const total = countTotalFeedback(feedbackKeysArray);
  const positivePercentage = countPositiveFeedbackPercentage(total);

  return (
    <div>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          options={feedbackKeysArray}
          onLeaveFeedback={stateHandler}
        />
      </Section>
      {total === 0 ? (
        <Notification message={"There is no feedback"} />
      ) : (
        <Section title={"Statistics"}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      )}
    </div>
  );
}

export default App;
