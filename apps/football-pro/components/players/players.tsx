import { useState, useEffect } from 'react';
import Datatable from '../../components/datatable/datatable';
import styled from 'styled-components';
import { Player, PlayerResponse, Team } from '@frontend-uninorte-202130/types'
import { sendingDataPlayers } from '@frontend-uninorte-202130/data-mocks-api';
/* eslint-disable-next-line */
export interface PlayersProps { teamid: number }

const StyledCountries = styled.div`
  color: black;
`;
const columns = [
  {
    name: 'Name',
    selector: row => row.name,
  },
  {
    name: 'Age',
    selector: row => row.age,
  },
  {
    name: 'Number',
    selector: row => row.number,
  },
  {
    name: 'Position',
    selector: row => row.position,
  },
  {
    name: 'Photo',
    // eslint-disable-next-line @next/next/no-img-element
    cell: row => <img src={row.photo} alt="player-photo" width="50" />,
  },
];

export function Players(props: PlayersProps) {
  const [isloading, setIsloading] = useState(true)
  const [teaminfo, setTeaminfo] = useState<Team>();
  const [players, setPlayers] = useState<Player[]>([]);
  useEffect(() => {
    sendingDataPlayers(props.teamid)
      .then((data) => {
        if (data) {
          setPlayers(data.players);
          setTeaminfo(data.team);
        }
        setIsloading(false);
      })
  }, [])

  return (
    <StyledCountries>
      {
        isloading
          ?
          <p>Loading ...</p> :
          players.length > 0 ? <Datatable
            title={`Players of ${teaminfo.name}`}
            columns={columns}
            data={players}
          />
            :
            <h2> This team does not have any player</h2>
      }
    </StyledCountries>
  );
}

export default Players;
