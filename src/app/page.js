import Nav from './components/Nav';
import Hero from './components/Hero';
import { Portfolio } from './components/Portfolio';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Portfolio />
      </main>
    </>
  );
}
