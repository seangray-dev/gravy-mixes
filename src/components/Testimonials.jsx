import React from "react";
import testimonialsData from "../data/testimonials-data";
import TestimonialItem from "./TestimonioalItem";

function Testimonials() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {testimonialsData.map((item) => (
          <TestimonialItem
            imgUrl={item.imgUrl}
            client={item.client}
            aboutClient={item.aboutClient}
            location={item.location}
            testimonial={item.testimonial}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
