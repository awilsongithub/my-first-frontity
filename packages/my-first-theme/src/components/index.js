

import React from 'react';
import { connect, Global, css, styled, Head } from 'frontity';
import Link from '@frontity/components/link';
import Switch from '@frontity/components/switch';
import List from './list';
import Post from './post';
import Page from './page';
import Loading from "./loading";
import Error from "./error";


const Root = ( { state, actions } ) => {
  const data = state.source.get( state.router.link );
  console.log('data: ', data);
  console.log('state: ', state);
  const metaContent = "Based on the Frontity step by step tutorial";
  const btnText = state.theme.isUrlVisible ? 'Hide URL' : 'Show URL';

  return (
    <>

      <Head>
        <title>My First Frontity Theme</title>
        <meta name="description" content={ metaContent } ></meta>
      </Head>
      <Global
        styles={ css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
          }
          section {
            padding: 15px 0;
          }
        `}
      />
      <Header isPostType={ data.isPostType } isPage={ data.isPage }>
        <HeaderContent>

          <h1>Frontity Hello World</h1>
          { state.theme.isUrlVisible ? <span>Current Url: { state.router.link } &nbsp;</span> : null }
          <Button onClick={ actions.theme.toggleUrl }>{ btnText }</Button>

          <Menu>
            <Link link="/">Home</Link>
            <br />
            <Link link="/contact">Contact</Link>
            <br />
          </Menu>

        </HeaderContent>
      </Header>

      <Main>

        <Switch>
          <Loading when={ data.isFetching } />
          <List when={ data.isArchive } />
          <Post when={ data.isPost } />
          <Page when={ data.isPage } />
          <Error when={ data.isError } />
        </Switch>

      </Main>

    </>
  )
}

export default connect( Root );

const Header = styled.header`
  background-color: #e5edee;
  border-width: 0 0 8px 0;
  border-style: solid;
  border-color: ${( props ) => ( props.isPostType ? ( props.isPage ? 'lightsteelblue' : 'lightseagreen' ) : 'maroon' )};

  h1 {
    color: #4a4a4a;
  }
`
const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`
const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  figure {
    max-width: 100%;
  }
  img {
    max-width: 100%;
    object-fit: cover;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
  `

const Menu = styled.nav`
    display: flex;
    flex-direction: row  ;
    margin-top: 1em;
    & > a {
      margin-right: 1em;
      color: steelblue;
      text-decoration: none;
    }
  `

const Button = styled.button`
  background: transparent;
  border: none;
  color: #aaa;

  :hover {
    cursor: pointer;
    color: #888;
  }
`

