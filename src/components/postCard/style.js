import styled from "styled-components";

export const Container = styled.div`
  height: 120px;
  width: 90%;

  position: relative;
  display: flex;
  flex-direction: row;

  color:#004479;
  border: solid 1px black;

  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const InfoContainer = styled.div`
display: flex;
flex-direction:column;
border-right: solid 1px black;
height: 100%;
`;

 export const UserInfo = styled.div `
  height:100%;
 `;

export const Image = styled.img`;
position:relative;  
height:50%;
width:100%
  
`;


export const TextContainer = styled.text`
position: relative;
display:flex;
flex-direction: column;
width: 100%;
height:100%;
overflow: hidden;

`;

export const TitleContainer = styled.h2`
height:20%;
`;

export const Text = styled.p`
height:100%

`;

export const Input = styled.input`
align-items:center;
border: 0px solid #ccc;

`;