import {
  Container, ButtonWraper,
  TitleContainer, Image,
  UserInfo, ReactionContainer
}
  from "./style";

import like from "../../components/icones/like.PNG"
import dislike from "../../components/icones/dislike.PNG"


const SubtopicCard = (props) => {
  return (
    <Container >
      <TitleContainer >{props.title}</TitleContainer>
      <UserInfo>
        {props.username} <br />
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
