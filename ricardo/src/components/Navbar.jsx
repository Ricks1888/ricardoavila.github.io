import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './Navbar.css';
import { Link } from 'react-scroll';

export default class Navbar extends Component {
  static propTypes = {
    brand: PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }),
    links: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
      })
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      show: true,
      scrollPos: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos,
    });
  }

  render() {
    return (
      <Transition>
        <StyledNavbar className={this.state.show ? 'active' : 'hidden'}>
          <a className='brand' href={this.props.brand.to}>
            {this.props.brand.name}
          </a>
          <nav>
            <Link
              activeClass='active'
              to='compost'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Composiciones
            </Link>
            <Link
              activeClass='active'
              to='bio'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Biografia
            </Link>

            <Link
              activeClass='active'
              to='contacto'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contacto
            </Link>
          </nav>
        </StyledNavbar>
      </Transition>
    );
  }
}
const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`;
const StyledNavbar = styled.div`
  font-family: 'Cutive', serif;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  background: black;
  z-index: 1000;
  @media (max-width: 500px) {
    font-size: 12px;
  }
  @media (max-width: 360px) {
    font-size: 10px;
  }

  a,
  Link {
    cursor: pointer;
    margin-right: 1rem;
    font-weight: normal;
    color: #ffffff;
    text-decoration: none;
  }
`;
// const NavbarStyle = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100%",
//   margin: "0 auto",
//   padding: "0.5rem 0",
//   zIndex: 1000,
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "space-between",
//   alignContent: "center"
// };
