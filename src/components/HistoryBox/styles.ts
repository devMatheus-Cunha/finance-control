import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  height: 340px;

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
`;

export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

export const Legend = styled.li`
  display: flex;

  align-items: center;

  margin-bottom: 7px;
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
`;
