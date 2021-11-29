import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0% {
    transform: translateX(-100px)
  }
  100% {
    transform: translateX(0px);
  }
`;

export const Container = styled.div`
  width: 48%;
  height: 260px;
  transform: translateX();

  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 7px;

  animation: ${animate} .5s;

  margin: 10px 0;
  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > header img {
    width: 35px;
    margin-left: 7px;
  }

  > header p {
    font-size: 18px;
  }

  @media (max-width: 770px) {
    width: 100%;
    > header {
      font-size: 24px;

      > h1 {
        font-size: 27px;
      }

      img {
        height: 20px;
        width: 20px;
      }

      > header p,
      > footer span {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 420px) {
    width: 100%;
    height: auto;

    > header p {
      margin-bottom: 15px;
    }
  }
`;
