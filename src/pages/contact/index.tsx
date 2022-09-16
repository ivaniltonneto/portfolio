import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaGithubSquare
} from "react-icons/fa";

import ItemContact from "../../../components/ItemContact";
import Container, { Content } from "./style";

const Contact = () => {
  return (
    <Container>
      <Content>
        <ItemContact
          IconFa={FaLinkedin}
          LinkContact="https://www.linkedin.com/in/ivanilton-neto-a712a379/"
        />
        <ItemContact
          IconFa={FaFacebook}
          LinkContact="https://www.facebook.com/ivanilton.neto/"
        />
        
        <ItemContact
          IconFa={FaInstagram}
          LinkContact="https://www.instagram.com/ivanilton_neto/"
        />
        <ItemContact IconFa={FaGithubSquare} LinkContact="https://github.com/ivaniltonneto"/>
        <ItemContact IconFa={FaEnvelope} LinkContact="netijua@gmail.com" />
      </Content>
    </Container>
  );
};

export default Contact;
