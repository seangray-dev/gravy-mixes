'use client';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Btn_Primary from './buttons/Btn_Primary';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  numberOfSongs: Yup.string().required('Required'),
  servicesNeeded: Yup.array().required('Required'),
  budget: Yup.string().required('Required'),
});

const QuoteRequestForm = () => {
  const handleSubmit = (values, actions) => {
    // Send the data to Make.com
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <div className='bg-black text-white'>
      <div className='max-w-[320px] md:max-w-[500px] mx-auto pt-10'>
        <h3 className='uppercase font-bold text-[2rem] text-center md:text-4xl tracking-wider'>
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
            <Form className='flex flex-col'>
              <label htmlFor='name' className='sr-only'>
                Name
              </label>
              <Field
                id='name'
                name='name'
                placeholder='Your Name or Artist Name'
                className='bg-transparent border-b-2 border-white/60'
              />
              <ErrorMessage name='name'>
                {(msg) => <div className='text-red-500'>{msg}</div>}
              </ErrorMessage>
              <label htmlFor='email' className='sr-only'>
                Email
              </label>
              <Field
                id='email'
                name='email'
                placeholder='john@doe.com'
                type='email'
              />
              <ErrorMessage name='email'>
                {(msg) => <div className='text-red-500'>{msg}</div>}
              </ErrorMessage>
              <label htmlFor='projectReason' className='sr-only'>
                Why do you want to hire us for your next project?
              </label>
              <Field
                id='projectReason'
                name='projectReason'
                placeholder='Describe your reason...'
                component='textarea'
              />
              <label htmlFor='previousMusic' className='sr-only'>
                Where can I stream your previous music?
              </label>
              <Field
                id='previousMusic'
                name='previousMusic'
                placeholder='Enter a link...'
              />
              <label htmlFor='numberOfSongs' className='sr-only'>
                Number of Songs
              </label>
              <Field as='select' name='numberOfSongs'>
                <option value=''>Select</option>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'song' : 'songs'}
                  </option>
                ))}
                <option value='11+'>11+ songs</option>
              </Field>
              <ErrorMessage name='numberOfSongs'>
                {(msg) => <div className='text-red-500'>{msg}</div>}
              </ErrorMessage>
              <div
                id='servicesNeeded'
                role='group'
                aria-labelledby='servicesNeeded'>
                <legend>Services Needed</legend>
                <label>
                  <Field
                    type='checkbox'
                    name='servicesNeeded'
                    value='Mixing'
                    as='input'
                  />
                  Mixing
                </label>
                <label>
                  <Field
                    type='checkbox'
                    name='servicesNeeded'
                    value='Mastering'
                    as='input'
                  />
                  Mastering
                </label>
                <label>
                  <Field
                    type='checkbox'
                    name='servicesNeeded'
                    value='Pitch Correction'
                    as='input'
                  />
                  Pitch Correction
                </label>
              </div>
              <ErrorMessage name='servicesNeeded'>
                {(msg) => <div className='text-red-500'>{msg}</div>}
              </ErrorMessage>
              <label htmlFor='dueDate' className='sr-only'>
                Final Mix Due Date
              </label>
              <Field id='dueDate' name='dueDate' type='date' />
              <label htmlFor='budget' className='sr-only'>
                Your Budget - Per Song
              </label>
              <Field as='select' name='budget'>
                <option value=''>Select</option>
                <option value='$250-$350'>$250-$350</option>
                <option value='$350-$500'>$350-$500</option>
                <option value='$500+'>$500+</option>
              </Field>
              <ErrorMessage name='budget'>
                {(msg) => <div className='text-red-500'>{msg}</div>}
              </ErrorMessage>
              <label htmlFor='projectDetails' className='sr-only'>
                Tell us a bit more about this project
              </label>
              <Field
                id='projectDetails'
                name='projectDetails'
                placeholder='Describe your project...'
                component='textarea'
              />
              <label htmlFor='roughMix' className='sr-only'>
                Submit Rough Mix/Demo
              </label>
              <Field
                id='roughMix'
                name='roughMix'
                component='textarea'
                placeholder='After submitting this form, you will receive an email in your inbox to upload your demo(s) for the project you would like mixed.'
              />
              <button type='submit'>Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default QuoteRequestForm;
