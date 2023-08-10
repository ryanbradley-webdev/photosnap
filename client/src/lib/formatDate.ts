export const formatDate = (dateStr: string) => {
    const [month, day, year] = dateStr.split('-')

    const formalMonth = parseMonth(month)

    const formalDay = parseDay(day)

    return formalMonth + ' ' + formalDay + ' ' + year
}

const parseMonth = (monthNum: string) => {
    switch (monthNum) {
        case '1':
            return 'January'

        case '2':
            return 'February'

        case '3':
            return 'March'

        case '4':
            return 'April'

        case '5':
            return 'May'

        case '6':
            return 'June'

        case '7':
            return 'July'

        case '8':
            return 'August'

        case '9':
            return 'September'

        case '10':
            return 'October'

        case '11':
            return 'November'

        case '12':
            return 'December'

        default:
            return ''
    }
}

const parseDay = (dayNum: string) => {
    const lastDigit = dayNum.split('')[dayNum.length - 1]

    switch (lastDigit) {
        case '1':
            return dayNum === '11' ? dayNum + 'th' : dayNum + 'st'

        case '2':
            return dayNum + 'nd'

        case '3':
            return dayNum + 'rd'

        default:
            return dayNum + 'th'
    }
}