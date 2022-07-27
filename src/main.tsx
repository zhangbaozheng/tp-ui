import React from "react"
import ReactDom from 'react-dom'
import App from './view/app'
ReactDom.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>,
    document.getElementById('root')
)