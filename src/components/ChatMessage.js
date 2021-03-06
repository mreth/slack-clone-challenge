import React from 'react'
import styled from 'styled-components'

function ChatMessage({ text, name, image, timestamp }) {
    return (
        <Container>
            <UserAvatar>
                <img src={image}/>
            </UserAvatar>
            <MessageContent>
                <Name>
                    {name}
                    <span>{new Date(timestamp.toDate()).toUTCString()}</span>
                </Name>
                <Text>
                    {text}
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    display: grid;
    grid-template-columns: 45px auto;
    align-items: center;
    background: rgb(220,220,220,0.22);
    border-bottom: 1px solid rgb(50,50,50);
    color: rgb(220,220,220);
    margin: 5px 20px 5px 20px;
    border-radius: 5px;

    :hover{
        background: rgb(220,220,220,0.30);
    }
`

const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 8px;

    img{
        width 100%;
    }
`

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`

const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;
    color: rgb(188,171,188);

    span{
        margin-left: 8px;
        font-weight: 400;
        font-size: 13px;
        color: rgb(188,171,188);
    }
`

const Text = styled.span`

`