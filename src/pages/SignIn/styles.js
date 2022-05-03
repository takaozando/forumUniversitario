import styled from "styled-components";
import wallpaper from "../../assets/wallpaper.png"

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${wallpaper});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;

`;
export const SignInCard = styled.div`
  background-color: #fff;
  color: #333;

  padding: 2rem;
  border-radius: 0.5rem;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  display: flex;
  align-items: center;
  flex-direction: column;

  overflow: hidden;

  width: 90%;

  max-width: 375px;
`;

export const ImageWrapper = styled.div``;

export const Image = styled.img`
  height: 2.5rem;
  width: auto;
`;

export const SubmissionWrapper = styled.form`
  display: flex;
  flex-direction: column;

  color: #333;
  font-weight: bold;

  width: 100%;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  padding: 0.75rem 1rem;

  border-radius: 0.5rem;

  margin-bottom: 2rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const SubmissionButton = styled.button`
  font-size: 1rem;

  margin-bottom: 1.5rem;

  border: none;
  padding: 1rem 5rem;
  border-radius: 0.5rem;

  background-color: #004479;

  color: #fff;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: 0.5s;
  }
`;

export const RecoveryPassword = styled.button`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  border: none;

  cursor: pointer;
  background-color: #fff;

  color: #004479;

  &:hover {
    opacity: 0.8;
    transition: 0.5s;
  }
`;
