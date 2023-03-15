import { RegisterForm } from '@/components/register';
import React from 'react';

const RegisterPage = () => {
  return (
  <div style={{ display: 'grid', placeContent: 'center', textAlign:'center'}}>      
      <h1>Register</h1>
      <RegisterForm />
    </div>
  );
};

// export async function getServerSideProps({ params }) {
//   console.log(params)
//   // const products = await getProducts(params.category)
//   return {
//     props: {
//       // ...products,
//     },
//   }
// }

export default RegisterPage