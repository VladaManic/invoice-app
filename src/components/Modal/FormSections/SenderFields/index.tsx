import { FieldErrors, UseFormRegister } from 'react-hook-form'
import clsx from 'clsx'

import { FormDataObj, InvoiceObj } from '../../../../types/interfaces'

interface Props {
    register: UseFormRegister<FormDataObj>
    errors: FieldErrors<FormDataObj>
    invoice: InvoiceObj | undefined
}

const SenderFields = ({ register, errors, invoice }: Props) => {
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
                <div className="flex justify-between text-singleGrey">
                    <label
                        htmlFor="street-address"
                        className={clsx(
                            'font-spartanMedium text-xs',
                            errors.senderAddress && 'text-errorRed'
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
                        'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack focus:border-packmanUp focus:outline-none focus:ring-0',
                        errors.senderAddress && 'border-errorRed'
                    )}
                    defaultValue={defaultStreet}
                    {...register('senderAddress')}
                />
            </div>

            <div className="mb-[35px] flex flex-wrap justify-between">
                <div className="xs:w-[46%] min-[525px]:w-[30%]">
                    <div className="flex justify-between text-singleGrey">
                        <label
                            htmlFor="city"
                            className={clsx(
                                'font-spartanMedium text-xs',
                                errors.senderCity && 'text-errorRed'
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
                            'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack focus:border-packmanUp focus:outline-none focus:ring-0',
                            errors.senderCity && 'border-errorRed'
                        )}
                        defaultValue={defaultCity}
                        {...register('senderCity')}
                    />
                </div>

                <div className="max-[525px]:mb-[12px] xs:w-[46%] min-[525px]:w-[30%]">
                    <div className="flex justify-between text-singleGrey">
                        <label
                            htmlFor="post-code"
                            className={clsx(
                                'font-spartanMedium text-xs',
                                errors.senderPostcode && 'text-errorRed'
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
                            'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack focus:border-packmanUp focus:outline-none focus:ring-0',
                            errors.senderPostcode && 'border-errorRed'
                        )}
                        defaultValue={defaultPostcode}
                        {...register('senderPostcode')}
                    />
                </div>

                <div className="xs:w-[100%] min-[525px]:w-[30%]">
                    <div className="flex justify-between text-singleGrey">
                        <label
                            htmlFor="country"
                            className={clsx(
                                'font-spartanMedium text-xs',
                                errors.senderCountry && 'text-errorRed'
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
                            'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack focus:border-packmanUp focus:outline-none focus:ring-0',
                            errors.senderCountry && 'border-errorRed'
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
