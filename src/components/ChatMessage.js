import React from 'react'
import styled from 'styled-components'

function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src="https://randomuser.me/api/portraits/men/57.jpg"/>
            </UserAvatar>
            <MessageContent>
                <Name>
                    Noah Douglas
                    <span>2/25/2021 4:56:22 AM</span>
                </Name>
                <Text>
                    Hey guys,,, check out this cool coding challenge!!
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;
    background: rgb(80,80,80);
    border-bottom: 1px solid rgb(50,50,50);
    color: rgb(220,220,220);

    :hover{
        background: rgb(75,75,75);
    }
`

const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 2px;
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