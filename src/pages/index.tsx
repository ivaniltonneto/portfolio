/* eslint-disable @next/next/no-img-element */
import { FaArrowRight } from "react-icons/fa";
import Container,{  
  Content,
  Infos,
  Name,
  Function,
  Intro,
  LinkProjects,
  Logo,  
} from "../../styles/indexStyle";
import Link from "next/link";

const Home = () => {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>Olá, sou Ivanilton Neto</Name>
          <Function>Front-end Developer</Function>
          <Intro>
            Estudei fron-end na Kenzie Academy Brasil, onde na mesma fui monitor no primeiro período e no segundo, participei de alguns projetos front-end onde os mesmo podem ser encontrados na opção projetos. Nos projetos quais participei e nos meus projetos pessoal, ultilezeis das tecnologias react, typescript, node, java script, html, css e styled components. Continuo estudando na Kenzie Academy agora com foco em back-end.
          </Intro>
          <Link href="projects">
            <LinkProjects>
              PROJETOS <FaArrowRight />
            </LinkProjects>
          </Link>
        </Infos>
        <Logo>
          <img src="/images/logo1.png" alt="logo" />
        </Logo>
      </Content>
    </Container>
  );
};

export default Home;
