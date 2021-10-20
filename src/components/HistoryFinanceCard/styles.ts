import styled from "styled-components";

export const Container = styled.li`
  background-color: ${({ color }) => color};
  list-style: none;
  border-radius: 5px;

  margin: 10px 0;
  padding: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  transition: all 0.3s;

  position: relative;

  &:hover {
    opacity: 0.8;
    transform: translateX(5px);
  }

  > div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
     padding-left: 10px;
  }

  h3{
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
