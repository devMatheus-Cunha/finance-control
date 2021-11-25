import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;

  background-color: ${(props) => props.theme.colors.secondary};
  border-right: 1px solid ${(props) => props.theme.colors.gray};

  padding-left: 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  height: 70px;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
`;

export const LogoImg = styled.img`
  height: 40px;
  width: 40px;
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const MenuItemLink = styled.a`
  color: ${(props) => props.theme.colors.info};
  text-decoration: none;

  display: flex;
  align-items: center;
  gap: 5px;

  transition: opacity 0.3s;
  margin: 7px 0;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 18px;
  }
`;

export const MenuItemButton = styled.button`
  color: ${({ theme }) => theme.colors.info};
  background-color: transparent;

  text-decoration: none;
  border: none;

  display: flex;
  align-items: center;
  gap: 5px;

  transition: opacity 0.3s;
  margin: 7px 0;

  font-size: 16px;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 18px;
  }
`;
