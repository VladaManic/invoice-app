const stringGenerator = (len: number, type: string) => {
    let charset
    if (type === 'letters') {
        charset = 'ABCDEFGHIJKLMNOPRSTUVWXYZ'
    } else {
        charset = '1234567890'
    }
    let text = ''
    for (let i = 0; i < len; i++)
        text += charset.charAt(Math.floor(Math.random() * charset.length))
    return text
}

export default stringGenerator
