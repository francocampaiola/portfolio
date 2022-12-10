import { useState, useEffect } from "react"
import { MainLayout } from "../layouts"
import { Hero } from "../components/Hero/Hero"
import { About } from '../components/About/About'
import { ContentLayout } from "../layouts/ContentLayout"
import { Projects } from "../components/Projects/Projects"
import { Contact } from "../components/Contact/Contact"
import { BackToTop } from "../components/BackToTop/BackToTop"
import Head from "next/head"

export default function Home() {

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="robots" content="index, follow" />
        <title>Franco Campaiola | Portfolio</title>
        <meta name="author" content="Franco Campaiola" />
        <meta name="description" content="Franco Campaiola is a Web Developer." />
        <meta property="og:title" content="Franco Campaiola | Portfolio" />
        <meta property="og:description" content="Franco Campaiola is a Web Developer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://francocampaiola.com" />
        <meta property="og:image" content="https://francocampaiola.com/og-image.png" />
        <meta property="og:image:secure_url" content="https://francocampaiola.com/og-image.png" />
        <meta property="og:image:alt" content="Franco Campaiola | Portfolio" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1125" />
        <meta property="og:image:height" content="410" />
        <meta property="og:site_name" content="Franco Campaiola | Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta name="keywords" content="francocampaiola, franco, campaiola, @francocampaiola, portfolio, javascript, typescipt, developer, software engineer, frontend, front-end, backend, back-end, fullstack, full-stack, full stack" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <MainLayout>
        <ContentLayout>
          <BackToTop scrollPosition={scrollPosition} />
          <Hero />
          <About />
          <Projects />
          <Contact />
        </ContentLayout>
      </MainLayout>
    </>
  )
}
