import {
  Container, ButtonWraper,
  TitleContainer, Image,
  UserInfo, ReactionContainer
}
  from "./style";

import React from "react";
import like from "../../components/icones/like.PNG"
import dislike from "../../components/icones/dislike.PNG"


const SubtopicCard = (props,{info}) => {
  return (
    <Container >
      <TitleContainer >
        <a href="http://localhost:3000/discussion">{info.Titulo}</a>
      </TitleContainer>
      <UserInfo>
        {info.Autor} <br />
      </UserInfo>
      <ReactionContainer>
        <ButtonWraper>
          <Image src={like} /> {props.numLike}
        </ButtonWraper>
        <ButtonWraper>
          <Image src={dislike} /> {props.numDislike}
        </ButtonWraper>



      </ReactionContainer>
    </Container>
  )

};

export default SubtopicCard;
