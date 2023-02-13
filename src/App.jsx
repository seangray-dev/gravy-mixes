import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PlaylistCarousel from "./components/PlaylistCarousel";
import Portfolio from "./components/Portfolio";
import QuoteForm from "./components/QuoteForm";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <PlaylistCarousel></PlaylistCarousel>
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>
      <QuoteForm></QuoteForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
