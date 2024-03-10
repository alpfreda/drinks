export interface Intro {
  enable: string;
  title: string;
  image: string;
  Description: string;
}

export interface Type {
  name: string;
  value: string;
}

export interface NavigationLink {
  name: string;
  url: string;
}

export interface Ui {
  name: string;
  logo: string;
  intro: Intro;
  navigationLinks: NavigationLink[];
  drinksPerDesktopRow: number;
  drinksPerMobileRow: number;
  types: Type[];
  defaultType: string;
  detailShowIngredients: boolean;
  detailShowServedIn: boolean;
  detailShowInstructions: boolean;
}

export interface Api {
  baseUrl: string;
  endpoints: {
    list: string;
    details: string;
  };
}

export interface AppConfig {
  app: Ui | undefined;
  api: Api | undefined;
}
