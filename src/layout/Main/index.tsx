import { Routes, Route } from 'react-router-dom'

import Home from '../../pages/Home'
import Single from '../../pages/Single'
import Page404 from '../../pages/Page404'

const Main = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/invoice/:invoiceId" element={<Single />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </>
    )
}

export default Main
