import React, { useState } from 'react';
import HtmlEditor from '../Editor/HtmlEditor';
import CssEditor from '../Editor/CssEditor';
import JsEditor from '../Editor/JsEditor';
import { BsCode } from 'react-icons/bs'
import './CodeBar.css';


const CodeBar = () => {

    const [ activeTab, setActiveTab ] = useState('html')

    return (
        <div className='codebar'>
            <nav className='tab'>
                <BsCode className='logo__icon'/>
                <button
                    onClick={() => setActiveTab('html')}
                    className={`${'btn'} ${activeTab === 'html' ? 'activeTab' : ''}`}
                >
                    index.html
                </button>
                <button
                     onClick={() => setActiveTab('css')}
                     className={`${'btn'} ${activeTab === 'css' ? 'activeTab' : ''}`}
                >
                    style.css
                </button>
                <button
                    onClick={() => setActiveTab('js')}
                    className={`${'btn'} ${activeTab === 'js' ? 'activeTab' : ''}`}
                >
                    script.js
                </button>
            </nav>
            <div className='editor'>
                { activeTab === 'html' ? <HtmlEditor /> : null }
                { activeTab === 'css' ? <CssEditor /> : null }
                { activeTab === 'js' ? <JsEditor /> : null }
            </div>
        </div>
    )
}

export default CodeBar