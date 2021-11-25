import getdataCountry from '../mocks/countries.json';
import getdataTeam from '../mocks/teams-country.json';
import getDataPlayers from '../mocks/players.json';
import {
  Country,
  Team,
  PlayerResponse,
  TeamsResponse,
} from '@frontend-uninorte-202130/types';
import { getData } from './httpService';

const sendingDataCountriesApi = async (): Promise<Country[]> => {
  const data = await getData('countries');
  return data.data.response;
};

const sendingDataTeamsPerCountryApi = async (
  country: string
): Promise<Team[]> => {
  const data = await getData(`teams?country=${country}`);
  const teams = data.data.response.map(
    (team_xi: TeamsResponse) => team_xi.team
  );
  return teams;
};

const sendingDataPlayersApi = async (
  teamid: number
): Promise<PlayerResponse> => {
  const data = await getData(`players/squads?team=${teamid}`);
  return data.data.response[0];
};

const isUsingApi = process.env.NODE_ENV === 'production';

const sendingDataCountriesJson = (): Promise<Country[]> => {
  return new Promise((res, rej) => {
    setTimeout(() => res(getdataCountry), 400);
  });
};

const sendingDataTeamsPerCountryJson = (country: string): Promise<Team[]> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      country === 'Argentina'
        ? res(getdataTeam.map((data) => data.team))
        : rej();
    }, 400);
  });
};

const sendingDataPlayersJson = (teamid: number): Promise<PlayerResponse> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const data = getDataPlayers[0];
      data.team.id === teamid ? res(data) : rej();
    }, 400);
  });
};

const sendingDataCountries = (): Promise<Country[]> => {
  return isUsingApi ? sendingDataCountriesApi() : sendingDataCountriesJson();
};

const sendingDataTeamsPerCountry = (country: string): Promise<Team[]> => {
  return isUsingApi
    ? sendingDataTeamsPerCountryApi(country)
    : sendingDataTeamsPerCountryJson(country);
};

const sendingDataPlayers = (teamid: number): Promise<PlayerResponse> => {
  return isUsingApi
    ? sendingDataPlayersApi(teamid)
    : sendingDataPlayersJson(teamid);
};

export { sendingDataCountries, sendingDataTeamsPerCountry, sendingDataPlayers };
