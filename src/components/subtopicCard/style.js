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
  margin-bottom: 5px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
`;

 export const UserInfo = styled.div `
  display:flex;
  flex-direction:column; 
  height:100%;
  margin-top:10px;
  margin-left:10px;
 `;

export const TitleContainer = styled.h2`
  height:20%;
`;  

export const ReactionContainer = styled.div `
  display: flex;
  align-items:center;
  height: 30px;
`;

export const ButtonWraper = styled.div`
  height:20px;
  margin-top: 30px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const Image = styled.img `
  height:100%;
`;