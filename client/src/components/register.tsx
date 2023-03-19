import { useUserSessionData } from "@/hooks/useUserSessionData";
import { formStyles } from "@/styles/matine";

const registerForm = {
  name: "",
  email: "",
  password: "",
};

export const RegisterForm = () => {
  const { form, setInput, setSubmit } = useUserSessionData({ form: registerForm, mode: 'register'});
  const { classes } = formStyles()
  
  return (
    <form className={classes.form} onSubmit={setSubmit}>
      <div className={classes.formGroup}>
        <label className={classes.label} htmlFor="name">
          Name:
        </label>
        <input
          className={classes.input}
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={setInput}
          required
        />
      </div>
      <div className={classes.formGroup}>
        <label className={classes.label} htmlFor="email">
          Email:
        </label>
        <input
          className={classes.input}
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={setInput}
          required
        />
      </div>
      <div className={classes.formGroup}>
        <label className={classes.label} htmlFor="password">
          Password:
        </label>
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
      <button className={classes.button} type="submit">
        Register
      </button>
    </form>    
  );
};
