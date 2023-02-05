import React from "react";
import { PropertyName, PropertyValue } from "./Statistics.styled";

interface IProps {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: string;
}

const Statistics: React.FunctionComponent<IProps> = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p>
        <PropertyName>Good:</PropertyName>
        <PropertyValue>{good}</PropertyValue>
      </p>
      <p>
        <PropertyName>Neutral:</PropertyName>
        <PropertyValue>{neutral}</PropertyValue>
      </p>
      <p>
        <PropertyName>Bad:</PropertyName>
        <PropertyValue>{bad}</PropertyValue>
      </p>
      <p>
        <PropertyName>Total:</PropertyName>
        <PropertyValue> {total}</PropertyValue>
      </p>
      <p>
        <PropertyName>Positive feedback:</PropertyName>
        <PropertyValue>{positivePercentage}</PropertyValue>
      </p>
    </div>
  );
};

export default Statistics;
