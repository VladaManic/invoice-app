import { FieldErrors, UseFormRegister } from 'react-hook-form'
import clsx from 'clsx'

import { FormDataObj, InvoiceObj } from '../../../../../types/interfaces'
interface Props {
    register: UseFormRegister<FormDataObj>
    errors: FieldErrors<FormDataObj>
    invoice: InvoiceObj | undefined
}

const ProjectDescription = ({ register, errors, invoice }: Props) => {
    let defaultDescription
    if (invoice !== undefined) {
        defaultDescription = invoice.description
    } else {
        defaultDescription = ''
    }

    return (
        <div className="mb-[32px]">
            <div className="flex justify-between text-singleGrey">
                <label
                    htmlFor="project-description"
                    className={clsx(
                        'font-spartanMedium text-xs',
                        errors.description && 'text-errorRed'
                    )}
                >
                    Project Description
                </label>
                {errors.description && (
                    <span className="block text-xs text-errorRed">
                        {errors.description.message}
                    </span>
                )}
            </div>
            <input
                type="text"
                id="project-description"
                className={clsx(
                    'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet bg-transparent pl-[15px] font-spartanBold text-xs text-defaultBlack focus:border-packmanUp focus:outline-none focus:ring-0',
                    errors.description && 'border-errorRed'
                )}
                defaultValue={defaultDescription}
                {...register('description')}
            />
        </div>
    )
}

export default ProjectDescription
