

export type SubChildren = {
  href: string;
  label: string;
  active: boolean;
  children?: SubChildren[];
};
export type Submenu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus?: Submenu[];
  children?: SubChildren[];
};

export type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
  id: string;
};

export type Group = {
  groupLabel: string;
  menus: Menu[];
  id: string;
};

export function getMenuList(pathname: string,): Group[] {

  return [
    {
      groupLabel: ("CRM"),
      id: "dashboard",
      menus: [
        {
          id: "client",
          href: "/client",
          label: ("client list"),
          active: pathname.includes("/client"),
          icon: "heroicons-outline",
          submenus: [],
        },
      ],
    },

    {
      groupLabel: ("Pages"),
      id: "home",
      menus: [
        {
          id: "home",
          href: "/pages/home",
          label: ("home"),
          active: pathname.includes("/pages/home"),
          icon: "heroicons-outline",
          submenus: [],
        },
        {
          id: "service",
          href: "/pages/service",
          label: ("service"),
          active: pathname.includes("/pages/service"),
          icon: "heroicons-outline",
          submenus: [],
        },
        {
          id: "about",
          href: "/pages/about",
          label: ("about"),
          active: pathname.includes("/pages/about"),
          icon: "heroicons-outline",
          submenus: [],
        },
        
      ],
    },
    {
      groupLabel: ("company"),
      id: "company",
      menus: [
        {
          id: "information",
          href: "/company/information",
          label: ("information"),
          active: pathname.includes("/company/information"),
          icon: "heroicons-outline",
          submenus: [],
        },
        {
          id: "services-list",
          href: "/company/services",
          label: ("services list"),
          active: pathname.includes("/company/services"),
          icon: "heroicons-outline",
          submenus: [],
        },
      ],
    },
    
  ];
}
export function getHorizontalMenuList(pathname: string,): Group[] {
  return [
    {
      groupLabel: ("dashboard"),
      id: "dashboard",
      menus: [
        {
          id: "dashboard",
          href: "/",
          label: ("dashboard"),
          active: pathname.includes("/"),
          icon: "heroicons-outline:home",
          submenus:[],
        },
      ],
    },

    
  ];
}


