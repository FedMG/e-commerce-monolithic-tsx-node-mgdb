import { useUserSessionData } from "@/hooks/useUserSessionData";

const loginForm = {
  email: "",
  password: "",
};

export const LoginForm = () => {
   const { form, setInput, setSubmit } = useUserSessionData({ form: loginForm, mode: 'login'})

  return (
    <form onSubmit={setSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={setInput}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={setInput}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
