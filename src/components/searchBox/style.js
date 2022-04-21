import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  width: 70%;

  position: relative;
  display: flex;
  flex-direction: row;

  margin-top: 30px;
  color:#004479;
  border: solid 1px black;
  border-radius:5rem;
  justify-content: flex-end;
  align-items: center;
  margin-left: 15%;
  margin-right: 15%;

  background-color: white;
`;

export const TextContainer = styled.div`
position: relative;
display: flex;
width: 100%;
overflow: hidden;
justify-content: center;
align-content: center;


`;
 export const Image = styled.img`
  height: 50%;
  margin-right:10px;
 `;

 
export const Input = styled.input`
border: 0px solid #ccc;

`;