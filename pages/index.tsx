import { MainLayout } from "../layouts"
import { Hero } from "../components/Hero/Hero"
import { About } from '../components/About/About'

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
