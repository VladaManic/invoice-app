/* eslint-disable @typescript-eslint/no-explicit-any */
import { monthNames } from '../constants/monthNames'

const datepickerSettup = () => {
    $(function () {
        // eslint-disable-next-line no-extra-semi
        ;($('#datepicker') as any).datepicker({
            duration: 'fast',
            monthNames: monthNames, //Month name with first 3 letters
            //On clicking exact date
            onSelect: function () {
                const dateObject = ($(this) as any).datepicker('getDate') //Getting date object
                const formattedDate = `${('0' + dateObject.getDate()).slice(
                    -2
                )} ${
                    monthNames[dateObject.getMonth()]
                } ${dateObject.getFullYear()}`
                $('#datapicker-val').val(formattedDate) //Setting choosen date to input field to display
            },
        })
    })
}

export default datepickerSettup
