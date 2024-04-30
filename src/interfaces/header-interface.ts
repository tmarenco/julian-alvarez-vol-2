export interface HeaderContextOptionsInterface {
    showTeams: boolean;
    class: string;
    options: Options[];
  }


  interface Options {
    item: string,
    id: boolean,
    redirection: boolean,
    url: string
  }