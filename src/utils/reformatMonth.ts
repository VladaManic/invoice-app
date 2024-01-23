const reformatMonth = (month: string) => {
    let newMonth
    switch (month) {
        case 'Jan':
            newMonth = '01'
            break
        case 'Feb':
            newMonth = '02'
            break
        case 'Mar':
            newMonth = '03'
            break
        case 'Apr':
            newMonth = '04'
            break
        case 'May':
            newMonth = '05'
            break
        case 'Jun':
            newMonth = '06'
            break
        case 'Jul':
            newMonth = '07'
            break
        case 'aug':
            newMonth = '08'
            break
        case 'Sep':
            newMonth = '09'
            break
        case 'Oct':
            newMonth = '10'
            break
        case 'Nov':
            newMonth = '11'
            break
        case 'Dec':
            newMonth = '12'
            break
    }
    return newMonth
}

export default reformatMonth
