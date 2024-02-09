import packmanIcon from '../../../assets/img/packman.svg'

const Logo = () => {
    return (
        <div className="relative overflow-hidden rounded-br-2xl rounded-tr-2xl bg-packmanUp xs:h-[72px] xs:w-[72px] md:h-[80px] md:w-[80px] lg:h-24 lg:w-24">
            <div className="h-1/2"></div>
            <div className="h-1/2 rounded-tl-2xl bg-packmanDown"></div>
            <img
                src={packmanIcon}
                alt="Packman icon"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto xs:w-8 md:w-9 lg:w-10"
            />
        </div>
    )
}

export default Logo
