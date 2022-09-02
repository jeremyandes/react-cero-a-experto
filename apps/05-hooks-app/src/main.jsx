import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './01-useState/CounterApp'
import { CounterCustomHook } from './01-useState/CounterCustomHook'
import { FormCustomHook } from './02-useEffect/FormCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { HooksApp } from './HooksApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    <FocusScreen />
  </React.StrictMode>
)
