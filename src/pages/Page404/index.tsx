import { useEffect } from 'react'
import { useAppDispatch } from '../../state/hooks'
import { setStatus } from '../../state/theme/themeSlice'

const Page404 = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        //Reset filter status
        dispatch(setStatus(null))
    }, [])

    return <div>Page404</div>
}

export default Page404
