
import React from "react";
import { connect, Head, styled } from "frontity";
import Hero from './hero';

const Page = ( { state, libraries } ) => {

  const Html2React = libraries.html2react.Component;
  const data = state.source.get( state.router.link )
  const page = state.source[data.type][data.id];
  const heroUrl = page.acf.page_banner_background_image.url;
  const heroOpacity = page.acf.page_banner_background_image_opacity;

  console.log( 'data on page.js: ', data );
  console.log( 'page on page.js: ', page );
  console.log( 'url: ', heroUrl );

  return (
    <div>
      <Head>
        <title>{ page.title.rendered }</title>
        <meta name="description" content={ page.excerpt.rendered }></meta>
      </Head>
      <Hero bg={ heroUrl } opacity={ heroOpacity } title={ page.title.rendered } subtitle={ page.acf.page_banner_subtitle }>
      </Hero>
      <section>
        <Html2React html={ page.content.rendered } />
      </section>
    </div>
  )
}

export default connect( Page )

// const Hero = styled.div`
//   background-image:  url("${( props ) => props.bg}");
//   opacity: ${( props ) => props.opacity};
//   height: 300px;
//   width: 100%;
//   padding: 15px;
//   color: white;
// `