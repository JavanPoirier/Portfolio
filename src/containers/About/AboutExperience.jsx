import React from 'react'

import styled from 'styled-components'
import HighlightText from '../../components/HighlightText';
import Tag from '../../components/Tag';

const Container = styled.div`
    position: relative;
    display: flex;
    margin-top: 100px;
    border: 15px solid #66ccff;
    justify-content: space-around;
    font-size: 80%;

    @media only screen and (min-width: 800px) {
        font-size: 90%;
    }

    @media only screen and (min-width: 1200px) {
        margin-top: 100px;
        font-size: 100%;
    }
`

const ContainerTitle = styled.div`
    width: 100%;
`

const Wrapper = styled.div`
    width: max-content;
    margin: 25px;
    text-align: center;
`

const Header = styled.div`
    font-size: 1.25em;
    text-transform: uppercase;
`

const TagContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: -50px;

    @media screen and (min-width: 800px){
        right: 70%;
    }
`

const List = styled.div`
`

const Text = styled.div`
    font-size: 28px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #66ccff;
    color: #090909;
`

const Wrappers = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`

const ListItem = (props) => {
    return (
        <HighlightText color="#66ccff" display="table" size="1em" margin="5px auto">{props.children}</HighlightText>
    )
}

const Experience = (props) => {
    return (
        <Container>
            <TagContainer>
                <Tag size={42} color='#66ccff'>
                    <Text>Skills</Text>
                </Tag>
            </TagContainer>
            <Wrappers>
                <Wrapper>
                    <Header>Languages_</Header>
                    <List>
                        <ListItem>JavaScript</ListItem>
                        <ListItem>TypeScript</ListItem>
                        <ListItem>Java</ListItem>
                        <ListItem>C#</ListItem>
                    </List>
                </Wrapper>
                <Wrapper>
                    <Header>Technologies_</Header>
                    <List>
                        <ListItem>React.js</ListItem>
                        <ListItem>Express.js</ListItem>
                        <ListItem>Node.js</ListItem>
                        <ListItem>React Native</ListItem>
                    </List>
                </Wrapper>
                <Wrapper>
                    <Header>Libraries_</Header>
                    <List>
                        <ListItem>Redux</ListItem>
                        <ListItem>Twilio</ListItem>
                        <ListItem>Three.js</ListItem>
                        <ListItem>Arduino</ListItem>
                    </List>
                </Wrapper>
            </Wrappers>
        </Container>
    )
}

export default Experience;