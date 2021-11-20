import styled from 'styled-components';
import Indexcarousel from '../components/indexcarousel/indexcarousel';
const StyledPage = styled.div`

`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <div className="main-container">
        <div>
        <main>
        <section>
          <article>
            <h2>Welcome to our new app Football-pro!</h2>
            <p>Here you can find information about:</p>
          </article>
        </section>
      </main>
      <Indexcarousel/>
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
