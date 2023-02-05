import React from "react";
import { Message } from "./Notification.styled";

type NotificationProps = {
  message: string;
};

const Notification: React.FunctionComponent<NotificationProps> = ({
  message,
}) => {
  return <Message>{message}</Message>;
};

export default Notification;
