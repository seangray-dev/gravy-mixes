import React from "react";

function PortfolioItem({ imgUrl, audioUrl, title, mixed, mastered }) {
  return (
    <div>
      <img src={imgUrl} alt="" className="w-full h-fit md:48 object-cover" />
      <div className="">
        <audio src={audioUrl}></audio>
      </div>
      <h3 className="font-bold text-2xl mt-4 mb-2">{title}</h3>
      <p>{mixed}</p>
      <p>{mastered}</p>
    </div>
  );
}

export default PortfolioItem;
