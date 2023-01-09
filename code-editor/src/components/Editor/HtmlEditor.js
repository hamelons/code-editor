import React, { useContext } from 'react'
import AceEditor from "react-ace"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/theme-solarized_dark"
import "ace-builds/src-noconflict/snippets/html"
import "ace-builds/src-noconflict/ext-language_tools"
import { EditorContext } from '../../Context/Context'

const HtmlEditor = () =>  {

    const { html, setHtml } = useContext(EditorContext)

    return (
        <AceEditor
            placeholder='Hey! Write clean code'
            mode='html'
            theme='solarized_dark'
            name='editor_html'
            value={html}
            onChange={value => setHtml(value)}
            fontSize={16}
            height={'100%'}
            width={'100%'}
            showPrintMargin={false} 
            showGutter={true}
            highlightActiveLine={true}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                tabSize: 2
            }}
        />
    )
}

export default HtmlEditor