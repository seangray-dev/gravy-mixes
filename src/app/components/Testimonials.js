import TestimonialSlider from './TestimonialSlider';

const Testimonials = () => {
  return (
    <section className='flex flex-col-reverse md:grid md:grid-cols-[40%,_60%] lg:grid-cols-[60%,_40%]'>
      <div className='bg-black'>
        <TestimonialSlider />
      </div>
      <div className='bg-white py-20 px-8 md:grid justify-center items-center'>
        <div className='grid gap-4 md:max-w-[387px]'>
          <h2 className='uppercase font-bold text-[2rem] md:text-4xl tracking-wider'>
            Testimonials
          </h2>
          <p className='opacity-60 text-sm tracking-wide'>
            Hear from our clients who have experienced our services. We are
            dedicated to providing excellent customer service and high-quality
            results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
