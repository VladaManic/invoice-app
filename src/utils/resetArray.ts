const getDefaultTheme = (arr: number[]) => {
    const finalArr = []
    for (let i = 0; i < arr.length; i++) {
        finalArr.push(i)
    }
    return finalArr
}

export default getDefaultTheme
