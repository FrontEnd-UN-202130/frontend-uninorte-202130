import styled from "styled-components";
import CountriesComponent from "../components/countries/countries";
const StyledPage = styled.div`
    .page{
    }
`;

export function Countries(){
    return(
        <StyledPage>
            <h2>Countries</h2>
            <CountriesComponent/>
        </StyledPage>
    )
}

export default Countries;
