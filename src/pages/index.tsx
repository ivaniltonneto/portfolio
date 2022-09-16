/* eslint-disable @next/next/no-img-element */
import { FaArrowRight } from "react-icons/fa";
import {
  Container,
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
            Trabalhei durante dois anos (2016-2018) no setor de T.I da UNILEAO -
            Universidade Leão Sampaio, na parte de suporte, sou Peer-Coach na
            Kenzie Academy Brasil, auxiliando alunos na compreensão/resolução
            dos problemas propostos, realizando correção das atividades desde
            Junho de 2022, onde na mesma estudo desenvolvimento backend. Uma das
            aplicações que mais me orgulho de ter participado do desenvolvimento
            foi da <strong>time stamp</strong>, participei dês da identificação da
            problemática, a sua aplicação, essa aplicação tem como finalidade
            adicionar marcadores de tempo com conteúdos e redirecionar para o
            tempo do marcador quando o mesmo for clicado, nessa aplicação em
            específico utilizamos react, typescript, styled-components, vitejs e
            json-server.
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
