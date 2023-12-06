import packmanIcon from '../../assets/img/packman.svg'
import moonIcon from '../../assets/img/moon.svg'
import personImg from '../../assets/img/person.png'

const Aside = () => {
    return (
        <div className="bg-asideBg flex h-screen w-24 flex-col justify-between overflow-hidden rounded-r-2xl">
            <div className="bg-packmanUp relative h-24 overflow-hidden rounded-br-2xl">
                <div className="h-1/2"></div>
                <div className="bg-packmanDown h-1/2 rounded-tl-2xl"></div>
                <img
                    src={packmanIcon}
                    alt="Packman icon"
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto w-10"
                />
            </div>
            <div>
                <button className="bg-asideBg mb-10 ml-auto mr-auto block">
                    <img src={moonIcon} alt="Moon icon" />
                </button>
                <div className="flex h-20 w-full border border-solid border-[#494E6E]">
                    <img src={personImg} alt="Person img" className="m-auto" />
                </div>
            </div>
        </div>
    )
}

export default Aside
