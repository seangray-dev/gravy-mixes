'use client';


import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  numberOfSongs: Yup.number().required('Required'),
  servicesNeeded: Yup.array().required('Required'),
  budget: Yup.string().required('Required'),
});

const QuoteRequestForm = () => {
  const handleSubmit = async (values, actions) => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_MAKE_QUOTE_REQUEST_HOOK,
        values
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    actions.setSubmitting(false);
  };

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    } else {
      controls.start({
        opacity: 0,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      id='quote'
      className='bg-black text-white py-10'
      ref={ref}
      animate={controls}
      initial={{ opacity: 0 }}>
      <div className='max-w-[320px] md:max-w-[500px] mx-auto'>
        <h3 className='uppercase font-bold text-[2rem] text-center md:text-4xl tracking-wider mb-6'>
          Request a Quote
        </h3>
        <Formik
          initialValues={{
            name: '',
            email: '',
            projectReason: '',
            previousMusic: '',
            numberOfSongs: '',
            servicesNeeded: [],
            dueDate: '',
            budget: '',
            projectDetails: '',
            roughMix: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {({ setFieldValue }) => (
            <Form className='flex flex-col gap-4 '>
              <div className='relative'>
                <label htmlFor='name' className='sr-only'>
                  Name
                </label>
                <Field
                  id='name'
                  name='name'
                  placeholder='Your Name or Artist Name'
                  className='w-full bg-transparent outline-none py-2 px-2 border-b-2 border-white/60 focus:border-white transition-all placeholder:text-white/50'
                />
                <ErrorMessage name='name'>
                  {(msg) => (
                    <div className='text-red-500 text-xs absolute top-0 right-0'>
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className='relative'>
                <label htmlFor='email' className='sr-only'>
                  Email
                </label>
                <Field
                  id='email'
                  name='email'
                  placeholder='youremail@gmail.com'
                  type='email'
                  className='w-full bg-transparent outline-none py-2 px-2 border-b-2 border-white/60 focus:border-white transition-all placeholder:text-white/50'
                />
                <ErrorMessage name='email'>
                  {(msg) => (
                    <div className='text-red-500 text-xs absolute top-0 right-0'>
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <label htmlFor='projectReason' className='sr-only'>
                Why do you want to hire us for your next project?
              </label>
              <Field
                id='projectReason'
                name='projectReason'
                placeholder='Why do you want to hire us for your next project?'
                component='textarea'
                className='bg-transparent outline-none py-2 px-2 border-b-2 border-white/60 focus:border-white transition-all placeholder:text-white/50'
              />
              <label htmlFor='previousMusic' className='sr-only'>
                Where can I stream your previous music?
              </label>
              <Field
                id='previousMusic'
                name='previousMusic'
                placeholder='Where can we stream your previous music? Enter a link...'
                className='bg-transparent outline-none py-2 px-2 border-b-2 border-white/60 focus:border-white transition-all placeholder:text-white/50'
              />
              <div className='relative'>
                <label htmlFor='numberOfSongs' className='sr-only'>
                  Number of Songs
                </label>
                <Field
                  as='select'
                  name='numberOfSongs'
                  className='w-full bg-transparent outline-none py-2 px-2 border-b-2 border-white/60 focus:border-white transition-all text-white/50'>
                  <option value='none'>Number of Songs</option>
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'song' : 'songs'}
                    </option>
                  ))}
                  <option value='11+'>11+ songs</option>
                </Field>
                <ErrorMessage name='numberOfSongs'>
                  {(msg) => (
                    <div className='text-red-500 text-xs absolute top-0 right-0'>
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className='relative'>
                <label htmlFor='budget' className='sr-only'>
                  Your Budget - Per Song
                </label>
                <Field
                  as='select'
                  name='budget'
                  className='w-full bg-transparent outline-none py-2 px-2 border-b-2 border-white/60 transition-all text-white/50 relative'>
                  <option value=''>Your Budget - Per Song</option>
                  <option value={250}>$250-$350</option>
                  <option value={350}>$350-$500</option>
                  <option value={500}>$500+</option>
                </Field>
                <ErrorMessage name='budget'>
                  {(msg) => (
                    <div className='text-red-500 text-xs absolute top-0 right-0'>
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className='relative'>
                <div
                  id='servicesNeeded'
                  role='group'
                  aria-labelledby='servicesNeeded'>
                  <legend className='my-2'>
                    Services Needed{' '}
                    <span className='text-white/50 text-xs'>
                      (Select one or more)
                    </span>
                  </legend>
                  <div className='flex flex-wrap justify-between'>
                    <label className='flex gap-2'>
                      <Field
                        type='checkbox'
                        name='servicesNeeded'
                        value='Mixing'
                        as='input'
                      />
                      Mixing
                    </label>
                    <label className='flex gap-2'>
                      <Field
                        type='checkbox'
                        name='servicesNeeded'
                        value='Mastering'
                        as='input'
                      />
                      Mastering
                    </label>
                    <label className='flex gap-2'>
                      <Field
                        type='checkbox'
                        name='servicesNeeded'
                        value='Pitch Correction'
                        as='input'
                      />
                      Pitch Correction
                    </label>
                  </div>
                </div>
                <ErrorMessage name='servicesNeeded'>
                  {(msg) => (
                    <div className='text-red-500 text-xs absolute top-0 right-0'>
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className='relative flex flex-col'>
                <label htmlFor='dueDate'>Final Mix Due Date</label>
                <label htmlFor='dueDate'>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    style={{ color: '#ffffff' }}
                    alt={'calendar-icon'}
                    className='absolute right-2 top-[50%] pointer-events-none'
                  />
                </label>
                <Field
                  id='dueDate'
                  name='dueDate'
                  type='date'
                  className='bg-transparent outline-none py-2 px-2 border-b-2 border-white/60 transition-all text-white/50'
                />
              </div>
              <label htmlFor='projectDetails' className='sr-only'>
                Tell us a bit more about this project
              </label>
              <Field
                id='projectDetails'
                name='projectDetails'
                placeholder='Tell us a bit more about this project...'
                component='textarea'
                className='bg-transparent outline-none py-2 px-2 border-b-2 border-white/60 focus:border-white transition-all placeholder:text-white/50'
              />
              <label htmlFor='roughMix' className='sr-only'>
                Submit Rough Mix/Demo
              </label>
              <Field
                id='roughMix'
                name='roughMix'
                component='textarea'
                placeholder='After submitting this form, you will receive an email in your inbox to upload your demo(s) for the project you would like mixed.'
                className='bg-transparent outline-none py-2 px-2 border-b-2 border-white/60 focus:border-white transition-all placeholder:text-white/50'
              />
              <div className='mx-auto mt-4 w-full'>
                <button className='bg-white text-black py-2 px-6 w-full uppercase flex items-center gap-4 hover:opacity-60 duration-300 transition-all'>
                  <span className='mx-auto font-bold tracking-widest text-xs md:text-sm'>
                    Submit
                  </span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </motion.div>
  );
};

export default QuoteRequestForm;
