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

const TopicPage = () => {
  return (
    <Container>
      <Header />
      {/* <SearchBox text = "filtrar" image = {searchIcon}/> */}
      <SectionContainer>

        <SubtopicCard image={noPic} username="USuário X" title = "Titulo de teste 1"></SubtopicCard>
      </SectionContainer>
    </Container>

  );
};
export default TopicPage;
