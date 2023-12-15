import { useState } from 'react'
import { z, ZodType } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'

import ItemList from '../ItemList'

import arrowIcon from '../../../assets/img/arrow.svg'

import { FormDataObj } from '../../../types/interfaces'

interface Props {
    onClose: React.MouseEventHandler<HTMLButtonElement>
}

const FormModal = ({ onClose }: Props) => {
    const [selectValue, setSelectValue] = useState<string>('1')
    const [selectText, setSelectText] = useState<string>('Net 1 day')
    const [selectOpened, setSelectOpened] = useState<boolean>(false)
    //Setting validation form rules
    const schema: ZodType<FormDataObj> = z.object({
        senderAddress: z.string().min(1, { message: "can't be empty" }),
        senderCity: z.string().min(1, { message: "can't be empty" }),
        senderPostcode: z.string().min(1, { message: "can't be empty" }),
        senderCountry: z.string().min(1, { message: "can't be empty" }),
        clientName: z.string().min(1, { message: "can't be empty" }),
        clientEmail: z.string().email(),
        clientAddress: z.string().min(1, { message: "can't be empty" }),
        clientCity: z.string().min(1, { message: "can't be empty" }),
        clientPostcode: z.string().min(1, { message: "can't be empty" }),
        clientCountry: z.string().min(1, { message: "can't be empty" }),
        paymentDue: z.string().min(1, { message: 'Must choose the date' }),
        paymentTerms: z.string(),
        description: z.string().min(1, { message: "can't be empty" }),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormDataObj>({
        resolver: zodResolver(schema),
    })

    //Opening/closing dropdown
    const dropdownHandler = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.TouchEvent<HTMLButtonElement>
    ) => {
        e.preventDefault()
        setSelectOpened(!selectOpened)
    }

    //Selecting options in dropdown
    const onClickDropdown = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.TouchEvent<HTMLButtonElement>
    ) => {
        e.preventDefault()
        setSelectValue(e.currentTarget.value)
        setSelectText(e.currentTarget.name)
    }

    const submitData = (data: FormDataObj) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(submitData)}>
            <div
                className="fixed left-[87px] top-0 z-[100] h-screen w-[630px] rounded-r-2xl bg-defaultWhite pb-[110px] pl-[50px] pr-[24px] pt-[40px]"
                id="form-wrapper"
            >
                <div className="h-full overflow-y-scroll" id="form-inner">
                    <div className="mr-[10px] h-full">
                        <h2 className="mb-[30px] font-spartanBold text-[24px] leading-[32px] text-defaultBlack">
                            New invoice
                        </h2>

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
                                    'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack',
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
                                        'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack',
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
                                            errors.senderPostcode &&
                                                'text-errorRed'
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
                                        'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack',
                                        errors.senderPostcode &&
                                            'border-errorRed'
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
                                            errors.senderCountry &&
                                                'text-errorRed'
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
                                        'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack',
                                        errors.senderCountry &&
                                            'border-errorRed'
                                    )}
                                    {...register('senderCountry')}
                                />
                            </div>
                        </div>

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
                                    'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack',
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
                                    'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack',
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
                                    'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet bg-transparent pl-[15px] font-spartanBold text-xs text-defaultBlack',
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
                                        'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet bg-transparent pl-[15px] font-spartanBold text-xs text-defaultBlack',
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
                                            errors.clientPostcode &&
                                                'text-errorRed'
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
                                        'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet bg-transparent pl-[15px] font-spartanBold text-xs text-defaultBlack',
                                        errors.clientPostcode &&
                                            'border-errorRed'
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
                                            errors.clientCountry &&
                                                'text-errorRed'
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
                                        'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet bg-transparent pl-[15px] font-spartanBold text-xs text-defaultBlack',
                                        errors.clientCountry &&
                                            'border-errorRed'
                                    )}
                                    {...register('clientCountry')}
                                />
                            </div>
                        </div>
                        <div className="mb-[20px] flex justify-between">
                            <div className="w-[48%]">
                                <div className="flex justify-between text-singleGrey">
                                    <label
                                        htmlFor="invoice-date"
                                        className={clsx(
                                            'font-spartanMedium text-xs',
                                            errors.paymentDue && 'text-errorRed'
                                        )}
                                    >
                                        Invoice Date
                                    </label>
                                    {errors.paymentDue && (
                                        <span className="block text-xs text-errorRed">
                                            {errors.paymentDue.message}
                                        </span>
                                    )}
                                </div>
                                <input
                                    type="date"
                                    id="invoice-date"
                                    {...register('paymentDue')}
                                />
                            </div>
                            <div className="relative w-[48%]">
                                <label className="font-spartanMedium text-xs text-singleGrey">
                                    Payment Terms
                                </label>
                                <button
                                    value={selectValue}
                                    className="flex w-full items-center justify-between rounded-[5px] border-[1px] border-solid border-checkboxViolet bg-transparent p-[15px] text-right font-spartanBold text-xs text-defaultBlack focus:border-packmanUp focus:outline-none focus:ring-0"
                                    onClick={dropdownHandler}
                                    {...register('paymentTerms')}
                                >
                                    <p>{selectText}</p>
                                    <img
                                        src={arrowIcon}
                                        alt="Arrow down"
                                        className={clsx(
                                            selectOpened && 'rotate-180'
                                        )}
                                    />
                                </button>
                                {selectOpened && (
                                    <div className="absolute top-[80px] w-full rounded-[10px] bg-defaultWhite font-spartanBold text-xs text-defaultBlack shadow-[0_10px_20px_0_rgba(223,227,250,0.9)]">
                                        <button
                                            value="1"
                                            name="Net 1 Day"
                                            className="border-b-solid w-full rounded-none border-b-[1px] border-b-checkboxViolet pb-[15px] pt-[15px] text-left hover:border-defaultWhite hover:border-b-checkboxViolet hover:text-packmanUp"
                                            onClick={onClickDropdown}
                                        >
                                            Net 1 Day
                                        </button>
                                        <button
                                            value="2"
                                            name="Net 7 Days"
                                            className="border-b-solid w-full rounded-none border-b-[1px] border-b-checkboxViolet pb-[15px] pt-[15px] text-left hover:border-defaultWhite hover:border-b-checkboxViolet hover:text-packmanUp"
                                            onClick={onClickDropdown}
                                        >
                                            Net 7 Days
                                        </button>
                                        <button
                                            value="3"
                                            name="Net 14 Days"
                                            className="border-b-solid w-full rounded-none border-b-[1px] border-b-checkboxViolet pb-[15px] pt-[15px] text-left hover:border-defaultWhite hover:border-b-checkboxViolet hover:text-packmanUp"
                                            onClick={onClickDropdown}
                                        >
                                            Net 14 Dayss
                                        </button>
                                        <button
                                            value="4"
                                            name="Net 30 Days"
                                            className="w-full rounded-none pb-[15px] pt-[15px] text-left hover:border-defaultWhite hover:text-packmanUp"
                                            onClick={onClickDropdown}
                                        >
                                            Net 30 Days
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
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
                                    'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet bg-transparent pl-[15px] font-spartanBold text-xs text-defaultBlack',
                                    errors.description && 'border-errorRed'
                                )}
                                {...register('description')}
                            />
                        </div>
                        <ItemList />
                    </div>
                </div>
                <div className="fixed bottom-0 left-[87px] z-[100] flex h-[110px] w-[630px] items-center justify-between rounded-r-2xl bg-defaultBlack bg-defaultWhite pl-[50px] pr-[42px]">
                    <button
                        className="rounded-[50px] pb-[15px] pl-[22px] pr-[22px] pt-[15px] font-spartanBold text-xs"
                        onClick={onClose}
                    >
                        Discard
                    </button>
                    <div>
                        <button className="mr-[15px] rounded-[50px] bg-asideBg pb-[15px] pl-[22px] pr-[22px] pt-[15px] font-spartanBold text-xs text-draftText">
                            Save as Draft
                        </button>
                        <button
                            type="submit"
                            className="rounded-[50px] bg-packmanUp pb-[15px] pl-[22px] pr-[22px] pt-[15px] font-spartanBold text-xs text-defaultWhite"
                        >
                            Save & Send
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default FormModal
