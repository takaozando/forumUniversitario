import { CardContainer, Image, TextContainer } from "./style";
import React, { useState } from "react";

const TopicCard = (props) => {
  useState()

  return (
    <CardContainer >
      <Image src={props.image} alt="img_icon" />
      <TextContainer>
        <a href="http://localhost:3000/topics">{props.topicName}</a>
      </TextContainer>
    </CardContainer>
  )

};

export default TopicCard;
