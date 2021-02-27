import React, { useState } from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send'
import FlashOnOutlinedIcon from '@material-ui/icons/FlashOnOutlined';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatIndentIncreaseIcon from '@material-ui/icons/FormatIndentIncrease';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import AttachFileIcon from '@material-ui/icons/AttachFile';

function ChatInput({ sendMessage }) {

    const [input, setInput] = useState("");


    const send = (e) => {
        e.preventDefault();
        if(!input) return;
        sendMessage(input);
        setInput("");
    }

    return (
        <Container>
            <InputContainer>
                <form>
                    <input 
                        onChange={(e)=>setInput(e.target.value)}
                        type="text" 
                        value={input}
                        placeholder="Message here..."/>
                    <SendButton 
                        type="submit"
                        onClick={send}>
                        <Send/>
                    </SendButton>
                </form>
            </InputContainer>
            <EditorContainer >
                <FormatIcons>
                    <FlashIcon transform="scale(.75)"/>
                    <FormatBoldIcon transform="scale(.75)"/>
                    <FormatItalicIcon transform="scale(.75)"/>
                    <StrikethroughSIcon transform="scale(.75)"/>
                    <CodeIcon transform="scale(.75)"/>
                    <LinkIcon transform="scale(.75)"/>
                    <FormatListBulletedIcon transform="scale(.75)"/>
                    <FormatListNumberedIcon transform="scale(.75)"/>
                    <FormatIndentIncreaseIcon transform="scale(.75)"/>
                    <DeveloperModeIcon transform="scale(.75)"/>
                </FormatIcons>
                <EditorIcons>
                    <TextFormatIcon transform="scale(.75)"/>
                    <img src="https://static.thenounproject.com/png/964445-200.png"/>
                    <InsertEmoticonIcon transform="scale(.75)"/>
                    <AttachFileIcon transform="scale(.75)"/>
                </EditorIcons>
            </EditorContainer>
        </Container>
    )
}

export default ChatInput


const Container = styled.div`
    padding: 10px 20px 10px 20px;
    
`

const InputContainer = styled.div`
    border-radius: 4px;
    
    form{
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;
        background: lightgray;
        border-radius: 4px;
        border-bottom: 1px solid rgb(180,180,180);

        input{
            flex: 1;
            border: none;
            font-size: 13px;
            background: transparent;
        }

        input:focus{
            outline: none;
        }
    }
`

const SendButton = styled.button`
    background: #007a5a;
    border-radius: 3px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    cursor: pointer;
    border: none;

    .MuiSvgIcon-root{
        width: 18px;
    }

    :hover{
        background: #148567;
    }
`

const Send = styled(SendIcon)`
    color: #D9D9D9;
`

const EditorContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(180,180,180);
    border-radius: 4px;
    height: 30px;
    color: #350D36;
    padding-left: 4px;
    padding-right: 4px;
`

const FormatIcons = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
`

const FlashIcon = styled(FlashOnOutlinedIcon)`
    border-right: 1px solid rgb(140,140,140);
`

const EditorIcons = styled.div`
    display: flex;
    align-items: center;
    width: 120px;
    justify-content: space-between;

    img{
        width: 40px;
        height: 40px;
    }
`