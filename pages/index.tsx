import { useState, useEffect } from "react"
import { MainLayout } from "../layouts"
import { Hero } from "../components/Hero/Hero"
import { About } from '../components/About/About'
import { ContentLayout } from "../layouts/ContentLayout"
import { Projects } from "../components/Projects/Projects"
import { Contact } from "../components/Contact/Contact"
import { BackToTop } from "../components/BackToTop/BackToTop"

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
