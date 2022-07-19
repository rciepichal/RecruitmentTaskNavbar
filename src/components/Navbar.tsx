import React from 'react';
import { Nav, Title, NavUl, NavLi } from './styles/Nav.styles';

const pages: string[] = ['Home', 'About', 'Contact'];

export default function Navbar() {
  return (
    <Nav>
      <Title>Sticky Navbar</Title>
      <NavUl>
        {pages.map((item) => {
          return <NavLi>{item}</NavLi>;
        })}
      </NavUl>
    </Nav>
  );
}
