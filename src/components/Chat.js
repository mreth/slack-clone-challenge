import React from 'react'
import styled from 'styled-components'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

function Chat() {
    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        #react-challenge
                        <StarOutlineIcon transform="scale(.75)"/>
                    </ChannelName>
                    <ChannelInfo>
                        Add a topic
                    </ChannelInfo>          
                </Channel>
                <ChannelDetails>
                    <Members>             
                        <UserImage>
                            <img src="https://i.imgur.com/6VBx3io.png"/>
                        </UserImage>
                        <UserCount>
                            1
                        </UserCount>
                    </Members>
                    <PersonAddIcon/>
                    <InfoOutlinedIcon/>                
                </ChannelDetails>
            </Header>
            <MessageContainer>
                <ChatMessage/>
            </MessageContainer>
            <ChatInput/>
        </Container>
    )
}

export default Chat

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
    background: rgb(50,50,50);
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #646464;
    padding: 0px 20px 0px 20px;
    color: #b5b5b5;
    background: #202124;
`

const Channel = styled.div`
    font-weight: 700;    
`

const ChannelName = styled.div`
    display: flex;
    align-items: center;
`

const ChannelInfo = styled.div`
    font-weight: 400;
    font-size: 13px;
`

const ChannelDetails = styled.div`
    font-size: 13px;
    display: flex;
    width: 140px;
    justify-content: space-between;
    align-items: center;
`

const Members = styled.div`
    display: flex;
    align-items: center;
`

const UserImage = styled.div`
    width: 28px;
    height: 28px;

    img{
        width: 100%;
        border-radius: 3px;
    }
`

const UserCount = styled.div`
    padding-left: 7px;
`

const MessageContainer = styled.div`

`

