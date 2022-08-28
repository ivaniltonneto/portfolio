import React, { useEffect, useState } from "react";

import Container, { Content, Ul, Li, Span } from "./style";

interface IItem {
  id: number;
  name: string;
  svn_url: string;
  description: string;
  homepage: string;
}

interface IRes {
  ok: boolean;
  status: any;
  json: any;
}

const Projects = () => {
  const [itemsApi, setItemsApi] = useState([]);

  useEffect(() => {
    let abortController = new AbortController();

    function getGitHubAPI() {
      fetch("https://api.github.com/users/ivaniltonneto/repos")
        .then(async (res: IRes) => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          var data = await res.json();
          setItemsApi(data);
        })
        .catch((e) => console.log(e));
    }

    getGitHubAPI();

    return () => abortController.abort();
  }, []);  
  return (
    <Container>
      <Content>
        <Ul>
          {itemsApi.map((item: IItem) => (
            <Li key={item.id}>
              <strong>{item.name.toUpperCase()}</strong>
              <Span>
                Page: <a href={item.homepage}>Acessar site!</a>
              </Span>
              <Span>Git: {item.svn_url}</Span>
              <Span>Descrição: {item.description}</Span>
            </Li>
          ))}
        </Ul>
      </Content>
    </Container>
  );
};

export default Projects;
