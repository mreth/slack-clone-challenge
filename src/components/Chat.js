import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import db from '../firebase'
import { useParams } from 'react-router-dom'
import firebase from 'firebase'

function Chat({user}) {

    let { channelId } = useParams();
    const [ channel, setChannel ] = useState();
    const [ messages, setMessages ] = useState();

    const getMessages = () => {
        db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot)=>{
            let messages = snapshot.docs.map((doc)=>doc.data());
            setMessages(messages);
        })
    }

    const getChannel = ()=>{
        db.collection('rooms')
        .doc(channelId)
        .onSnapshot((snapshot)=>{
            setChannel(snapshot.data());
        })
    }

    const sendMessage = (text) => {
        if(channelId){
            let payload = {
                text: text,
                user: user.name,
                userImage: user.photo,
                timestamp: firebase.firestore.Timestamp.now()
            }
            db.collection('rooms').doc(channelId).collection('messages').add(payload);

            console.log(payload);
        }
    }

    useEffect(()=>{
        getChannel();
        getMessages();
    }, [channelId]);
    
    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        #{channel && channel.name}
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
                {
                    messages &&
                    messages.length > 0 &&
                    messages.map((data, index)=> (
                        <ChatMessage
                            text={data.text}
                            name={data.user}
                            image={data.userImage}
                            timestamp={data.timestamp}
                        />
                    ))
                }                
            </MessageContainer>
            <ChatInput 
                sendMessage={sendMessage}
            />
        </Container>
    )
}

export default Chat

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
    background: rgb(50,50,50);
    min-height 0;
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
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`

