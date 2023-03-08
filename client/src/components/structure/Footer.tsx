import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
} from "@mantine/core"
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons"

import { FooterLinksProps } from "additional";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
  inner: {
    display: "flex",    
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    width: '100%',
    justifyContent: "space-around",
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.lg,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
    [theme.fn.smallerThan("md")]: {
      fontSize: theme.fontSizes.md,
    }
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    backgroundColor: "#000000",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

export function FooterLinks({ data }: FooterLinksProps) {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner} fluid>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter} fluid>
        <Text color="#f5f5f5" size="sm">
          © 2022 Copyright example
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter
              size={30}
              stroke={1.5}
              fill="black"
              color="#f5f5f5"
            />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube
              size={30}
              stroke={1.5}
              fill="black"
              color="#f5f5f5"
            />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram
              size={30}
              stroke={1.5}
              fill="black"
              color="#f5f5f5"
            />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
