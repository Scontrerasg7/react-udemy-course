// import React from 'react'
import ReactDOM from 'react-dom/client'

// import { HooksApp } from './HooksApp'
// import { CounterApp } from './useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // {/* <HooksApp /> */}
    // {/* <HooksApp /> */}
    // {/* <CounterApp /> */}
    // {/* <CounterWithCustomHook/> */}
    // <SimpleForm/>
    <FormWithCustomHook/>
  // </React.StrictMode>,
)
