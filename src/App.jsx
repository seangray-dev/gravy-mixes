import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PlaylistCarousel from "./components/PlaylistCarousel";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <PlaylistCarousel></PlaylistCarousel>
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>
      <About></About>
      <QuoteForm></QuoteForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
