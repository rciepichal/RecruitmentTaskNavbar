import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 6rem;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  top: 0;
  background-color: #0078aa;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export const Title = styled.h2`
  color: #f2df3a;
  font-family: 'Courier';
  margin-left: 2rem;
`;
export const NavUl = styled.ul`
  list-style: none;
  display: flex;
`;
export const NavLi = styled.li`
  color: #f6f6f6;
  margin: 0 2rem;
`;
