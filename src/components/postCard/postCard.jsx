import { Container, ImageContainer, Image,
         TextContainer, TitleContainer, InfoContainer,
          UserInfo,Text } from "./style";


const PostCard = (props) => {
    return (
        <Container >
            <InfoContainer>
                    <Image src={props.image} alt="img_icon" />
                <UserInfo>
                    {props.username}
                </UserInfo>
            </InfoContainer>
            <TextContainer>
                <TitleContainer >{props.title}</TitleContainer>
                <Text>
                    {props.content}
                </Text>
            </TextContainer>
        </Container>
    )

};

export default PostCard;
