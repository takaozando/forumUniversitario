import React from "react";
import { Container,SectionContainer } from "./style";

//icones
import dbIcon from "../../components/icones/db.png"
import geralIcon from "../../components/icones/chatbox.png"
import edIcon from "../../components/icones/estDados.png"
import chipIcon from "../../components/icones/chip.png"
import calcIcon from "../../components/icones/calc.png"
import searchIcon from "../../components/icones/search.png"
import noPic from "../../components/icones/noPic.png"

import { Header } from "../../components/Header";
import  TopicCard  from "../../components/topicCard";
import SearchBox from "../../components/searchBox";
import PostCard from "../../components/postCard/postCard";
import SubtopicCard from "../../components/subtopicCard";
import { SubHeader } from "../../components/SubHeader";

const HomePage = () => {
  return (
    <Container>
      <Header />
      {/* <SubHeader name = "Banco de dados" img={dbIcon}/> */}
      <SearchBox text = "filtrar" image = {searchIcon}/>
      <SectionContainer>

      <TopicCard topicName = "Banco de dados" image ={dbIcon} />
      <TopicCard topicName = "Geral" image ={geralIcon} />
      <TopicCard topicName = "Estrutura de dados" image ={edIcon} />
      <TopicCard topicName = "Eletrônica Digital" image ={chipIcon} />
      <TopicCard topicName = "Cálculo" image ={calcIcon} />
      </SectionContainer>
    </Container>

  );
};
export default HomePage;
