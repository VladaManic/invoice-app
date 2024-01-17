import { FieldErrors, UseFormRegister } from 'react-hook-form'
import clsx from 'clsx'

import { FormDataObj, InvoiceObj } from '../../../../types/interfaces'
interface Props {
    register: UseFormRegister<FormDataObj>
    errors: FieldErrors<FormDataObj>
    invoice: InvoiceObj | undefined
}

const ClientFields = ({ register, errors, invoice }: Props) => {
    let defaultName,
        defaultEmail,
        defaultStreet,
        defaultCity,
        defaultPostcode,
        defaultCountry
    if (invoice !== undefined) {
        defaultName = invoice.clientName
        defaultEmail = invoice.clientEmail
        defaultStreet = invoice.clientAddress.street
        defaultCity = invoice.clientAddress.city
        defaultPostcode = invoice.clientAddress.postCode
        defaultCountry = invoice.clientAddress.country
    } else {
        defaultName = ''
        defaultEmail = ''
        defaultStreet = ''
        defaultCity = ''
        defaultPostcode = ''
        defaultCountry = ''
    }

    return (
        <>
            <h3 className="mb-[12px] font-spartanBold text-xs text-packmanUp">
                Bill To
            </h3>
            <div className="mb-[12px]">
                <div className="flex justify-between text-singleGrey">
                    <label
                        htmlFor="clients-name"
                        className={clsx(
                            'font-spartanMedium text-xs',
                            errors.clientName && 'text-errorRed'
                        )}
                    >
                        Client's Name
                    </label>
                    {errors.clientName && (
                        <span className="block text-xs text-errorRed">
                            {errors.clientName.message}
                        </span>
                    )}
                </div>
                <input
                    type="text"
                    id="clients-name"
                    className={clsx(
                        'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack focus:border-packmanUp focus:outline-none focus:ring-0',
                        errors.clientName && 'border-errorRed'
                    )}
                    defaultValue={defaultName}
                    {...register('clientName')}
                />
            </div>

            <div className="mb-[12px]">
                <div className="flex justify-between text-singleGrey">
                    <label
                        htmlFor="clients-email"
                        className={clsx(
                            'font-spartanMedium text-xs',
                            errors.clientEmail && 'text-errorRed'
                        )}
                    >
                        Client's Email
                    </label>
                    {errors.clientEmail && (
                        <span className="block text-xs text-errorRed">
                            {errors.clientEmail.message}
                        </span>
                    )}
                </div>
                <input
                    type="email"
                    id="clients-email"
                    className={clsx(
                        'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack focus:border-packmanUp focus:outline-none focus:ring-0',
                        errors.clientEmail && 'border-errorRed'
                    )}
                    defaultValue={defaultEmail}
                    {...register('clientEmail')}
                />
            </div>

            <div className="mb-[12px]">
                <div className="flex justify-between text-singleGrey">
                    <label
                        htmlFor="street-address-from"
                        className={clsx(
                            'font-spartanMedium text-xs',
                            errors.clientAddress && 'text-errorRed'
                        )}
                    >
                        Street Address
                    </label>
                    {errors.clientAddress && (
                        <span className="block text-xs text-errorRed">
                            {errors.clientAddress.message}
                        </span>
                    )}
                </div>
                <input
                    type="text"
                    id="street-address-from"
                    className={clsx(
                        'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet bg-transparent pl-[15px] font-spartanBold text-xs text-defaultBlack focus:border-packmanUp focus:outline-none focus:ring-0',
                        errors.clientAddress && 'border-errorRed'
                    )}
                    defaultValue={defaultStreet}
                    {...register('clientAddress')}
                />
            </div>

            <div className="mb-[35px] flex flex-wrap justify-between">
                <div className="max-[525px]:mb-[12px] xs:w-[46%] min-[525px]:w-[30%]">
                    <div className="flex justify-between text-singleGrey">
                        <label
                            htmlFor="city-from"
                            className={clsx(
                                'font-spartanMedium text-xs',
                                errors.clientCity && 'text-errorRed'
                            )}
                        >
                            City
                        </label>
                        {errors.clientCity && (
                            <span className="block hidden text-xs text-errorRed min-[635px]:inline">
                                {errors.clientCity.message}
                            </span>
                        )}
                    </div>
                    <input
                        type="text"
                        id="city-from"
                        className={clsx(
                            'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet bg-transparent pl-[15px] font-spartanBold text-xs text-defaultBlack focus:border-packmanUp focus:outline-none focus:ring-0',
                            errors.clientCity && 'border-errorRed'
                        )}
                        defaultValue={defaultCity}
                        {...register('clientCity')}
                    />
                </div>

                <div className="max-[525px]:mb-[12px] xs:w-[46%] min-[525px]:w-[30%]">
                    <div className="flex justify-between text-singleGrey">
                        <label
                            htmlFor="post-code-from"
                            className={clsx(
                                'font-spartanMedium text-xs',
                                errors.clientPostcode && 'text-errorRed'
                            )}
                        >
                            Post Code
                        </label>
                        {errors.clientPostcode && (
                            <span className="block hidden text-xs text-errorRed min-[635px]:inline">
                                {errors.clientPostcode.message}
                            </span>
                        )}
                    </div>
                    <input
                        type="text"
                        id="post-code-from"
                        className={clsx(
                            'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet bg-transparent pl-[15px] font-spartanBold text-xs text-defaultBlack focus:border-packmanUp focus:outline-none focus:ring-0',
                            errors.clientPostcode && 'border-errorRed'
                        )}
                        defaultValue={defaultPostcode}
                        {...register('clientPostcode')}
                    />
                </div>

                <div className="xs:w-[100%] min-[525px]:w-[30%]">
                    <div className="flex justify-between text-singleGrey">
                        <label
                            htmlFor="country-from"
                            className={clsx(
                                'font-spartanMedium text-xs',
                                errors.clientCountry && 'text-errorRed'
                            )}
                        >
                            Country
                        </label>
                        {errors.clientCountry && (
                            <span className="block hidden text-xs text-errorRed min-[635px]:inline">
                                {errors.clientCountry.message}
                            </span>
                        )}
                    </div>
                    <input
                        type="text"
                        id="country-from"
                        className={clsx(
                            'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet bg-transparent pl-[15px] font-spartanBold text-xs text-defaultBlack focus:border-packmanUp focus:outline-none focus:ring-0',
                            errors.clientCountry && 'border-errorRed'
                        )}
                        defaultValue={defaultCountry}
                        {...register('clientCountry')}
                    />
                </div>
            </div>
        </>
    )
}

export default ClientFields
