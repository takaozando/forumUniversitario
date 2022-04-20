import { Container, Image, TextContainer } from "./style";


const SearchBox = (props) => {
  return (
    <Container >
      <Image src={props.image} alt="img_icon" />
      <TextContainer>
        {props.text}
      </TextContainer>
    </Container>
  )

};

export default SearchBox;
