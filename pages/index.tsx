import { MainLayout } from "../layouts"
import { Hero } from "../components/Hero/Hero"
import { About } from '../components/About/About'
import { ContentLayout } from "../layouts/ContentLayout"
import { Projects } from "../components/Projects/Projects"

export default function Home() {
  return (
    <>
      <MainLayout>
        <ContentLayout>
          <Hero />
          <About />
          <Projects />
        </ContentLayout>
      </MainLayout>
    </>
  )
}
