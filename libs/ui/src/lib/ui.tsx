import styled from 'styled-components';
import {UiProps} from '@frontend-uninorte-202130/types'
/* eslint-disable-next-line */


const StyledUi = styled.div`
  color: pink;
`;

export function Ui(props: UiProps) {
  const {title, showTitle} = props;
  return (
    <StyledUi>
      <h1>{showTitle && title}</h1>
    </StyledUi>
  );
}

export default Ui;
