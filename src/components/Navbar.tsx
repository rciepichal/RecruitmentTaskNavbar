import { Nav, Title, NavUl, NavLi } from './styles/Nav.styles';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { getCurrentPage } from '../features/navbar/navbarSlice';
import { useEffect } from 'react';
const pages: string[] = ['home', 'about', 'contact'];

export default function Navbar() {
  const { currentPage } = useSelector((state: RootState) => state.navbar);
  const dispatch = useDispatch();
  useEffect(() => {
    let page = (window.location.href.match(/[a-z]+$/gm) || '').toString();
    localStorage.setItem('currentPage', page);
  }, [currentPage]);
  return (
    <Nav>
      <Title>Sticky Navbar</Title>
      <NavUl>
        {pages.map((item) => {
          return (
            <NavLi
              key={uniqid()}
              onClick={() => dispatch(getCurrentPage(item))}
              className={currentPage === item ? 'active' : ''}
            >
              <Link to={`/${item === 'home' ? '' : item}`}>{item}</Link>
            </NavLi>
          );
        })}
      </NavUl>
    </Nav>
  );
}
