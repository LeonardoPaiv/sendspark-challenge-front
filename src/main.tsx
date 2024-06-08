import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { Button } from '@mui/material'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Button variant='contained'>Hello world</Button>
  </React.StrictMode>,
)
