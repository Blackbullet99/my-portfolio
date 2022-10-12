import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 4rem;
position: relative;
background-color: #16161a;
color: #fffffe;
z-index: 1;
`

export const NavLink = styled(Link)`
text-decoration: none;
color: #fffffe;
`

export const ToggleMenu = styled.div`
font-size: 2rem;
cursor: pointer;
`