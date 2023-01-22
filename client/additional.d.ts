export interface RootLayout {
  children: React.ReactNode;
  title: string;
}

export interface HeaderLinks {
  path: string;
  label: string;
  links?: {
    path: string;
    label: string;
  }[];
}

export interface HeaderActionProps {
  links: HeaderLinks[]
}

type CustomMethodsProps = [boolean, (() => void)]

export interface CustomHeaderProps {
    drawer: CustomMethodsProps
    links: HeaderLinks[]
}

export interface CustomDrawerProps extends CustomHeaderProps {
    collapse: CustomMethodsProps
}