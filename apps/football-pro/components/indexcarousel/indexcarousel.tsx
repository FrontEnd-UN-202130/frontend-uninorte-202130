import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
/* eslint-disable-next-line */
export interface IndexcarouselProps { }

const StyledIndexcarousel = styled.div`
  color: pink;
  img{
    height: 500px;
  }
`;

export function Indexcarousel(props: IndexcarouselProps) {
  return (
    <StyledIndexcarousel>
      <Carousel autoPlay={true} showThumbs={false} showArrows={false} showStatus={false}>
        <div>
          <img src="https://i.ibb.co/qDmNq3S/countries.jpg" />
          <p className="legend">Countries</p>
        </div>
        <div>
          <img src="https://i.ibb.co/JQhQHLb/teams.jpg" />
          <p className="legend">Teams</p>
        </div>
        <div>
          <img src="https://i.ibb.co/02pMMgZ/players.jpg" />
          <p className="legend">Players</p>
        </div>
      </Carousel>
    </StyledIndexcarousel>
  );
}

export default Indexcarousel;
