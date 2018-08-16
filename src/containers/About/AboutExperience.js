import React from 'react'

import styled from 'styled-components'
import HighlightText from '../../components/HighlightText';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 20px;
    border: 10px solid #66ccff;
`

const Column = styled.div`

`

const Header = styled.div`
    margin-top: 50px;
`

const List = styled.div`

`

const ListItem = styled.div`

`

const Experience = (props) => {
    return(
    <Grid>
        <Column>
            <Header><HighlightText color="white">Programming Languages</HighlightText></Header>
            <List>
                <ListItem>C#</ListItem>
                <ListItem>Java</ListItem>
                <ListItem>C++</ListItem>
                <ListItem>JavaScript</ListItem>
                <ListItem>PHP</ListItem>
            </List>
            <Header><HighlightText color="white">Spoken Languages </HighlightText></Header>
            <List>
                <ListItem>English</ListItem>
                <ListItem>French</ListItem>
            </List>
        </Column>
        <Column>
            <Header><HighlightText color="white">Web Technologies</HighlightText></Header>
            <List>
                <ListItem>React.js</ListItem>
                <ListItem>Exress.js</ListItem>
                <ListItem>Node.js</ListItem>
                <ListItem>ASP.NET Core 2</ListItem>
                <ListItem></ListItem>
            </List>
            <Header><HighlightText color="white">Databases</HighlightText></Header>
            <List>
                <ListItem>MongoDB</ListItem>
                <ListItem>SQL Server</ListItem>
                <ListItem>MySQL</ListItem>
                <ListItem>PostgreSQL</ListItem>
                <ListItem>Oracle</ListItem>
            </List>
        </Column>
        <Column>
        <Header><HighlightText color="white">Operating Systems</HighlightText></Header>
            <List>
                <ListItem>Windows</ListItem>
                <ListItem>macOS</ListItem>
                <ListItem>Linux/UnixL</ListItem>
            </List>
        </Column>
    </Grid>
    )
}

export default Experience;