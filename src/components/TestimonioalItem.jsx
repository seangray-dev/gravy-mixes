import React from "react";

function TestimonialItem({
  imgUrl,
  client,
  aboutClient,
  location,
  testimonial,
}) {
  return (
    <div>
      <img src={imgUrl} alt="" className="w-full h-fit md:48 object-cover" />
      <h3 className="font-bold text-2xl mt-4 mb-2">{client}</h3>
      <p className="italic">{aboutClient}</p>
      <p className="mb-4">{location}</p>
      <p>{testimonial}</p>
    </div>
  );
}

export default TestimonialItem;
