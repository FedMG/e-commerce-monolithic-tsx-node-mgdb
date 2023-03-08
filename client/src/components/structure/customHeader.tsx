import { Header, Menu, Center, Container, Group, Burger, UnstyledButton} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";
import { CustomHeaderProps, HeaderLinks } from "additional";
import Link from "next/link";

import { HEADER_HEIGHT, useHeaderStyles } from "./Header";

const getLinks: React.FC<HeaderLinks[]> = (links, classes) => {  
  const items = links.map(({ path, label, links }) => {
    const menuItems = links?.map(({ path, label }) => (
      <Menu.Item key={path}>
        <Link href={path} className={classes.link}>
          {label}
        </Link>
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <UnstyledButton className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }
    
    return (
      <Link key={label} href={path} className={classes.link}>
        {label}
      </Link>
    );
  });

  return <>{items}</>;
};



export const CustomHeader: React.FC<CustomHeaderProps> = ({ drawer, links }) => {
    const { classes } = useHeaderStyles()
    
    return (
     <Header height={HEADER_HEIGHT} className={classes.header}>
        <Container className={classes.container} fluid>
          <Group style={{ display: 'flex'}}>
            <Burger
              opened={drawer[0]}
              onClick={drawer[1]}
              className={classes.hiddenDesktop}
              size="sm"
            />
            <div style={{ width: '40px' }}>LOGO</div>
          </Group>
          <Group spacing={5} className={classes.links}>
            {getLinks(links, classes)}
          </Group>
          <Group position="center" px="sm">
            <Link href='/user/login'>Sign In </Link>
            <Link href='/user/register'>Sign Up </Link>
          </Group>
        </Container>
      </Header>
    )
}
