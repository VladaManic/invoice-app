import personImg from '../../../assets/img/person.png'

const Person = () => {
    return (
        <div className="flex border-t-[1px] border-solid border-[#494E6E] xs:w-[100px] md:h-20 lg:w-full">
            <img src={personImg} alt="Person img" className="m-auto" />
        </div>
    )
}

export default Person
