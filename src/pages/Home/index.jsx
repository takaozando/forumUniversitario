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
      <SubHeader name = "Banco de dados" img={dbIcon}/>
      {/* <SearchBox text = "filtrar" image = {searchIcon}/> */}
      <SectionContainer>

        {/* <SubtopicCard image={noPic} username="USuário X" title = "Titulo de teste 1"></SubtopicCard> */}
        <PostCard image={noPic} username="Usuário X" curso ="Engenharia da vidas" semestre="7" title = "Titulo de teste 1" content = "Conteudo do post: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim quis enim pretium ornare. Nam eu augue condimentum, aliquet eros quis, feugiat tellus. Cras sodales felis a sapien fermentum, vel egestas ipsum consectetur. Nunc porta, lorem vel accumsan semper, nulla ligula vestibulum dui, faucibus dapibus diam enim a leo. Aenean dignissim enim luctus, molestie eros at, aliquam justo. Aliquam a tellus non ex cursus semper. Quisque rutrum lacinia dui, sit amet consectetur enim malesuada vel. Sed lacinia mauris a fermentum gravida. Nam vehicula rutrum mi ut placerat. Duis non mattis lacus. Fusce faucibus, arcu sit amet pretium accumsan, nibh diam iaculis orci, quis interdum dui ligula at elit. Morbi efficitur lacinia velit, ut pretium neque ultrices in. Nulla facilisi. Nullam et tortor magna. Suspendisse scelerisque tempus risus. In id leo et erat consectetur gravida."/>
      
        <PostCard image={noPic} username="Usuário X" title = "Titulo de teste 2" content = "Conteudo do post: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim quis enim pretium ornare. Nam eu augue condimentum, aliquet eros quis, feugiat tellus. Cras sodales felis a sapien fermentum, vel egestas ipsum consectetur. Nunc porta, lorem vel accumsan semper, nulla ligula vestibulum dui, faucibus dapibus diam enim a leo. Aenean dignissim enim luctus, molestie eros at, aliquam justo. Aliquam a tellus non ex cursus semper. Quisque rutrum lacinia dui, sit amet consectetur enim malesuada vel. Sed lacinia mauris a fermentum gravida. Nam vehicula rutrum mi ut placerat. Duis non mattis lacus. Fusce faucibus, arcu sit amet pretium accumsan, nibh diam iaculis orci, quis interdum dui ligula at elit. Morbi efficitur lacinia velit, ut pretium neque ultrices in. Nulla facilisi. Nullam et tortor magna. Suspendisse scelerisque tempus risus. In id leo et erat consectetur gravida."/>
      
        <PostCard image={noPic} username="Usuário X" title = "Titulo de teste 3" content = "Conteudo do post: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim quis enim pretium ornare. Nam eu augue condimentum, aliquet eros quis, feugiat tellus. Cras sodales felis a sapien fermentum, vel egestas ipsum consectetur. Nunc porta, lorem vel accumsan semper, nulla ligula vestibulum dui, faucibus dapibus diam enim a leo. Aenean dignissim enim luctus, molestie eros at, aliquam justo. Aliquam a tellus non ex cursus semper. Quisque rutrum lacinia dui, sit amet consectetur enim malesuada vel. Sed lacinia mauris a fermentum gravida. Nam vehicula rutrum mi ut placerat. Duis non mattis lacus. Fusce faucibus, arcu sit amet pretium accumsan, nibh diam iaculis orci, quis interdum dui ligula at elit. Morbi efficitur lacinia velit, ut pretium neque ultrices in. Nulla facilisi. Nullam et tortor magna. Suspendisse scelerisque tempus risus. In id leo et erat consectetur gravida."/>
        <PostCard image={noPic} username="Usuário X" title = "Titulo de teste 1" content = "Conteudo do post: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim quis enim pretium ornare. Nam eu augue condimentum, aliquet eros quis, feugiat tellus. Cras sodales felis a sapien fermentum, vel egestas ipsum consectetur. Nunc porta, lorem vel accumsan semper, nulla ligula vestibulum dui, faucibus dapibus diam enim a leo. Aenean dignissim enim luctus, molestie eros at, aliquam justo. Aliquam a tellus non ex cursus semper. Quisque rutrum lacinia dui, sit amet consectetur enim malesuada vel. Sed lacinia mauris a fermentum gravida. Nam vehicula rutrum mi ut placerat. Duis non mattis lacus. Fusce faucibus, arcu sit amet pretium accumsan, nibh diam iaculis orci, quis interdum dui ligula at elit. Morbi efficitur lacinia velit, ut pretium neque ultrices in. Nulla facilisi. Nullam et tortor magna. Suspendisse scelerisque tempus risus. In id leo et erat consectetur gravida."/>
      
      <PostCard image={noPic} username="Usuário X" title = "Titulo de teste 2" content = "Conteudo do post: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim quis enim pretium ornare. Nam eu augue condimentum, aliquet eros quis, feugiat tellus. Cras sodales felis a sapien fermentum, vel egestas ipsum consectetur. Nunc porta, lorem vel accumsan semper, nulla ligula vestibulum dui, faucibus dapibus diam enim a leo. Aenean dignissim enim luctus, molestie eros at, aliquam justo. Aliquam a tellus non ex cursus semper. Quisque rutrum lacinia dui, sit amet consectetur enim malesuada vel. Sed lacinia mauris a fermentum gravida. Nam vehicula rutrum mi ut placerat. Duis non mattis lacus. Fusce faucibus, arcu sit amet pretium accumsan, nibh diam iaculis orci, quis interdum dui ligula at elit. Morbi efficitur lacinia velit, ut pretium neque ultrices in. Nulla facilisi. Nullam et tortor magna. Suspendisse scelerisque tempus risus. In id leo et erat consectetur gravida."/>
    
      <PostCard image={noPic} username="Usuário X" title = "Titulo de teste 3" content = "Conteudo do post: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim quis enim pretium ornare. Nam eu augue condimentum, aliquet eros quis, feugiat tellus. Cras sodales felis a sapien fermentum, vel egestas ipsum consectetur. Nunc porta, lorem vel accumsan semper, nulla ligula vestibulum dui, faucibus dapibus diam enim a leo. Aenean dignissim enim luctus, molestie eros at, aliquam justo. Aliquam a tellus non ex cursus semper. Quisque rutrum lacinia dui, sit amet consectetur enim malesuada vel. Sed lacinia mauris a fermentum gravida. Nam vehicula rutrum mi ut placerat. Duis non mattis lacus. Fusce faucibus, arcu sit amet pretium accumsan, nibh diam iaculis orci, quis interdum dui ligula at elit. Morbi efficitur lacinia velit, ut pretium neque ultrices in. Nulla facilisi. Nullam et tortor magna. Suspendisse scelerisque tempus risus. In id leo et erat consectetur gravida."/>
    
      {/* <TopicCard topicName = "Banco de dados" image ={dbIcon} />
      <TopicCard topicName = "Geral" image ={geralIcon} />
      <TopicCard topicName = "Estrutura de dados" image ={edIcon} />
      <TopicCard topicName = "Eletrônica Digital" image ={chipIcon} />
      <TopicCard topicName = "Cálculo" image ={calcIcon} /> */}
      </SectionContainer>
    </Container>

  );
};
export default HomePage;
