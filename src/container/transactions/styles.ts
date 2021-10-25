import styled from "styled-components";

type PropsButton = {
  recurrent?: boolean;
  eventual?: boolean;
};

export const Container = styled.div``;

export const Content = styled.div``;

export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;

  margin-bottom: 30px;
`;

export const Button = styled.button<PropsButton>`
  font-size: 18px;
  font-weight: 500;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  &::after {
    content: "";
    display: block;
    width: 55px;
    margin: 0 auto;
    border-bottom: 10px solid ${(props) =>
		(props.eventual
			? props.theme.colors.warning
			: props.theme.colors.success)};
  }
`;
