import React from 'react';
import { Nav, Title, NavUl, NavLi } from './styles/Nav.styles';
import uniqid from 'uniqid';
const pages: string[] = ['home', 'about', 'contact'];

export default function Navbar() {
  return (
    <Nav>
      <Title>Sticky Navbar</Title>
      <NavUl>
        {pages.map((item) => {
          return <NavLi key={uniqid()}>{item}</NavLi>;
        })}
      </NavUl>
    </Nav>
  );
}
