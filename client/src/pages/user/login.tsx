import { LoginForm } from '@/components/login';
import React from 'react';

const LoginPage = () => {
  return (
  <div style={{ display: 'grid', placeContent: 'center', textAlign:'center'}}>
      <h1>Login</h1>
      <LoginForm />
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

export default LoginPage
