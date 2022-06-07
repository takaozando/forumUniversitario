import React from "react";
import { Container, SectionContainer } from "./style";

//icones
import dbIcon from "../../components/icones/db.png"
import noPic from "../../components/icones/noPic.png"
import { Header } from "../../components/Header";
import SubtopicCard from "../../components/subtopicCard";
import { SubHeader } from "../../components/SubHeader";

import db from "../../configFirestore";
import { getDocs, collection, query, where } from "firebase/firestore"



var test =[];
let result=[] 
const collecRef = collection(db, 'test');
const q = query(collecRef, where('Categoria', "==", "Banco de dados"))

let data = getDocs(collecRef)
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      test.push({id: doc.id,autor: doc.data().Autor, categoria: doc.data().Categoria})
    })
    for (const key of Object.keys(test)) {
      result.push(
        [key,test[key]]
      )
    }
    console.log(test)
    console.log(result);
    console.log(typeof(result));
    // console.log(disciplinas);
    // console.log(disciplinas[0]);
    // console.log(disciplinas[1]);
    
    // console.log(data[1]);
    // console.log(data[0]);
  })


class TopicPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Header />
        <SubHeader name="Banco de dados" img={dbIcon} />
        <SectionContainer>
          {result}
          {test.map((info) => (
            <SubtopicCard key={info.id} image={noPic} username={info.Autor} title={info.Categoria} />
          ))}


          {/* <SubtopicCard image={noPic} username="Koji Yamada" title="Como ativar serviço do SQL Server no Linux"></SubtopicCard>
          <SubtopicCard image={noPic} username="Gustavo Takao" title="Erro ao executar proc "></SubtopicCard>
          <SubtopicCard image={noPic} username="Gustavo Galo" title="ID da primary key gerando aleatóriamente"></SubtopicCard> */}

        </SectionContainer>
      </Container >

    );
  }

};

export default TopicPage;
