/* eslint-disable @typescript-eslint/no-explicit-any */
import { monthNames } from '../constants/monthNames'

const datepickerSettup = () => {
    $(function () {
        // eslint-disable-next-line no-extra-semi
        ;($('#datepicker') as any).datepicker({
            duration: 'fast',
            monthNames: monthNames, //month name with first 3 letters
            //On clicking exact date
            onSelect: function () {
                const dateObject = ($(this) as any).datepicker('getDate')
                const formattedDate = `${('0' + dateObject.getDate()).slice(
                    -2
                )} ${
                    monthNames[dateObject.getMonth()]
                } ${dateObject.getFullYear()}`
                $('#datapicker-val').val(formattedDate)
            },
        })
    })
}

export default datepickerSettup
