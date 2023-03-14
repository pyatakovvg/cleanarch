
import { ArticleDto } from '@library/kernel';
import pageController from '@controllers/PageController';

import { Article, NoContent } from '@library/design';

import React from 'react';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';


const _Item = styled.div`
  display: block;
  
  & + & {
    margin: 32px 0 0;
  }
`;


function Content() {
  const navigate = useNavigate();

  function handleReadMore(uuid: TUuid) {
    navigate(process.env['PUBLIC_URL'] + '/articles/' + uuid);
  }

  if ( ! pageController.articles.length) {
    return <NoContent />;
  }

  return (
    <>
      {pageController.articles.map((article: ArticleDto) => (
        <_Item key={article.uuid}>
          <Article
            {...article}
            onReadMore={() => handleReadMore(article.uuid)}
          />
        </_Item>
      ))}
    </>
  );
}

export default observer(Content);
