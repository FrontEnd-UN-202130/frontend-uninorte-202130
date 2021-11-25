import styled from "styled-components";
import CountriesComponent from "../components/countries/countries";
const StyledPage = styled.div`
    .page{
    }
`;

export function Countries() {
    return (
        <StyledPage>
            <CountriesComponent />
        </StyledPage>
    )
}

export default Countries;
