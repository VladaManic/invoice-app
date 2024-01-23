import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { setColorTheme } from '../../state/invoice/invoiceSlice'
import clsx from 'clsx'

import SunIcon from '../../components/Aside/SunIcon'
import MoonIcon from '../../components/Aside/MoonIcon'

import packmanIcon from '../../assets/img/packman.svg'
import personImg from '../../assets/img/person.png'

const Aside = () => {
    const invoiceRedux = useAppSelector((state) => state.invoice)
    const dispatch = useAppDispatch()

    //On click btn, change theme
    const onClickHandler = () => {
        dispatch(setColorTheme())
    }

    return (
        <div
            className={clsx(
                'left-0 top-0 z-[101] flex justify-between overflow-hidden xs:w-full lg:fixed lg:h-screen lg:w-[96px] lg:flex-col lg:rounded-r-2xl',
                invoiceRedux.openFormModal ? 'xs:fixed' : 'xs:absolute',
                invoiceRedux.colorTheme === 'light'
                    ? 'bg-asideBg'
                    : 'bg-asideDark'
            )}
        >
            <div className="relative overflow-hidden rounded-br-2xl rounded-tr-2xl bg-packmanUp xs:h-[72px] xs:w-[72px] md:h-[80px] md:w-[80px] lg:h-24 lg:w-24">
                <div className="h-1/2"></div>
                <div className="h-1/2 rounded-tl-2xl bg-packmanDown"></div>
                <img
                    src={packmanIcon}
                    alt="Packman icon"
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto xs:w-8 md:w-9 lg:w-10"
                />
            </div>
            <div className="flex xs:flex-row lg:flex-col">
                <button
                    id="theme-switcher"
                    className={clsx(
                        'ml-auto mr-auto block bg-asideBg lg:mb-10',
                        invoiceRedux.colorTheme === 'light'
                            ? 'bg-asideBg'
                            : 'bg-asideDark'
                    )}
                    onClick={onClickHandler}
                >
                    {invoiceRedux.colorTheme === 'dark' ? (
                        <MoonIcon />
                    ) : (
                        <SunIcon />
                    )}
                </button>
                <div className="flex border-t-[1px] border-solid border-[#494E6E] xs:w-[100px] md:h-20 lg:w-full">
                    <img src={personImg} alt="Person img" className="m-auto" />
                </div>
            </div>
        </div>
    )
}

export default Aside
