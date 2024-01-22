import reformatMonth from './reformatMonth'

const reformatDate = (date: string) => {
    const year = date.substr(date.length - 4)
    const month = reformatMonth(date.slice(3, 6))
    const day = date.slice(0, 2)
    const newDate = year + '-' + month + '-' + day
    return newDate
}

export default reformatDate
