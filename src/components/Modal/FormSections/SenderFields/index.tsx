/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from 'clsx'

interface Props {
    register: any
    errors: any
}

const SenderFields = ({ register, errors }: Props) => {
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
                    {...register('senderAddress')}
                />
            </div>

            <div className="mb-[35px] flex justify-between">
                <div className="w-[30%]">
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
                            <span className="block text-xs text-errorRed">
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
                        {...register('senderCity')}
                    />
                </div>

                <div className="w-[30%]">
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
                            <span className="block text-xs text-errorRed">
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
                        {...register('senderPostcode')}
                    />
                </div>

                <div className="w-[30%]">
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
                            <span className="block text-xs text-errorRed">
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
                        {...register('senderCountry')}
                    />
                </div>
            </div>
        </>
    )
}

export default SenderFields
