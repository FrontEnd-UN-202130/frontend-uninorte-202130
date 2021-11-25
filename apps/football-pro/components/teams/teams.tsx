import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Datatable from '../../components/datatable/datatable';
import { sendingDataTeamsPerCountry } from '@frontend-uninorte-202130/data-mocks-api';

import { Team, TeamsProps } from '@frontend-uninorte-202130/types'

const StyledTeams = styled.div`
  color: pink;
`;

const columns = [
  {
    name: 'Name',
    selector: row => row.name,
  },
  {
    name: 'Logo',
    // eslint-disable-next-line @next/next/no-img-element
    cell: row => <img src={row.logo} alt="contry-flag" width="130" />,
  },
];

export function Teams(props: TeamsProps) {
  const [isloading, setIsloading] = useState(true)
  const [teams, setTeams] = useState<Team[]>([]);
  const router = useRouter();
  useEffect(() => {
    sendingDataTeamsPerCountry(props.country)
      .then((data) => { setTeams(data); setIsloading(false); })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <StyledTeams>
      {
        isloading
          ?
          <p>Loading data ... </p>
          :
          <Datatable
            title={`Teams of ${props.country}`}
            columns={columns}
            data={teams}
            highlightOnHover
            pointerOnHover
            onRowClicked={rowData => router.push(`/players/${rowData.id}`
            )}
          />
      }
    </StyledTeams>
  );
}

export default Teams;
