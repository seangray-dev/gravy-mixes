import React from "react";
import portfolioData from "../data/portfolio-data";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.map((item) => (
          <PortfolioItem
            imgUrl={item.imgUrl}
            audioUrl={item.audioUrl}
            title={item.title}
            mixed={item.mixed}
            mastered={item.mastered}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
