import { Container, ImageContainer, Image,
         TextContainer, TitleContainer, InfoContainer,
          UserInfo,Text } from "./style";

import React from "react";

const PostCard = (props) => {
    return (
        <Container >
            <TextContainer>
                <TitleContainer >{props.title}</TitleContainer>
                <Text>
                    {props.content}
                </Text>
            </TextContainer>
            <InfoContainer>
                    <Image src={props.image} alt="img_icon" />
                <UserInfo>
                    {props.username} <br/>
                    {props.curso} <br/>
                    {props.semestre}° Semestre
                </UserInfo>
            </InfoContainer>
        </Container>
    )

};

export default PostCard;
