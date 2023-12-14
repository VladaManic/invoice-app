import { z, ZodType } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import ItemList from '../ItemList'

import { FormDataObj } from '../../../types/interfaces'

interface Props {
    onClose: React.MouseEventHandler<HTMLButtonElement>
}

const FormModal = ({ onClose }: Props) => {
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
                            <span className="text-errorRed mt-[5px] block text-xs">
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
                                <span className="text-errorRed mt-[5px] block text-xs">
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
                                <span className="text-errorRed mt-[5px] block text-xs">
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
                                <span className="text-errorRed mt-[5px] block text-xs">
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
                            <span className="text-errorRed mt-[5px] block text-xs">
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
                            <span className="text-errorRed mt-[5px] block text-xs">
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
                            <span className="text-errorRed mt-[5px] block text-xs">
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
                                <span className="text-errorRed mt-[5px] block text-xs">
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
                                <span className="text-errorRed mt-[5px] block text-xs">
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
                                <span className="text-errorRed mt-[5px] block text-xs">
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
                                <span className="text-errorRed mb-[5px] block text-xs">
                                    {errors.paymentDue.message}
                                </span>
                            )}
                            <input
                                type="date"
                                id="invoice-date"
                                {...register('paymentDue')}
                            />
                        </div>
                        <div className="w-[48%]">
                            <label className="font-spartanMedium text-xs text-singleGrey">
                                Payment Terms
                            </label>
                            <select
                                id="payment-terms"
                                defaultValue="1"
                                {...register('paymentTerms')}
                            >
                                <option value="1">Net 1 Day</option>
                                <option value="2">Net 7 Days</option>
                                <option value="3">Net 14 s</option>
                                <option value="4">Net 30 Days</option>
                            </select>
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
                            <span className="text-errorRed mt-[5px] block text-xs">
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
