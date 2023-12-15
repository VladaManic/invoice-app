/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from 'clsx'

interface Props {
    register: any
    errors: any
}

const ClientFields = ({ register, errors }: Props) => {
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
                    {...register('clientAddress')}
                />
            </div>

            <div className="mb-[35px] flex justify-between">
                <div className="w-[30%]">
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
                            <span className="block text-xs text-errorRed">
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
                        {...register('clientCity')}
                    />
                </div>

                <div className="w-[30%]">
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
                            <span className="block text-xs text-errorRed">
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
                        {...register('clientPostcode')}
                    />
                </div>

                <div className="w-[30%]">
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
                            <span className="block text-xs text-errorRed">
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
                        {...register('clientCountry')}
                    />
                </div>
            </div>
        </>
    )
}

export default ClientFields
