import packmanIcon from '../../assets/img/packman.svg'
import moonIcon from '../../assets/img/moon.svg'
import personImg from '../../assets/img/person.png'

const Aside = () => {
    return (
        <div className="xs:absolute xs:w-full left-0 top-0 z-[101] flex justify-between overflow-hidden bg-asideBg lg:fixed lg:h-screen lg:w-[96px] lg:flex-col lg:rounded-r-2xl">
            <div className="xs:h-[72px] xs:w-[72px] relative overflow-hidden rounded-br-2xl rounded-tr-2xl bg-packmanUp md:h-[80px] md:w-[80px] lg:h-24 lg:w-24">
                <div className="h-1/2"></div>
                <div className="h-1/2 rounded-tl-2xl bg-packmanDown"></div>
                <img
                    src={packmanIcon}
                    alt="Packman icon"
                    className="xs:w-8 absolute bottom-0 left-0 right-0 top-0 m-auto md:w-9 lg:w-10"
                />
            </div>
            <div className="xs:flex-row flex lg:flex-col">
                <button className="ml-auto mr-auto block bg-asideBg lg:mb-10">
                    <img src={moonIcon} alt="Moon icon" />
                </button>
                <div className="xs:w-[100px] flex border border-solid border-[#494E6E] md:h-20 lg:w-full">
                    <img src={personImg} alt="Person img" className="m-auto" />
                </div>
            </div>
        </div>
    )
}

export default Aside
