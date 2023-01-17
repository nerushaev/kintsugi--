import { Circles } from 'react-loader-spinner';
import styled from 'styled-components';

const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Loader() {
  return (
    <CircleWrapper>
      <Circles height="80" width="80" color="rgb(253, 207, 243)" ariaLabel="circles-loading" visible={true} />
    </CircleWrapper>
  )
}
