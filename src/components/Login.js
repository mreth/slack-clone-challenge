import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <Content>
                <SlackImg src="https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png"/>
            </Content>
        </Container>
    )
}

export default Login


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    background: white;
    padding: 100px;
    border-radius: 5px;
    box-shadow: 0 1px 3px;
`

const SlackImg = styled.img`
    height: 100px;
`