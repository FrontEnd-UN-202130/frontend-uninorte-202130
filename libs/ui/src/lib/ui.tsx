import Link from 'next/link'
import styled from 'styled-components';
import { UiProps } from '@frontend-uninorte-202130/type'


const StyledUi = styled.div`
  color: pink;
`;

export function Ui(props: UiProps) {
  const {title, showTitle} = props;
  return (
    <StyledUi>
      <header className="flex">
          <div>
            <h1>{showTitle && title}</h1>
          </div>
          <div>
            <nav>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/countries">Countries</Link></li>
                  <li><Link href="/teams">Teams</Link></li>
                  <li><Link href="/players">Players</Link></li>
                </ul>
              </nav>
          </div>
        </header>
    </StyledUi>
  );
}

export default Ui;
