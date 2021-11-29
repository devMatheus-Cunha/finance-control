import styled from "styled-components";

interface ITitleContainerProps {
  lineColor?: string;
}

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-bottom: 25px;

  @media (max-width: 361px) {
    flex-direction: column;
  }
`;

export const TitleContainer = styled.div<ITitleContainerProps>`
  h1 {
    color: ${({ theme }) => theme.colors.white};
  }
  &::after {
    content: "";
    display: block;
    width: 55px;
    border-bottom: 10px solid ${(props) => props.lineColor};
  }

  @media (max-width: 420px) {
    h1 {
      font-size: 20px;
    }

    &::after {
      border-bottom: 5px solid ${(props) => props.lineColor};
    }
  }
`;

export const Controlers = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1rem;

  @media (max-width: 360px) {
    width: 100%;
    justify-content: space-around;
    margin-top: 20px;
  }
`;
