import styled from "styled-components";

export const CardContainer = styled.div`
  height: 12vh;
  width: 70%;

  position: relative;
  display: flex;
  flex-direction: row;

  color:#004479;
  border: solid 1px black;
  border-radius:5rem;
  justify-content: flex-start;
  align-items: center;

  background-color: white;
  padding:5px;
  margin-top:20px;
`;

export const TextContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
  justify-content: center;
  align-content: center;
  font-size: 20px;

`;
 export const Image = styled.img`
  height: 80%;
  border-radius: 1rem;
  margin-left: 5px;
 `;