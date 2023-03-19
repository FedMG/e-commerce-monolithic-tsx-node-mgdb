import { createStyles } from '@mantine/core';

export const formPage = createStyles((theme) => ({
  pageContainer: {
  },
  title: {
    textAlign: 'center',
    fontSize: theme.fontSizes.xl,
  },
  containerForm: {
    display: 'flex',
    justifyContent: 'center',
  }
}))



export const formStyles = createStyles((theme) => ({    
  form: {
    border: '3px solid lightGrey',
    padding: theme.spacing.lg,
    borderRadius: theme.radius.md,
    width: '100%',
    maxWidth: '32em',
    minWidth: '18em'
  },
  
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing.xl,
  },
  label: {
    textAlign: 'start',
    fontSize: theme.fontSizes.xl,
    marginBottom: 2,
  },
  input: {
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    border: `1px solid ${theme.colors.gray[3]}`,
  },
  button: {
    padding:theme.spacing.sm,
    width: '100%',
    borderRadius: theme.radius.sm,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.white
        : theme.black,
    color:
      theme.colorScheme === "dark"
        ? theme.black
        : theme.white,
    border: 'none',
    cursor: 'pointer',
    "&:hover": {
      backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.gray[4]
        : theme.colors.gray[9],
    },

    "&:active": {
     backgroundColor:
      theme.colorScheme === "dark"
        ? theme.white
        : theme.black,
    }    
  }
}))
