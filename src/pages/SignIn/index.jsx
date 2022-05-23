import {
  Container,
  SignInCard,
  Image,
  ImageWrapper,
  SubmissionWrapper,
  Input,
  SubmissionButton,
  ButtonsWrapper,
  RecoveryPassword,
} from "./styles";

import React from "react";
import LogoFacens from "../../assets/logo-facens.png";

export const SignIn = () => {
  return (
    <Container>
      <SignInCard>
        <ImageWrapper>
          <Image src={LogoFacens} alt="logo" />
        </ImageWrapper>
        <SubmissionWrapper>
          RA
          <Input placeholder="Digite aqui..." />
          SENHA
          <Input placeholder="Digite aqui..." />
          <ButtonsWrapper>
            <SubmissionButton onClick={(event) => event.preventDefault()}>
              Acessar
            </SubmissionButton>
            <RecoveryPassword onClick={(event) => event.preventDefault()}>
              Esqueci minha senha
            </RecoveryPassword>
          </ButtonsWrapper>
        </SubmissionWrapper>
      </SignInCard>
    </Container>
  );
};
