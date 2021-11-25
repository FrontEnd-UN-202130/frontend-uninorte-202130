import getdataCountry from '../mocks/countries.json';
import getdataTeam from '../mocks/teams-country.json'
import {Country, Team} from '@frontend-uninorte-202130/types'
/* eslint-disable-next-line */

const sendingDataCountries = ():Promise<Country[]> =>{
  return new Promise ((res, rej) =>{
    setTimeout(() => res(getdataCountry),
    400);
  }) 
}

const sendingDataTeamsPerCountry = (country : string):Promise<Team[]> =>{
  return new Promise ((res, rej) =>{
    setTimeout(() =>{
      country === 'Argentina' ? res(getdataTeam.map((data) => data.team)) : rej();
    },
    400);
  }) 
}


export{sendingDataCountries, sendingDataTeamsPerCountry} ;
