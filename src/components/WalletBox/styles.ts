import styled from "styled-components";

interface IContainerProps {
  color: string;
}

export const Container = styled.div<IContainerProps>`
  width: 32%;
  max-width: 400px;
  height: 150px;

  margin: 10px 0;
  padding: 25px 20px;
  border-radius: 10px;

  background-color: ${({ color }) => color};
  color: ${({ theme }) => theme.colors.white};

  position: relative;
  overflow: hidden;

  > img {
    height: 110%;
    opacity: 30%;

    position: absolute;
    top: -10px;
    right: -30px;
  }

  > span {
    font-size: 15px;
    font-weight: 500;
  }

  > small {
    font-size: 12px;
    position: absolute;
    bottom: 10px;
  }

  @media (max-width: 770px) {
    > span {
      font-size: 14px;
    }

    > h1 {
      word-wrap: break-word;
      font-size: 22px;

      strong {
        display: inline-block;
        width: 100%;
        font-size: 16px;
      }
    }
  }

  @media (max-width: 420px) {
    width: 100%;

    > h1 {
      display: flex;
      font-size: 24px;
      strong {
        position: initial;
        width: auto;
        font-size: 24px;
      }

      strong::after {
        content: "";
        margin-left: 2px;
      }
    }
  }
`;

export const Content = styled.div``;
