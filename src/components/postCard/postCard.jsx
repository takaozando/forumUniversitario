import { Container, ImageContainer, Image,
         TextContainer, TitleContainer, InfoContainer,
          UserInfo,Text } from "./style";


const PostCard = (props) => {
    return (
        <Container >
            <InfoContainer>
                    <Image src={props.image} alt="img_icon" />
                <UserInfo>
                    {props.username} <br/>
                    {props.curso} <br/>
                    {props.semestre}° Semestre
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
