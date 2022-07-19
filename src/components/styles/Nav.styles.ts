import styled from 'styled-components';

const color = {
  primary: '#0078aa',
  secondary: '#3ab4f2',
  accent: '#f2df3a',
  text: '#f6f6f6',
};
const menuTransition = 'all 0.2s linear';

export const Nav = styled.nav`
  width: 100%;
  height: 6rem;
  position: sticky;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column wrap;
  top: 0;
  background-color: ${color.primary};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 11px;
  z-index: 5;
  @media (min-width: 768px) {
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 992px) {
    height: 8rem;
  }
`;
export const Title = styled.h2`
  color: ${color.accent};
  font-family: 'Courier';
  @media (min-width: 768px) {
    margin-left: 3rem;
  }
  @media (min-width: 992px) {
    font-size: 2rem;
  }
`;
export const NavUl = styled.ul`
  list-style: none;
  display: flex;
  @media (min-width: 992px) {
    margin-right: 2rem;
    font-size: 1.2rem;
  }
`;
export const NavLi = styled.li`
  user-select: none;
  margin: 0 1rem;
  position: relative;
  text-transform: capitalize;
  transition: ${menuTransition};
  a {
    color: ${color.text};
    text-decoration: none;
  }
  &.active {
    transform: scale(1.1);
    a {
      color: ${color.accent};
    }
    &:hover {
      &::before {
        width: 0;
      }
    }
  }
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: ${color.text};
    transition: ${menuTransition};
  }
  &:hover {
    transform: scale(1.1);
    &::before {
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    margin: 0 2rem;
  }
`;
