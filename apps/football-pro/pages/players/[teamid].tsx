import Players from '../../components/players/players';
import { useRouter } from 'next/router'

const TeamPlayers = () => {
    const router = useRouter();
    const teamid = Number(router.query.teamid as string);
    return <Players teamid={teamid} />
}

export default TeamPlayers;