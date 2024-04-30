import { HeaderContextOptionsInterface } from "../interfaces/header-interface"

export const headerHome: HeaderContextOptionsInterface = {
    showTeams: true,
    class: "justify-content-center",
    options: [
      { item: "Home", id: true, redirection: false, url: '' },
      { item: "Bio", id: true, redirection: false, url: '' },
      { item: "Goals", id: true, redirection: false, url: '' },
    ],
  }


export const headerGoalPage: HeaderContextOptionsInterface = {
      showTeams: false,
      class: "justify-content-between",
      options: [
        { item: "< Volver", id: false, redirection: true, url: '/' }
      ],
    }