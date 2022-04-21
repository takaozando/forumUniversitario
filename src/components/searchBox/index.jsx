import { Container, Image, Input } from "./style";


const SearchBox = (props) => {
  return (
    <Container >
      
      <Input placeholder="Buscar"/>
      <Image src={props.image} alt="img_icon" />
    </Container>
  )

};

export default SearchBox;
