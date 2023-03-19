import { createStyles } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HeaderActionProps } from "additional";

import { CustomDrawer } from "./customDrawer";
import { CustomHeader } from "./customHeader";
    
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
