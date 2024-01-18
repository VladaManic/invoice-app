import { FieldErrors, UseFormRegister } from 'react-hook-form'

import DatePicker from '../../FormItems/DatePicker'
import PaymentTerms from '../../FormItems/PaymentTerms'
import ProjectDescription from '../../FormItems/ProjectDescription'

import { FormDataObj, InvoiceObj } from '../../../../types/interfaces'
interface Props {
    register: UseFormRegister<FormDataObj>
    errors: FieldErrors<FormDataObj>
    invoice: InvoiceObj | undefined
}

const DateTerms = ({ register, errors, invoice }: Props) => {
    return (
        <>
            <div className="mb-[20px] flex flex-wrap justify-between">
                <DatePicker register={register} errors={errors} />
                <PaymentTerms
                    register={register}
                    errors={errors}
                    invoice={invoice}
                />
            </div>
            <ProjectDescription
                register={register}
                errors={errors}
                invoice={invoice}
            />
        </>
    )
}

export default DateTerms
