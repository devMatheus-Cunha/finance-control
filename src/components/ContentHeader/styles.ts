import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-bottom: 25px;
`;

export const TitleContainer = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.white};
  }
  &::after {
    content: "";
    display: block;
    width: 55px;
    border-bottom: 10px solid ${({ theme }) => theme.colors.warning};
  }
`;

export const Controlers = styled.div``;
