import styled from 'styled-components';

export const Container = styled.div`
  background: #81b1dd;
  height: 60px;
  width: 100%;
  padding: 20px 14px;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > span {
    color: #fff;
    font-size: 1.3em;
    font-weight: 600;

    @media only screen and (max-width: 800px) {
      width: 90%;
      padding: 0px 10px;
    }
  }
`