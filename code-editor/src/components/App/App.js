import React from "react";
import CodeBar from "../CodeBar/CodeBar";
import { EditorProvider } from "../../Context/Context";
import Header from "../Header/Header";
import Preview from "../Preview/Preview";
import './App.css'

function App() {
    return (
        <EditorProvider>
            <CodeBar />
            <div className='main'>
                <Header />
                <Preview />
            </div>
        </EditorProvider>
    )
}

export default App;
