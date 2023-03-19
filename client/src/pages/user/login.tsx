import { LoginForm } from '@/components/login';
import { formPage } from '@/styles/matine';

const LoginPage = () => {
  const {classes} = formPage()
  return (
    <>
      <h2 className={classes.title}>Login</h2>
      <div className={classes.containerForm}>
      <LoginForm />
    </div>
    </>
  );
};

export default LoginPage
