import React from "react";

function PortfolioItem({ imgUrl, audioUrl, title, mixed, mastered }) {
  return (
    <div>
      <img src={imgUrl} alt="" className="w-full h-fit md:48 object-cover" />
      <audio src={audioUrl}></audio>
      <h3 className="font-bold text-2xl mt-4">{title}</h3>
      <p>{mixed}</p>
      <p>{mastered}</p>
    </div>
  );
}

export default PortfolioItem;
