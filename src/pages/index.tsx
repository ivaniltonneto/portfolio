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
  Img,
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            doloremque voluptas nihil ipsa, provident consequatur praesentium
            odio nobis officia distinctio ut! Aut sapiente adipisci cupiditate
            quam iste? Veniam, deleniti ratione.
          </Intro>
          <Link href="projects">
            <LinkProjects>
              PROJETOS <FaArrowRight />
            </LinkProjects>
          </Link>
        </Infos>
        <Logo>
          <Img src="/images/logo.png" alt="logo" />
        </Logo>
      </Content>
    </Container>
  );
};

export default Home;
