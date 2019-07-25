import React from 'react'
import { StyledBoxMain, StyledHeader, StyledPeopleRight, StyledMainCenter ,StyledNoticiasLeft } from 'styled'


const BoxMain = props => <StyledBoxMain {...props}>{props.children} </StyledBoxMain>
const Header =  ({ children }) => <StyledHeader>{children}</StyledHeader>
const PeopleRight =  ({ children }) => <StyledPeopleRight>{children}</StyledPeopleRight>
const MainCenter =  ({ children }) => <StyledMainCenter>{children}</StyledMainCenter>
const NoticiasLeft =  ({ children }) => <StyledNoticiasLeft>{children}</StyledNoticiasLeft>


export {BoxMain, Header, PeopleRight, MainCenter ,NoticiasLeft}