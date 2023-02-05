import React from "react";
import { Title } from "./Section.styled";

interface IProps {
  title: string;
  children?: React.ReactNode;
}

const Section: React.FunctionComponent<IProps> = ({ title, children }) => {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  );
};

export default Section;
