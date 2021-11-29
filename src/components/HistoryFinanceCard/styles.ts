import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0% {
    transform: translateX(100px)
  }
  100% {
    transform: translateX(0px);
  }
`;

export const Container = styled.li`
  background-color: ${({ theme }) => theme.colors.tertiary};
  list-style: none;
  border-radius: 10px;

  margin: 10px 0;
  padding: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  animation: ${animate} .5s;

  cursor: pointer;

  transition: all 0.3s;

  position: relative;

  &:hover {
    opacity: 0.8;
    transform: translateX(5px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;

    span {
      font-weight: 500;
      font-size: 20px;
    }
  }

  h3 {
    padding-right: 10px;
  }
`;

export const Tag = styled.div`
  background-color: ${({ color }) => color};
  width: 10px;
  height: 30px;

  position: absolute;
  left: 0;
`;
