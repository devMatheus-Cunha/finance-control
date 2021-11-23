import styled from "styled-components";

export const Container = styled.div`
  width: 47%;
  min-height: 260px;

  margin: 10px 0;
  
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 7px;
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;

  h2 {
    margin-bottom: 10px;
    padding-left: 16px ;
  }
`;

export const SideRight = styled.main`
  flex: 1;
  height: 150px;
`;
