import { FieldErrors, UseFormRegister } from 'react-hook-form'
import clsx from 'clsx'

import { FormDataObj, InvoiceObj } from '../../../../types/interfaces'
interface Props {
    register: UseFormRegister<FormDataObj>
    errors: FieldErrors<FormDataObj>
    invoice: InvoiceObj | undefined
    colorTheme: string
}

const SenderFields = ({ register, errors, invoice, colorTheme }: Props) => {
    let defaultStreet, defaultCity, defaultPostcode, defaultCountry
    if (invoice !== undefined) {
        defaultStreet = invoice.senderAddress.street
        defaultCity = invoice.senderAddress.city
        defaultPostcode = invoice.senderAddress.postCode
        defaultCountry = invoice.senderAddress.country
    } else {
        defaultStreet = ''
        defaultCity = ''
        defaultPostcode = ''
        defaultCountry = ''
    }

    return (
        <>
            <h3 className="mb-[12px] font-spartanBold text-xs text-packmanUp">
                Bill From
            </h3>
            <div className="mb-[12px]">
                <div className="flex justify-between">
                    <label
                        htmlFor="street-address"
                        className={clsx(
                            'font-spartanMedium text-xs',
                            colorTheme === 'light'
                                ? errors.senderAddress
                                    ? 'text-errorRed'
                                    : 'text-singleGrey'
                                : errors.senderAddress
                                  ? 'text-errorRed'
                                  : 'text-checkboxViolet'
                        )}
                    >
                        Street Address
                    </label>
                    {errors.senderAddress && (
                        <span className="block text-xs text-errorRed">
                            {errors.senderAddress.message}
                        </span>
                    )}
                </div>
                <input
                    type="text"
                    id="street-address"
                    className={clsx(
                        'h-[48px] w-full rounded-[5px] border-[1px] border-solid pl-[15px] font-spartanBold text-xs focus:border-packmanUp focus:outline-none focus:ring-0',
                        colorTheme === 'light'
                            ? errors.senderAddress
                                ? 'border-errorRed bg-defaultWhite text-defaultBlack'
                                : 'border-checkboxViolet bg-defaultWhite text-defaultBlack'
                            : errors.senderAddress
                              ? 'border-errorRed bg-editDark text-defaultWhite'
                              : 'border-editDark bg-editDark text-defaultWhite'
                    )}
                    defaultValue={defaultStreet}
                    {...register('senderAddress')}
                />
            </div>

            <div className="mb-[35px] flex flex-wrap justify-between">
                <div className="xs:w-[46%] min-[525px]:w-[30%]">
                    <div className="flex justify-between">
                        <label
                            htmlFor="city"
                            className={clsx(
                                'font-spartanMedium text-xs',
                                colorTheme === 'light'
                                    ? errors.senderCity
                                        ? 'text-errorRed'
                                        : 'text-singleGrey'
                                    : errors.senderCity
                                      ? 'text-errorRed'
                                      : 'text-checkboxViolet'
                            )}
                        >
                            City
                        </label>
                        {errors.senderCity && (
                            <span className="block hidden text-xs text-errorRed min-[635px]:inline">
                                {errors.senderCity.message}
                            </span>
                        )}
                    </div>
                    <input
                        type="text"
                        id="city"
                        className={clsx(
                            'h-[48px] w-full rounded-[5px] border-[1px] border-solid pl-[15px] font-spartanBold text-xs focus:border-packmanUp focus:outline-none focus:ring-0',
                            colorTheme === 'light'
                                ? errors.senderCity
                                    ? 'border-errorRed bg-defaultWhite text-defaultBlack'
                                    : 'border-checkboxViolet bg-defaultWhite text-defaultBlack'
                                : errors.senderCity
                                  ? 'border-errorRed bg-editDark text-defaultWhite'
                                  : 'border-editDark bg-editDark text-defaultWhite'
                        )}
                        defaultValue={defaultCity}
                        {...register('senderCity')}
                    />
                </div>

                <div className="max-[525px]:mb-[12px] xs:w-[46%] min-[525px]:w-[30%]">
                    <div className="flex justify-between">
                        <label
                            htmlFor="post-code"
                            className={clsx(
                                'font-spartanMedium text-xs',
                                colorTheme === 'light'
                                    ? errors.senderPostcode
                                        ? 'text-errorRed'
                                        : 'text-singleGrey'
                                    : errors.senderPostcode
                                      ? 'text-errorRed'
                                      : 'text-checkboxViolet'
                            )}
                        >
                            Post Code
                        </label>
                        {errors.senderPostcode && (
                            <span className="block hidden text-xs text-errorRed min-[635px]:inline">
                                {errors.senderPostcode.message}
                            </span>
                        )}
                    </div>
                    <input
                        type="text"
                        id="post-code"
                        className={clsx(
                            'h-[48px] w-full rounded-[5px] border-[1px] border-solid pl-[15px] font-spartanBold text-xs focus:border-packmanUp focus:outline-none focus:ring-0',
                            colorTheme === 'light'
                                ? errors.senderPostcode
                                    ? 'border-errorRed bg-defaultWhite text-defaultBlack'
                                    : 'border-checkboxViolet bg-defaultWhite text-defaultBlack'
                                : errors.senderPostcode
                                  ? 'border-errorRed bg-editDark text-defaultWhite'
                                  : 'border-editDark bg-editDark text-defaultWhite'
                        )}
                        defaultValue={defaultPostcode}
                        {...register('senderPostcode')}
                    />
                </div>

                <div className="xs:w-[100%] min-[525px]:w-[30%]">
                    <div className="flex justify-between">
                        <label
                            htmlFor="country"
                            className={clsx(
                                'font-spartanMedium text-xs',
                                colorTheme === 'light'
                                    ? errors.senderCountry
                                        ? 'text-errorRed'
                                        : 'text-singleGrey'
                                    : errors.senderCountry
                                      ? 'text-errorRed'
                                      : 'text-checkboxViolet'
                            )}
                        >
                            Country
                        </label>
                        {errors.senderCountry && (
                            <span className="block hidden text-xs text-errorRed min-[635px]:inline">
                                {errors.senderCountry.message}
                            </span>
                        )}
                    </div>
                    <input
                        type="text"
                        id="country"
                        className={clsx(
                            'h-[48px] w-full rounded-[5px] border-[1px] border-solid pl-[15px] font-spartanBold text-xs focus:border-packmanUp focus:outline-none focus:ring-0',
                            colorTheme === 'light'
                                ? errors.senderCountry
                                    ? 'border-errorRed bg-defaultWhite text-defaultBlack'
                                    : 'border-checkboxViolet bg-defaultWhite text-defaultBlack'
                                : errors.senderCountry
                                  ? 'border-errorRed bg-editDark text-defaultWhite'
                                  : 'border-editDark bg-editDark text-defaultWhite'
                        )}
                        defaultValue={defaultCountry}
                        {...register('senderCountry')}
                    />
                </div>
            </div>
        </>
    )
}

export default SenderFields
