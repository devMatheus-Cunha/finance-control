import styled from "styled-components";

export const Container = styled.div`
  grid-area: CT;

  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};

  padding: 1.5rem 1.8rem;

  height: calc(100vh - 70px);

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
