// import { useEffect } from 'react'
// import axios from 'axios'

import Aside from './layout/Aside'
import Main from './layout/Main'

import './App.css'

function App() {
    // const fetchData = () => {
    //     axios
    //         .get('http://localhost:3004/invoics')
    //         .then((res) => {
    //             console.log(res.data)

    //         })
    //         .catch(function (error) {
    //             console.log(error)
    //         })
    // }
    // useEffect(() => {
    //     fetchData()
    // }, [])

    return (
        <div id="app-wrap">
            <Aside />
            <Main />
        </div>
    )
}

export default App
