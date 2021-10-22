import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 800px) {
    height: calc(100% - 100px);
  }
`;

export const Title = styled.span`
  width: 30%;
  margin-top: 20px;
  font-size: 24px;
  font-weight: 600;
  color: #fcfcfc;
  padding: 0px 6px;
  text-align: center;

  @media screen and (min-width: 100px) and (max-width: 500px)  {
    width: 90%;
    text-align: start;
  }
`;

export const Content = styled.div`
  width: 60%;
  padding: 0px 0px;
  height: 100%;

  @media only screen and (max-width: 800px) {
    width: 90%;
  }

  > form {
    display: flex;
    flex-direction: column;
    height: 100%;

    > div {
      border: none;
      padding: 12px;
      background: #222;
      font-size: 20px;
      color: #fff;
      border-radius: 8px;
      transition: 0.2s;

      @media only screen and (max-width: 800px) {
        font-size: 16px;
      }
    }

    > input, textarea {
      border: none;
      padding: 12px;
      background: #fff;
      font-size: 20px;
      color: #222;
      border-radius: 8px;
      transition: 0.2s;
      width: 100%;
      resize: none;

      @media only screen and (max-width: 800px) {
        font-size: 16px;
      }

      &:disabled {
        background: #222;
        color: #fff;
        transition: 0.2s;
      }
    }

    > * + * {
      margin-top: 10px;
    }

    > button, a {
      width: 100%;
      background: #81b1dd;
      border: none;
      border-radius: 8px;
      height: 50px;
      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
      outline: none !important;    
      color: #fff; 
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;

      &:active {
        box-shadow: none !important;
        transform: translateY(1px) !important;
        transition: all 0.15s ease;
      }
    }
    > a {
      background: #3a3a3a;
    }

    > textarea {
      flex-grow: 1;

      > &::placeholder {
          color: #777 !important;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;
        }
    }
  }
`;

export const ButtonContent = styled.div`
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  justify-content: flex-end;

  > button {
    background: #81b1dd;
    border: none;
    border-radius: 8px;
    width: 50px;
    height: 50px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    outline: none !important;
    display: flex;
    justify-content: center;
    align-items: center;

    &:active {
      box-shadow: none !important;
      transform: translateY(1px) !important;
      transition: all 0.15s ease;
    }
  }
`;
