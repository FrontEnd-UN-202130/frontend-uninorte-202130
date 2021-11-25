import Teams from '../../components/teams/teams';
import { useRouter } from 'next/router'

const TeamPagePerCountry = () =>{
    const router = useRouter();
    const country = router.query.country as string;
    return <Teams country={country}/>
}

export default TeamPagePerCountry;