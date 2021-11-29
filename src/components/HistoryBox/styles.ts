import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0% {
    transform: translateY(100px)
  }
  100% {
    transform: translateX(0px);
  }
`;

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  height: 340px;

  animation: ${animate} .5s;

  border-radius: 7px;
  margin: 10px 0;

  padding: 30px 20px;
`;

export const ChartContainer = styled.div`
  flex: 1;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > h2 {
    margin-bottom: 20px;
    padding-left: 4px;
  }

  @media (max-width: 1180px) {
    flex-direction: column;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;
`;

export const Legend = styled.li`
  display: flex;

  align-items: center;

  margin-bottom: 7px;
  margin-left: 7px;
  font-size: 14px;

  > div {
    background-color: ${({ color }) => color};

    width: 38px;
    height: 38px;
    border-radius: 7px;

    font-size: 14px;
    text-align: center;
    line-height: 38px;
  }

  > span {
    margin-left: 5px;
  }

  @media (max-width: 1180px) {
    margin-left: 2.6px;
    margin-right: 10px;
    > div {
      width: 30px;
      height: 30px;
    }
  }
`;
