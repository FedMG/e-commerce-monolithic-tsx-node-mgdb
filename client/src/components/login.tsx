import { useUserSessionData } from "@/hooks/useUserSessionData";
import { formStyles } from "@/styles/matine";

const loginForm = {
  email: "",
  password: "",
};

export const LoginForm = () => {
   const { form, setInput, setSubmit } = useUserSessionData({ form: loginForm, mode: 'login'})
   const { classes } = formStyles()
   
  return (
    <form className={classes.form} onSubmit={setSubmit}>
      <div className={classes.formGroup}>
        <label className={classes.label} htmlFor="email">Email:</label>
        <input
          className={classes.input}
          type="email"
          id="email"
          name="email"
          placeholder="example@email.dev"
          value={form.email}
          onChange={setInput}
          required
        />
      </div>
      <div className={classes.formGroup}>
        <label className={classes.label} htmlFor="password">Password:</label>
        <input
          className={classes.input}
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={setInput}
          
          required
        />
      </div>
      <button className={classes.button} type="submit">Login</button>
    </form>
  );
};
