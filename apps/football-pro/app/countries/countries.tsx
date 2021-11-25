import styled from 'styled-components';
import {useCountries} from '../useCountries'
import {IndexProps} from '@frontend-uninorte-202130/types'
/* eslint-disable-next-line */
export interface CountriesProps {}

const StyledCountries = styled.div`
  color: pink;
`;




export function Countries(props: IndexProps) {
  const [ countriesArray ] = useCountries();
  const countries = props.countries ? props.countries : countriesArray;
  return (
    <StyledCountries>
      <h1>Welcome to Countries!</h1>
      <h2>Countries</h2>
      {
        countries && countries.length > 0
        ?
        countries.map(({code, name}) => <li key={code}>{code}-{name}</li>)
        :
        <p>No data found!</p>
      }
    </StyledCountries>
  );
}

export default Countries;
