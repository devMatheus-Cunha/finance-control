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

  display: flex;

  margin: 10px 0;

  animation: ${animate} .5s;


  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 7px;

  @media (max-width: 1180px) {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: auto;
  }
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;
  flex: 1;


  h2 {
    margin-bottom: 10px;
    padding-left: 16px;
  }

  @media (max-width: 1180px) {
    padding: 30px 7px;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;

  max-height: 170px;
  padding: 5px 15px 5px 5px;

  align-self: flex-end;

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

  @media (max-width: 1180px) {
    padding: 7px 0px;
    display: flex;

    height: auto;
  }
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;

  padding-left: 16px;

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

  @media (max-width: 1180px) {
    > div {
      width: 38px;
      height: 38px;
      font-size: 13px;
      line-height: 38px;
    }
  }
`;

export const SideRight = styled.main`
  flex: 1;
  min-height: 150px;

  display: flex;
  justify-content: center;

  padding-top: 35px;
`;
