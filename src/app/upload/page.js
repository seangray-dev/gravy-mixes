'use client';

import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Upload = () => {
  const handleSubmit = async (values, actions) => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_MAKE_UPLOAD,
        values
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    actions.setSubmitting(false);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    projectName: Yup.string().required('Required'),
  });

  return (
    <div className='flex flex-col min-h-screen'>
      <Nav />
      <main className='bg-black text-white flex-grow'>
        <div className='mx-auto text-center flex flex-col gap-4 max-w-[320px]'>
          <h1 className='text-4xl mt-10'>Upload Your Files</h1>
          <p className='text-sm mb-4'>
            Fill out this form and you will receive a link in your email for you
            to upload your files.
          </p>
        </div>
        <Formik
          initialValues={{ name: '', email: '', projectName: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {({ errors, touched }) => (
            <Form className='flex flex-col max-w-[320px] mx-auto gap-4'>
              <Field
                id='name'
                name='name'
                placeholder='Your Name'
                className='bg-transparent border-b border-white px-4 py-2 outline-none focus:border-white/50 transition-all duration-300'
              />

              <ErrorMessage name='name'>
                {(msg) => (
                  <div className='text-red-500 text-xs text-right'>{msg}</div>
                )}
              </ErrorMessage>
              <Field
                id='email'
                name='email'
                placeholder='Your Email'
                type='email'
                className='bg-transparent border-b border-white px-4 py-2 outline-none focus:border-white/50 transition-all duration-300'
              />

              <ErrorMessage name='email'>
                {(msg) => (
                  <div className='text-red-500 text-xs text-right'>{msg}</div>
                )}
              </ErrorMessage>
              <Field
                id='projectName'
                name='projectName'
                placeholder='Project Name'
                className='bg-transparent border-b border-white px-4 py-2 outline-none focus:border-white/50 transition-all duration-300'
              />
              <ErrorMessage name='projectName'>
                {(msg) => (
                  <div className='text-red-500 text-xs text-right'>{msg}</div>
                )}
              </ErrorMessage>

              <button className='bg-white text-black py-2 px-6 w-full uppercase flex items-center gap-4 hover:opacity-60 duration-300 transition-all'>
                <span className='mx-auto tracking-widest font-bold text-xs md:text-sm'>
                  Submit
                </span>
              </button>
            </Form>
          )}
        </Formik>
      </main>
      <Footer />
    </div>
  );
};

export default Upload;
