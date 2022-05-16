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

const TopicPage = () => {
  return (
    <Container>
      <Header />
      <SubHeader name = "Banco de dados" img={dbIcon}/>
      {/* <SearchBox text = "filtrar" image = {searchIcon}/> */}
      <SectionContainer>

        <SubtopicCard image={noPic} username="Koji Yamada" title = "Como ativar serviço do SQL Server no Linux"></SubtopicCard>
        <SubtopicCard image={noPic} username="Gustavo Takao" title = "Erro ao executar proc "></SubtopicCard>
        <SubtopicCard image={noPic} username="Gustavo Galo" title = "ID da primary key gerando aleatóriamente"></SubtopicCard>
      
      </SectionContainer>
    </Container>

  );
};
export default TopicPage;
