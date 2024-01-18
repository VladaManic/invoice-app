import { FieldErrors, UseFormRegister } from 'react-hook-form'
import clsx from 'clsx'

import { FormDataObj, InvoiceObj } from '../../../../types/interfaces'
interface Props {
    register: UseFormRegister<FormDataObj>
    errors: FieldErrors<FormDataObj>
    invoice: InvoiceObj | undefined
    colorTheme: string
}

const ProjectDescription = ({
    register,
    errors,
    invoice,
    colorTheme,
}: Props) => {
    let defaultDescription
    if (invoice !== undefined) {
        defaultDescription = invoice.description
    } else {
        defaultDescription = ''
    }

    return (
        <div className="mb-[32px]">
            <div className="flex justify-between">
                <label
                    htmlFor="project-description"
                    className={clsx(
                        'font-spartanMedium text-xs',
                        colorTheme === 'light'
                            ? errors.description
                                ? 'text-errorRed'
                                : 'text-singleGrey'
                            : errors.description
                              ? 'text-errorRed'
                              : 'text-checkboxViolet'
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
                    'h-[48px] w-full rounded-[5px] border-[1px] border-solid pl-[15px] font-spartanBold text-xs focus:border-packmanUp focus:outline-none focus:ring-0',
                    colorTheme === 'light'
                        ? errors.description
                            ? 'border-errorRed bg-transparent text-defaultBlack'
                            : 'border-checkboxViolet bg-transparent text-defaultBlack'
                        : errors.description
                          ? 'border-errorRed bg-editDark text-defaultWhite'
                          : 'border-editDark bg-editDark text-defaultWhite'
                )}
                defaultValue={defaultDescription}
                {...register('description')}
            />
        </div>
    )
}

export default ProjectDescription
