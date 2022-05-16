import { CardContainer, Image, TextContainer } from "./style";
import React from "react";

const TopicCard = (props) => {
  return (
    <CardContainer >
      <Image src={props.image} alt="img_icon" />
      <TextContainer>
        {props.topicName}
      </TextContainer>
    </CardContainer>
  )

};

export default TopicCard;
