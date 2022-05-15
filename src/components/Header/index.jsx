import { Container, ImageWrapper, Image } from "./styles";
import logo from './logo facens.png';


export const Header = () => {
  return (
    <Container>
        <ImageWrapper>
          <Image src={logo} />
        </ImageWrapper>
    </Container>
  )

};
