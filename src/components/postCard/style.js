import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 90vw;

  position: relative;
  display: flex;
  flex-direction: column;

  color:#004479;
  border: solid 1px black;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const InfoContainer = styled.div`
position:relative;
display:flex;
flex-direction:row;
top:0;
border-bottom: solid 1px black;
height: 100%;
width:100%;

`;

 export const UserInfo = styled.div `
 display:flex;
 flex-direction:column; 
 height:100%;
  margin-top:5px;
  margin-left:5px;
 `;

export const Image = styled.img`;
position:relative;  
height: 100px;

  
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