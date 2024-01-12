import { useAppSelector } from '../../state/hooks'
import clsx from 'clsx'

import packmanIcon from '../../assets/img/packman.svg'
import moonIcon from '../../assets/img/moon.svg'
import personImg from '../../assets/img/person.png'

const Aside = () => {
    const invoiceRedux = useAppSelector((state) => state.invoice)

    return (
        <div
            className={clsx(
                'left-0 top-0 z-[101] flex justify-between overflow-hidden bg-asideBg xs:w-full lg:fixed lg:h-screen lg:w-[96px] lg:flex-col lg:rounded-r-2xl',
                invoiceRedux.openFormModal ? 'xs:fixed' : 'xs:absolute'
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
                <button className="ml-auto mr-auto block bg-asideBg lg:mb-10">
                    <img src={moonIcon} alt="Moon icon" />
                </button>
                <div className="flex border border-solid border-[#494E6E] xs:w-[100px] md:h-20 lg:w-full">
                    <img src={personImg} alt="Person img" className="m-auto" />
                </div>
            </div>
        </div>
    )
}

export default Aside
