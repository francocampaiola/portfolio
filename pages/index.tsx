import { About } from "../components/About/about"
import { Hero } from "../components/Hero/Hero"
import { MainLayout } from "../layouts"

export default function Home() {
  return (
    <>
      <MainLayout>
        <Hero />
        <About />
      </MainLayout>
    </>
  )
}
