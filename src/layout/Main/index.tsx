import { Routes, Route } from 'react-router-dom'

import Home from '../../pages/Home'
import SingleInvoice from '../../pages/SingleInvoice'
import Page404 from '../../pages/Page404'

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/invoice/:invoiceId" element={<SingleInvoice />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    )
}

export default Main
