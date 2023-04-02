import { createStyles } from "@mantine/core"

export const HEADER_HEIGHT = 60;

export const useHeaderStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.gray[1],
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
