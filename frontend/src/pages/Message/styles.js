import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > a {
    background: #81b1dd;
    border: none;
    border-radius: 8px;
    width: 30%;
    height: 50px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    outline: none !important;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-top: 10px;

    @media only screen and (max-width: 800px) {
      width: 90%;
    }

    &:active {
      box-shadow: none !important;
      transform: translateY(1px) !important;
      transition: all 0.15s ease;
    }
  }
`;

export const Title = styled.span`
  width: 30%;
  margin-top: 20px;
  font-size: 24px;
  font-weight: 600;
  color: #fcfcfc;
  padding: 0px 6px;

  @media only screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const Content = styled.div`
  width: 30%;
  padding: 20px 0px;

  @media only screen and (max-width: 800px) {
    width: 90%;
  }

  > div + div {
    margin-top: 12px
  }
`;

export const MessageItem = styled.div`
  width: 100%;
  display: flex;
  background: #0e0e0e;
  border-radius: 8px;
  padding: 10px;
  transition: 0.2s;
  cursor: pointer;
  flex-direction: column;
  opacity: ${({ read }) => read? 0.5: 1};

  &:hover {
    box-shadow: 0px 0px 8px 1px #1e1e1e;
    transition: 0.2s;
    opacity: ${({ read }) => read? 0.8: 1};
  }

  > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-right: 4px;

    > h4 {
      color: #92a2c4;
      width: 60%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    > span {
      display: block;
      width: 12px;
      height: 12px;
      background: #5db2ff;
      border-radius: 50%;
      box-shadow: 0px 0px 7px 1px #67b7ff;
    }
  }

  > .date {
    margin-top: 3px;
    color: #ccc;
    font-size: 11px;
  }
`;

export const Description = styled.p`
  color: #999;
  padding: 10px;
  background: #000000;
  margin-top: 10px;
  border-radius: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  height: auto;
  transition: 0.3s;
`

export const NotFoundMessage = styled.div`
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
  color: #ccc;
  font-size: 22px;
`