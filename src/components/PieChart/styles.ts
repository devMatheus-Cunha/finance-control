import styled, { keyframes } from "styled-components";

interface ILegendProps {
  color: string;
}

const animate = keyframes`
  0% {
    transform: translateX(100px)
  }
  100% {
    transform: translateX(0px);
  }
`;

export const Container = styled.div`
  width: 48%;
  height: 260px;

  margin: 10px 0;

  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 7px;

  animation: ${animate} .5s;

  display: flex;

  @media (max-width: 770px) {
    display: flex;
    width: 100%;
  }
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2 {
    margin-bottom: 20px;
  }

  @media (max-width: 1345px) {
    padding: 0 15px 5px;
    margin-bottom: 7px;

    h2 {
      margin-top: 15px;
      margin-bottom: 7px;
    }
  }

  @media (max-width: 420px) {
    padding: 15px;
    margin-bottom: 7px;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;

  max-height: 180px;
  padding: 5px 15px 5px 5px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }

  @media (max-width: 1345px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;

  margin-bottom: 7px;
  font-size: 14px;

  > div {
    background-color: ${({ color }) => color};

    width: 42px;
    height: 42px;
    border-radius: 7px;

    font-size: 14.5px;
    text-align: center;
    line-height: 42px;
  }

  > span {
    margin-left: 5px;
  }

  @media (max-width: 1345px) {
    font-size: 14px;
    margin: 3px 0;

    > div {
      width: 35px;
      height: 35px;
      line-height: 35px;
    }

    > span {
      margin-left: 7px;
    }
  }
`;

export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;

  @media (max-width: 1345px) {
    height: auto;
  }
`;
