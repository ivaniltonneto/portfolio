import React, { useEffect, useState } from "react";

import {
  Container,
  Content,
  Ul,
  Li
} from "./style";

interface IItem {
  id: number;
  name: string;
  url: string;
  created_at: string;
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
              <span>URL: {item.url}</span>
              <span>
                Data Criação:{" "}
                {Intl.DateTimeFormat("pt-BR").format(new Date(item.created_at))}
              </span>
            </Li>
          ))}
        </Ul>
      </Content>
    </Container>
  );
};

export default Projects;
