import styled, { css } from "styled-components";

interface IContainerProps {
  menuIsOpen?: boolean;
}

export const Container = styled.div<IContainerProps>`
  grid-area: AS;

  background-color: ${(props) => props.theme.colors.secondary};
  border-right: 1px solid ${(props) => props.theme.colors.gray};

  padding-left: 20px;

  position: relative;

  @media (max-width: 600px) {
    width: 170px;
    padding-left: 7px;
    position: fixed;

    z-index: 1;

    border-right: 1px solid ${(props) => props.theme.colors.gray};
    height: ${({ menuIsOpen }) => (menuIsOpen ? "100vh" : "70px")};
    overflow: hidden;


    ${({ menuIsOpen }) =>
		!menuIsOpen
      && css`
        border: none;
        border-bottom: 1px solid ${(props) => props.theme.colors.gray};
      `}
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  height: 70px;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 600px) {
    display: none;
  }
`;

export const LogoImg = styled.img`
  height: 40px;
  width: 40px;

  @media (max-width: 600px) {
    height: 25px;
    width: 25px;
  }
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
