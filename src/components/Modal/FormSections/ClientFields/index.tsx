import { FieldErrors, UseFormRegister } from 'react-hook-form'
import clsx from 'clsx'

import { FormDataObj, InvoiceObj } from '../../../../types/interfaces'
interface Props {
    register: UseFormRegister<FormDataObj>
    errors: FieldErrors<FormDataObj>
    invoice: InvoiceObj | undefined
    colorTheme: string
}

const ClientFields = ({ register, errors, invoice, colorTheme }: Props) => {
    let defaultName,
        defaultEmail,
        defaultStreet,
        defaultCity,
        defaultPostcode,
        defaultCountry
    //Edit form values
    if (invoice !== undefined) {
        defaultName = invoice.clientName
        defaultEmail = invoice.clientEmail
        defaultStreet = invoice.clientAddress.street
        defaultCity = invoice.clientAddress.city
        defaultPostcode = invoice.clientAddress.postCode
        defaultCountry = invoice.clientAddress.country
        //Add form values
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
                <div className="flex justify-between">
                    <label
                        htmlFor="clients-name"
                        className={clsx(
                            'font-spartanMedium text-xs',
                            colorTheme === 'light'
                                ? errors.clientName
                                    ? 'text-errorRed'
                                    : 'text-singleGrey'
                                : errors.clientName
                                  ? 'text-errorRed'
                                  : 'text-checkboxViolet'
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
                        'h-[48px] w-full rounded-[5px] border-[1px] border-solid pl-[15px] font-spartanBold text-xs focus:border-packmanUp focus:outline-none focus:ring-0',
                        colorTheme === 'light'
                            ? errors.clientName
                                ? 'border-errorRed bg-defaultWhite text-defaultBlack'
                                : 'border-checkboxViolet bg-defaultWhite text-defaultBlack'
                            : errors.clientName
                              ? 'border-errorRed bg-editDark text-defaultWhite'
                              : 'border-editDark bg-editDark text-defaultWhite'
                    )}
                    defaultValue={defaultName}
                    {...register('clientName')}
                />
            </div>

            <div className="mb-[12px]">
                <div className="flex justify-between">
                    <label
                        htmlFor="clients-email"
                        className={clsx(
                            'font-spartanMedium text-xs',
                            colorTheme === 'light'
                                ? errors.clientEmail
                                    ? 'text-errorRed'
                                    : 'text-singleGrey'
                                : errors.clientEmail
                                  ? 'text-errorRed'
                                  : 'text-checkboxViolet'
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
                    type="text"
                    id="clients-email"
                    className={clsx(
                        'h-[48px] w-full rounded-[5px] border-[1px] border-solid pl-[15px] font-spartanBold text-xs focus:border-packmanUp focus:outline-none focus:ring-0',
                        colorTheme === 'light'
                            ? errors.clientEmail
                                ? 'border-errorRed bg-defaultWhite text-defaultBlack'
                                : 'border-checkboxViolet bg-defaultWhite text-defaultBlack'
                            : errors.clientEmail
                              ? 'border-errorRed bg-editDark text-defaultWhite'
                              : 'border-editDark bg-editDark text-defaultWhite'
                    )}
                    defaultValue={defaultEmail}
                    {...register('clientEmail')}
                />
            </div>

            <div className="mb-[12px]">
                <div className="flex justify-between">
                    <label
                        htmlFor="street-address-from"
                        className={clsx(
                            'font-spartanMedium text-xs',
                            colorTheme === 'light'
                                ? errors.clientAddress
                                    ? 'text-errorRed'
                                    : 'text-singleGrey'
                                : errors.clientAddress
                                  ? 'text-errorRed'
                                  : 'text-checkboxViolet'
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
                        'h-[48px] w-full rounded-[5px] border-[1px] border-solid pl-[15px] font-spartanBold text-xs focus:border-packmanUp focus:outline-none focus:ring-0',
                        colorTheme === 'light'
                            ? errors.clientAddress
                                ? 'border-errorRed bg-transparent text-defaultBlack'
                                : 'border-checkboxViolet bg-transparent text-defaultBlack'
                            : errors.clientAddress
                              ? 'border-errorRed bg-editDark text-defaultWhite'
                              : 'border-editDark bg-editDark text-defaultWhite'
                    )}
                    defaultValue={defaultStreet}
                    {...register('clientAddress')}
                />
            </div>

            <div className="mb-[35px] flex flex-wrap justify-between">
                <div className="max-[525px]:mb-[12px] xs:w-[46%] min-[525px]:w-[30%]">
                    <div className="flex justify-between">
                        <label
                            htmlFor="city-from"
                            className={clsx(
                                'font-spartanMedium text-xs',
                                colorTheme === 'light'
                                    ? errors.clientCity
                                        ? 'text-errorRed'
                                        : 'text-singleGrey'
                                    : errors.clientCity
                                      ? 'text-errorRed'
                                      : 'text-checkboxViolet'
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
                            'h-[48px] w-full rounded-[5px] border-[1px] border-solid pl-[15px] font-spartanBold text-xs focus:border-packmanUp focus:outline-none focus:ring-0',
                            colorTheme === 'light'
                                ? errors.clientCity
                                    ? 'border-errorRed bg-transparent text-defaultBlack'
                                    : 'border-checkboxViolet bg-transparent text-defaultBlack'
                                : errors.clientCity
                                  ? 'border-errorRed bg-editDark text-defaultWhite'
                                  : 'border-editDark bg-editDark text-defaultWhite'
                        )}
                        defaultValue={defaultCity}
                        {...register('clientCity')}
                    />
                </div>

                <div className="max-[525px]:mb-[12px] xs:w-[46%] min-[525px]:w-[30%]">
                    <div className="flex justify-between">
                        <label
                            htmlFor="post-code-from"
                            className={clsx(
                                'font-spartanMedium text-xs',
                                colorTheme === 'light'
                                    ? errors.clientPostcode
                                        ? 'text-errorRed'
                                        : 'text-singleGrey'
                                    : errors.clientPostcode
                                      ? 'text-errorRed'
                                      : 'text-checkboxViolet'
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
                            'h-[48px] w-full rounded-[5px] border-[1px] border-solid pl-[15px] font-spartanBold text-xs focus:border-packmanUp focus:outline-none focus:ring-0',
                            colorTheme === 'light'
                                ? errors.clientPostcode
                                    ? 'border-errorRed bg-transparent text-defaultBlack'
                                    : 'border-checkboxViolet bg-transparent text-defaultBlack'
                                : errors.clientPostcode
                                  ? 'border-errorRed bg-editDark text-defaultWhite'
                                  : 'border-editDark bg-editDark text-defaultWhite'
                        )}
                        defaultValue={defaultPostcode}
                        {...register('clientPostcode')}
                    />
                </div>

                <div className="xs:w-[100%] min-[525px]:w-[30%]">
                    <div className="flex justify-between">
                        <label
                            htmlFor="country-from"
                            className={clsx(
                                'font-spartanMedium text-xs',
                                colorTheme === 'light'
                                    ? errors.clientCountry
                                        ? 'text-errorRed'
                                        : 'text-singleGrey'
                                    : errors.clientCountry
                                      ? 'text-errorRed'
                                      : 'text-checkboxViolet'
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
                            'h-[48px] w-full rounded-[5px] border-[1px] border-solid pl-[15px] font-spartanBold text-xs focus:border-packmanUp focus:outline-none focus:ring-0',
                            colorTheme === 'light'
                                ? errors.clientCountry
                                    ? 'border-errorRed bg-transparent text-defaultBlack'
                                    : 'border-checkboxViolet bg-transparent text-defaultBlack'
                                : errors.clientCountry
                                  ? 'border-errorRed bg-editDark text-defaultWhite'
                                  : 'border-editDark bg-editDark text-defaultWhite'
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
