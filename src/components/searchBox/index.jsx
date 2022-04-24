import { Container,TextContainer, Image, Input } from "./style";


const SearchBox = (props) => {
  return (
    <Container >
      <TextContainer>
        <Input placeholder="Buscar"/>
      </TextContainer>
      
      <Image src={props.image} alt="img_icon" />
    </Container>
  )

};

export default SearchBox;
