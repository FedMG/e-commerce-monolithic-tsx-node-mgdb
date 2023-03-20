import { createStyles } from "@mantine/core";

export const formPage = createStyles((theme) => ({
  pageContainer: {},
  title: {
    textAlign: "center",
    fontSize: theme.fontSizes.xl,
  },
  containerForm: {
    display: "flex",
    justifyContent: "center",
  },
}));

export const formStyles = createStyles((theme) => ({
  form: {
    border: "3px solid lightGrey",
    padding: theme.spacing.lg,
    borderRadius: theme.radius.md,
    width: "100%",
    maxWidth: "32em",
    minWidth: "18em",
  },

  formGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing.xl,
  },
  label: {
    textAlign: "start",
    fontSize: theme.fontSizes.xl,
    marginBottom: 2,
  },
  input: {
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    border: `1px solid ${theme.colors.gray[3]}`,
  },
  button: {
    padding: theme.spacing.sm,
    width: "100%",
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colorScheme === "dark" ? theme.white : theme.black,
    color: theme.colorScheme === "dark" ? theme.black : theme.white,
    border: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.gray[4]
          : theme.colors.gray[9],
    },

    "&:active": {
      backgroundColor: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },
}));

export const useBackgroundWrapperStyles = createStyles((theme) => ({
  blobsContainer: {
    position: "relative",
  },
  blob: {
    position: "absolute",
    zIndex: -1,

    animation: "bounce 7s ease-in-out infinite",
    animationFillMode: "forwards",

    "@keyframes bounce": {
      "0%": {
        transform: "translateX(0) scale(1)",
      },
      "50%": {
        transform: "translateX(-4px) scale(1.03)",
      },
      "75%": {
        transform: "translateX(-2px) scale(1.03)",
      },
      "100%": {
        transform: "translateX(0) scale(1)",
      },
    },

    "&:first-child": {
      top: 25,
      left: 44,
      width: 580,
      height: 580,

      [theme.fn.smallerThan("md")]: {
        width: 180,
        height: 180,
      },
    },

    "&:nth-child(2)": {
      top: 405,
      left: 444,
      width: 580,
      height: 580,

      [theme.fn.smallerThan("md")]: {
        width: 280,
        height: 280,
      },
      [theme.fn.smallerThan("sm")]: {
        left: 170,
        width: 280,
        height: 280,
      },
    },
  },
}));

export const useAboutStyles = createStyles((theme) => ({
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: theme.spacing.xl,
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    borderRadius: theme.radius.sm,
    borderBottomLeftRadius: theme.radius.xl,
    borderTopRightRadius: theme.radius.xl,
    backgroundColor:
      theme.colorScheme === "dark"
        ? "rgba(55, 58, 64, 0.45)"
        : "rgba(222, 226, 230, 0.45)",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontSize: "1.3em",
    fontWeight: "bold",
  },
  description: {
    fontsize: "2rem",
  },
  fragment: {
    display: "block",
    paddingBottom: 30,
  },
  span: {
    display: "block",
    paddingBottom: theme.spacing.xs,
    paddingTop: 5,
  },
}));

export const HEADER_HEIGHT = 60;

export const useHeaderStyles = createStyles((theme) => ({
  header: {
    borderBottom: 0,
    position: "sticky",
    top: 0,
    marginBottom: 10,
  },

  container: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  link: {
    display: "block",
    lineHeight: 1,
    textDecoration: "none",
    fontWeight: 500,
    padding: "8px 16px",
    height: "100%",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
      padding: 0,
      paddingRight: theme.spacing.md,
      paddingLeft: theme.spacing.md,

      ...theme.fn.hover({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
      }),
    },
  },
  linkLabel: {
    marginLeft: 5,
  },

  links: {
    display: "none",
    [theme.fn.largerThan("sm")]: {
      display: "flex",
    },
  },

  buttonLinks: {
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    backgroundColor: "#fb6f00",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    width: 100,
    textAlign: "center",
    borderBottom: "1px outset #888",
    borderLeft: "1px outset #888",
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: theme.radius.md,

    "&:hover": {
      backgroundColor: "#df5b00",
    },

    "&:active": {
      backgroundColor: "#fb8426",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export const useProductCardStyles = createStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: 'column',
    backgroundColor: theme.colorScheme === "dark" ? theme.black[6] : theme.colors.gray[1],
    boxShadow: "0.15px 0.15px 1.165px #777777",
    border: "1px solid #f5f5f5",
    borderRadius: theme.radius.xs,
    
    height: "100%",
    
    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.black[6] : theme.colors.gray[3],
      boxShadow: "0.15px 0.15px 1.1965px #777777",
      transition: 'transform 0.1s ease-in-out',
      transform: 'scale(1.01)'
    },    
  },
  
  imageSection: {
    display: 'flex',
    alignItems:'center',
    backgroundImage: theme.fn.gradient({ from: 'white', to: 'grey', deg: 45 }),

    height: "100%",
    margin: '4px',
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    
    [theme.fn.smallerThan("md")]: {
      margin: 0.6,
    }
  },
  
  infoSection: {
    alignSelf: 'flex-end',
    width: '100%',

    padding: "0.6em",
    paddingBottom: "1em",
    
    [theme.fn.smallerThan("sm")]: {
      padding: '2px',
      paddingBottom: "1em",
    }
    
  },

  image: {
    height: '320px',
    userSelect: "none",
    overflow: 'hidden',

    [theme.fn.smallerThan("lg")]: {
      height: '290px', 
    },
    
    [theme.fn.smallerThan("md")]: {
      height: '100%',
    },

    [theme.fn.smallerThan("sm")]: {
      height: '100%',
    },
    
  },
  
  priceRatingContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems:'center'
  },

  price: {
    fontSize: theme.fontSizes.lg,
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.dark,
    
    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.fontSizes.md,
    }
  },
  
  rating: {
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.dark,
    lineHeight: 1,
  },
  star: {
    color: "orange",
  },  
  text: {
    lineHeight: 1,
    fontSize: theme.fontSizes.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.dark,
    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.fontSizes.sm,
      
    },
    paddingTop: theme.spacing.xs,
    height: '100%',
  },
}));
