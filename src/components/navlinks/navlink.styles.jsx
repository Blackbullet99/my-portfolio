import styled from 'styled-components'

import { Link } from "react-router-dom";

export const NavLinkConatiner = styled.div`
position: absolute;
right: 2rem;
top: 2.5rem;
background-color: #242629;
padding: 4rem;
padding-left: 2rem;
font-size: 1.3rem;
width: 22rem;
z-index: -1;
`

export const Top = styled.div`
display: flex;
flex-direction: column;
`

export const NavLink = styled(Link)`
margin: 1rem 0;
text-transform: uppercase;
letter-spacing: 0.1rem;
text-decoration: none;
color: #7f5af0;
`

export const Middle = styled.div`
margin: 1rem 0;
letter-spacing: 0.1rem;

h3{
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1.3rem;
}

a{
    text-decoration: none;
    color: #7f5af0;
}
`

export const Bottom = styled.div`
margin-top: 2rem;
display: flex;
justify-content: space-between;
align-items: center;
`
