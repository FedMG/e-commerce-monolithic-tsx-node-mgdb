import { useUserSessionData } from "@/hooks/useUserSessionData";

const registerForm = {
  name: "",
  email: "",
  password: "",
};

export const RegisterForm = () => {
  const { form, setInput, setSubmit } = useUserSessionData({ form: registerForm, mode: 'register'});

  return (
    <form onSubmit={setSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={setInput}
          required
        />
      </div>
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
      <button type="submit">Register</button>
    </form>
  );
};
