import styled from 'styled-components';

export const StyledScoreboard = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: top; 
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #333;
  min-height: 30px;
  width: 200%;
  height: 100vh;
  border-radius: 20px;
  color: ${props => (props.gameOver ? 'red' : '#999')};
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`;