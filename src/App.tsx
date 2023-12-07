import Aside from './layout/Aside'
import Main from './layout/Main'

import './App.css'

function App() {
    return (
        <div id="app-wrap" className="flex">
            <Aside />
            <Main />
        </div>
    )
}

export default App
