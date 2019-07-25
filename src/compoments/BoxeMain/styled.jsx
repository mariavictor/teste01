import Styled from 'styled-components'

const StyledBoxMain = styled.div `
margin: 0px;
padding: 0px;
display: grid;
grid-template-columns: 25rem 70rem 25rem;
grid-template-rows: 4rem 75rem; 
max-width: 1200px;
max-height: 800px;
min-height:100vh;
background: #D7EDEC;
border: solid 2px black;

header {

grid-area: cabecalho;
}
nav {

grid-area: noticiasleft;
}

main {

grid-area: maincenter;
}

nav {

grid-area: peopleright;
}

grid-template-areas:
'cabecalho cabecalho cabecalho'
'noticiaslef  maincenter peopleright'
;
`



const StyledHeader = styled.header`
 background:#2494C9;


`
const StyledNoticiasLeft = styled.nav`
 background:#F2F3F3  ;
 

`
const StyledMainCenter = styled.main`
 background:#CDCDCD;
 

`
const StyledPeopleRight = styled.nav`
 background:#AFAFAF;
 

`