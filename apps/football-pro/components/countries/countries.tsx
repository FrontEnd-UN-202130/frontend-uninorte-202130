import { useState , useEffect} from 'react';
import { useRouter } from 'next/router'
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import {Country} from '@frontend-uninorte-202130/types'
import {sendingDataCountries} from '@frontend-uninorte-202130/data-mocks-api';
/* eslint-disable-next-line */
export interface CountriesProps {}

const StyledCountries = styled.div`
  color: pink;
`;
const columns = [
  {
      name: 'Name',
      selector: row => row.name,
  },
  {
      name: 'Code',
      selector: row => row.code,
  },
  {
    name: 'Flag',
    // eslint-disable-next-line @next/next/no-img-element
    cell: row => <img src={row.flag} alt="contry-flag" width="130"/>,
  },
];

export function Countries(props: CountriesProps) {
  const [isloading, setIsloading] = useState(true)
  const [countries, setCountries] = useState<Country[]>([]);
  const router = useRouter();
  useEffect(() => {
    sendingDataCountries()
    .then((data)=>{setCountries(data); setIsloading(false);} )
  }, [])

  return (
    <StyledCountries>
      {
        isloading 
        ? 
        <p>Loading ...</p> :
        <DataTable
        columns={columns}
        data={countries}
        pagination
        onRowClicked ={rowData => router.push(`/teams/${rowData.name}`
        )}
        />
      }
    </StyledCountries>
  );
}

export default Countries;
