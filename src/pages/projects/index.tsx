import React, { useEffect, useState } from "react";

import Container, { Content, Ul, Li, Span, SpanTec } from "./style";

interface IItem {
  id: number;
  name: string;
  svn_url: string;
  description: string;
  homepage: string;
  topics: string[];
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
          let data = await res.json();          
          setItemsApi(data);
        })
        .catch((e) => console.log(e));
    }

    getGitHubAPI();

    return () => abortController.abort();
  }, []);  
  console.log(itemsApi)
  return (
    <Container>
      <Content>
        <Ul>
          {itemsApi.map((item: IItem) => (                        
            <Li key={item.id}>
              <strong>{item.name.toUpperCase().replace(/-/g," ")}</strong>
              <Span>                
                Page: <a href={item.homepage} target="_blank" rel="noreferrer">Acessar site!</a>
              </Span>
              <Span>Git:<a href={item.svn_url} target="_blank" rel="noreferrer"> {item.svn_url}</a> </Span>
              <Span>Descrição: {item.description}</Span>
              <SpanTec>Tecnologias: {item.topics.toString().replace(/,/g,", ")}</SpanTec>
            </Li>
          ))}
        </Ul>
      </Content>
    </Container>
  );
};

export default Projects;
