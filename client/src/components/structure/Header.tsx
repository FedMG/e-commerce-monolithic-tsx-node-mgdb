import { createStyles } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HeaderActionProps } from "additional";

import { CustomDrawer } from "./customDrawer";
import { CustomHeader } from "./customHeader";

export const HEADER_HEIGHT = 60;

export const useHeaderStyles = createStyles((theme) => ({  
  header: {
    borderBottom: 0,
    position: 'sticky',
    top: 0,
    marginBottom: 10
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
  
  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));
  
  
export const HeaderAction: React.FC<HeaderActionProps> = ({ links }) => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  return (
    <>
      <CustomHeader drawer={[drawerOpened, toggleDrawer]} links={links} />
      <CustomDrawer
        drawer={[drawerOpened, closeDrawer]}
        collapse={[linksOpened, toggleLinks]}
        links={links}
      />
    </>
  );
};
