import React from 'react'
import styled from 'styled-components'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

function Chat() {
    return (
        <Container>
            <Header>
                <Main>
                    <Channel>
                        # testchannel
                        <StarOutlineIcon transform="scale(.75)"/>
                    </Channel>
                    <Topic>
                        Add a topic
                    </Topic>          
                </Main>
                <Icons>
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
                </Icons>
            </Header>
        </Container>
    )
}

export default Chat

const Container = styled.div`
    background: #4f4f4f;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    border-bottom: 1px solid #646464;
    padding: 0px 16px 0px 20px;
    font-weight: 700;
    font-size: 13px;
    color: #b5b5b5;
    background: #202124;
`

const Main = styled.div`
    
`

const Channel = styled.div`
    display: flex;
    align-items: center;
`

const Topic = styled.div`
    font-weight: 400;
`

const Icons = styled.div`
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