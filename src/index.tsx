import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './i18next'
import LinearProgress from '@material-ui/core/LinearProgress'

ReactDOM.render(
    <Suspense fallback={<LinearProgress color="secondary" />}>
        <App/>
    </Suspense>,
    document.getElementById('root')
)
