import getdataCountry from '../mocks/countries.json';
import getdataTeam from '../mocks/teams-country.json';
import getDataPlayers from '../mocks/players.json'
import { Country, Team, PlayerResponse } from '@frontend-uninorte-202130/types'

const sendingDataCountries = (): Promise<Country[]> => {
  return new Promise((res, rej) => {
    setTimeout(() => res(getdataCountry),
      400);
  })
}

const sendingDataTeamsPerCountry = (country: string): Promise<Team[]> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      country === 'Argentina' ? res(getdataTeam.map((data) => data.team)) : rej();
    },
      400);
  })
}

const sendingDataPlayers = (teamid: number): Promise<PlayerResponse> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const data = getDataPlayers[0];
      data.team.id === teamid ? res(data) : rej();
    },
      400);
  })
}


export {
  sendingDataCountries,
  sendingDataTeamsPerCountry,
  sendingDataPlayers
};
