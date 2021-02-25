import React from 'react'
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

function ChatInput() {
    return (
        <Container>
            <InputContainer>
                <form>
                    <input type="text" placeholder="Message #react-challenge"/>
                    <SendButton>
                        <Send/>
                    </SendButton>
                </form>
            </InputContainer>
            <EditorContainer>
                <FormatIcons>
                    <FlashIcon/>
                    <FormatBoldIcon/>
                    <FormatItalicIcon/>
                    <StrikethroughSIcon/>
                    <CodeIcon/>
                    <LinkIcon/>
                    <FormatListBulletedIcon/>
                    <FormatListNumberedIcon/>
                    <FormatIndentIncreaseIcon/>
                    <DeveloperModeIcon/>
                </FormatIcons>
                <EditorIcons>
                    <TextFormatIcon/>
                    <img src="mention-icon.png"/>
                    <InsertEmoticonIcon/>
                    <AttachFileIcon/>
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

const SendButton = styled.div`
    background: #007a5a;
    border-radius: 3px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    cursor: pointer;

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