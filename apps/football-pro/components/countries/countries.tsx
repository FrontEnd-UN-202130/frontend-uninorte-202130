import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Datatable from '../../components/datatable/datatable';
import styled from 'styled-components';
import { Country } from '@frontend-uninorte-202130/types'
import { sendingDataCountries } from '@frontend-uninorte-202130/data-mocks-api';
/* eslint-disable-next-line */
export interface CountriesProps { }

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
    cell: row => <img src={row.flag} alt="contry-flag" width="130" />,
  },
];

export function Countries(props: CountriesProps) {
  const [isloading, setIsloading] = useState(true)
  const [countries, setCountries] = useState<Country[]>([]);
  const router = useRouter();
  useEffect(() => {
    sendingDataCountries()
      .then((data) => { setCountries(data); setIsloading(false); })
  }, [])

  return (
    <StyledCountries>
      {
        isloading
          ?
          <p>Loading ...</p> :
          <Datatable
            title={'Countries\' list'}
            columns={columns}
            data={countries}
            onRowClicked={rowData => router.push(`/teams/${rowData.name}`
            )}
            highlightOnHover
            pointerOnHover
          />
      }
    </StyledCountries>
  );
}

export default Countries;
