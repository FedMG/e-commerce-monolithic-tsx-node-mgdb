export const SESSIONS = Object.freeze({
  LOGIN: 'login',
  REGISTER: 'register'
})

export const sessions = {
  [SESSIONS.LOGIN]: {
    title: 'Login',
    linkName: 'register',
    linkText: 'Are you new here? So, sign up!'
  },
  [SESSIONS.REGISTER]: {
    title: 'Register',
    linkName: 'login',
    linkText: 'Are you already registered? So, sign in!'
  }
}
