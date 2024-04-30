export interface HeaderContextOptionsInterface {
    showTeams: boolean;
    justifyContent: string;
    options: Options[];
  }


  interface Options {
    item: string,
    id: boolean,
    redirection: boolean,
    url: string
  }