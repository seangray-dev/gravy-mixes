import Nav from './components/Nav';
import Hero from './components/Hero';
import { Portfolio } from './components/Portfolio';
import Clients from './components/Clients';
import Playlists from './components/Playlists';
import Testimonials from './components/Testimonials';
import About from './components/About';
import QuoteRequestForm from './components/QuoteRequestForm';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Portfolio />
        <Clients />
        <Playlists />
        <Testimonials />
        <About />
        <QuoteRequestForm />
      </main>
    </>
  );
}
