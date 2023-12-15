import { useState } from 'react'
import { z, ZodType } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

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
        senderAddress: z.string().min(1, { message: "Field can't be empty" }),
        senderCity: z.string().min(1, { message: "Field can't be empty" }),
        senderPostcode: z.string().min(1, { message: "Field can't be empty" }),
        senderCountry: z.string().min(1, { message: "Field can't be empty" }),
        clientName: z.string().min(1, { message: "Field can't be empty" }),
        clientEmail: z.string().email(),
        clientAddress: z.string().min(1, { message: "Field can't be empty" }),
        clientCity: z.string().min(1, { message: "Field can't be empty" }),
        clientPostcode: z.string().min(1, { message: "Field can't be empty" }),
        clientCountry: z.string().min(1, { message: "Field can't be empty" }),
        paymentDue: z.string().min(1, { message: 'Must choose the date' }),
        paymentTerms: z.string(),
        description: z.string().min(1, { message: "Field can't be empty" }),
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
                className="fixed left-[87px] top-0 z-[100] h-screen w-[630px] overflow-y-scroll rounded-r-2xl bg-defaultWhite pl-[50px] pr-[42px] pt-[40px]"
                id="form-modal"
            >
                <div>
                    <h2 className="mb-[30px] font-spartanBold text-[24px] leading-[32px] text-defaultBlack">
                        New invoice
                    </h2>

                    <h3 className="mb-[12px] font-spartanBold text-xs text-packmanUp">
                        Bill From
                    </h3>
                    <div className="mb-[12px]">
                        <label
                            htmlFor="street-address"
                            className="font-spartanMedium text-xs text-singleGrey"
                        >
                            Street Address
                        </label>
                        <input
                            type="text"
                            id="street-address"
                            className="h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack"
                            {...register('senderAddress')}
                        />
                        {errors.senderAddress && (
                            <span className="mt-[5px] block text-xs text-errorRed">
                                {errors.senderAddress.message}
                            </span>
                        )}
                    </div>

                    <div className="mb-[35px] flex justify-between">
                        <div className="w-[30%]">
                            <label
                                htmlFor="city"
                                className="font-spartanMedium text-xs text-singleGrey"
                            >
                                City
                            </label>
                            <input
                                type="text"
                                id="city"
                                className="h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack"
                                {...register('senderCity')}
                            />
                            {errors.senderCity && (
                                <span className="mt-[5px] block text-xs text-errorRed">
                                    {errors.senderCity.message}
                                </span>
                            )}
                        </div>
                        <div className="w-[30%]">
                            <label
                                htmlFor="post-code"
                                className="font-spartanMedium text-xs text-singleGrey"
                            >
                                Post Code
                            </label>
                            <input
                                type="text"
                                id="post-code"
                                className="h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack"
                                {...register('senderPostcode')}
                            />
                            {errors.senderPostcode && (
                                <span className="mt-[5px] block text-xs text-errorRed">
                                    {errors.senderPostcode.message}
                                </span>
                            )}
                        </div>
                        <div className="w-[30%]">
                            <label
                                htmlFor="country"
                                className="font-spartanMedium text-xs text-singleGrey"
                            >
                                Country
                            </label>
                            <input
                                type="text"
                                id="country"
                                className="h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack"
                                {...register('senderCountry')}
                            />
                            {errors.senderCountry && (
                                <span className="mt-[5px] block text-xs text-errorRed">
                                    {errors.senderCountry.message}
                                </span>
                            )}
                        </div>
                    </div>

                    <h3 className="mb-[12px] font-spartanBold text-xs text-packmanUp">
                        Bill To
                    </h3>
                    <div className="mb-[12px]">
                        <label
                            htmlFor="clients-name"
                            className="font-spartanMedium text-xs text-singleGrey"
                        >
                            Client's Name
                        </label>
                        <input
                            type="text"
                            id="clients-name"
                            className="h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack"
                            {...register('clientName')}
                        />
                        {errors.clientName && (
                            <span className="mt-[5px] block text-xs text-errorRed">
                                {errors.clientName.message}
                            </span>
                        )}
                    </div>
                    <div className="mb-[12px]">
                        <label
                            htmlFor="clients-email"
                            className="font-spartanMedium text-xs text-singleGrey"
                        >
                            Client's Email
                        </label>
                        <input
                            type="email"
                            id="clients-email"
                            className="h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack"
                            {...register('clientEmail')}
                        />
                        {errors.clientEmail && (
                            <span className="mt-[5px] block text-xs text-errorRed">
                                {errors.clientEmail.message}
                            </span>
                        )}
                    </div>
                    <div className="mb-[12px]">
                        <label
                            htmlFor="street-address-from"
                            className="font-spartanMedium text-xs text-singleGrey"
                        >
                            Street Address
                        </label>
                        <input
                            type="text"
                            id="street-address-from"
                            className="h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack"
                            {...register('clientAddress')}
                        />
                        {errors.clientAddress && (
                            <span className="mt-[5px] block text-xs text-errorRed">
                                {errors.clientAddress.message}
                            </span>
                        )}
                    </div>
                    <div className="mb-[35px] flex justify-between">
                        <div className="w-[30%]">
                            <label
                                htmlFor="city-from"
                                className="font-spartanMedium text-xs text-singleGrey"
                            >
                                City
                            </label>
                            <input
                                type="text"
                                id="city-from"
                                className="h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack"
                                {...register('clientCity')}
                            />
                            {errors.clientCity && (
                                <span className="mt-[5px] block text-xs text-errorRed">
                                    {errors.clientCity.message}
                                </span>
                            )}
                        </div>
                        <div className="w-[30%]">
                            <label
                                htmlFor="post-code-from"
                                className="font-spartanMedium text-xs text-singleGrey"
                            >
                                Post Code
                            </label>
                            <input
                                type="text"
                                id="post-code-from"
                                className="h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack"
                                {...register('clientPostcode')}
                            />
                            {errors.clientPostcode && (
                                <span className="mt-[5px] block text-xs text-errorRed">
                                    {errors.clientPostcode.message}
                                </span>
                            )}
                        </div>
                        <div className="w-[30%]">
                            <label
                                htmlFor="country-from"
                                className="font-spartanMedium text-xs text-singleGrey"
                            >
                                Country
                            </label>
                            <input
                                type="text"
                                id="country-from"
                                className="h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack"
                                {...register('clientCountry')}
                            />
                            {errors.clientCountry && (
                                <span className="mt-[5px] block text-xs text-errorRed">
                                    {errors.clientCountry.message}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-[48%]">
                            <label
                                htmlFor="invoice-date"
                                className="font-spartanMedium text-xs text-singleGrey"
                            >
                                Invoice Date
                            </label>
                            {errors.paymentDue && (
                                <span className="mb-[5px] block text-xs text-errorRed">
                                    {errors.paymentDue.message}
                                </span>
                            )}
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
                                className="flex w-[240px] items-center justify-between rounded-[5px] border-[1px] border-solid border-checkboxViolet bg-defaultWhite p-[15px] font-spartanBold text-xs text-defaultBlack"
                                onClick={dropdownHandler}
                                {...register('paymentTerms')}
                            >
                                <p>{selectText}</p>
                                <img src={arrowIcon} alt="Arrow down" />
                            </button>
                            {selectOpened && (
                                <div className="absolute top-[80px] w-[240px] rounded-[10px] bg-defaultWhite font-spartanBold text-xs text-defaultBlack shadow-[0_10px_20px_0_rgba(223,227,250,0.9)]">
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
                        <label
                            htmlFor="project-description"
                            className="font-spartanMedium text-xs text-singleGrey"
                        >
                            Project Description
                        </label>
                        <input
                            type="text"
                            id="project-description"
                            className="h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack"
                            {...register('description')}
                        />
                        {errors.description && (
                            <span className="mt-[5px] block text-xs text-errorRed">
                                {errors.description.message}
                            </span>
                        )}
                    </div>
                    <ItemList />
                </div>
            </div>
            <div className="fixed bottom-0 left-[87px] z-[100] flex h-[110px] w-[630px] items-center justify-between rounded-r-2xl bg-defaultWhite pl-[50px] pr-[42px]">
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
        </form>
    )
}

export default FormModal
