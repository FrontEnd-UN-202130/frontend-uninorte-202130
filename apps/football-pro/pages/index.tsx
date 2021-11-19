import Link from 'next/link'
import styled from 'styled-components';
import { request, gql } from 'graphql-request';
import {Ui} from '@frontend-uninorte-202130/ui'
import Countries from '../app/countries/countries';
import {IndexProps} from '@frontend-uninorte-202130/types'
const StyledPage = styled.div`
  .page {
  }
`;

const query = gql`
    query {
    countries {
      code
      name
    }
  }
`

export async function getStaticProps() {
  const data = await request('https://countries.trevorblades.com/', query);
  const {countries} = data;

  return {
    props: {
      countries
    },
  }
}



export function Index(props: IndexProps) {
  const {countries} = props;
  return (
    <StyledPage>
      <Ui title="Uninorte 2021" showTitle />
      <Link href="/about">About</Link>
      <Countries countries={countries} />
    </StyledPage>
  );
}

export default Index
