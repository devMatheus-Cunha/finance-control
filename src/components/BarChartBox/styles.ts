import styled from "styled-components";

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 48%;
  height: 260px;

  display: flex;

  margin: 10px 0;

  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 7px;
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;
  flex: 1;

  h2 {
    margin-bottom: 10px;
    padding-left: 16px;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;

  max-height: 180px;
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
`;

export const SideRight = styled.main`
  flex: 1;
  min-height: 150px;

  display: flex;
  justify-content: center;

  padding-top: 35px;
`;
