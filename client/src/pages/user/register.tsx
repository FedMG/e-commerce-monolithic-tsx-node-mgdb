import { RegisterForm } from '@/components/register';
import { formPage } from '@/styles/matine';

const RegisterPage = () => {
  const { classes } = formPage()
  
  return (
     <>
      <h2 className={classes.title}>Register</h2>
      <div className={classes.containerForm}>
      <RegisterForm />
    </div>
    </>
  );
};

export default RegisterPage
