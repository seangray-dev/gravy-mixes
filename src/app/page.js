import Nav from './components/Nav';
import Hero from './components/Hero';
import { Portfolio } from './components/Portfolio';
import Clients from './components/Clients';
import Playlists from './components/Playlists';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Portfolio />
        <Clients />
        <Playlists />
      </main>
    </>
  );
}
