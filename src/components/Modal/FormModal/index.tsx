import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppSelector } from '../../../state/hooks'

import SenderFields from '../FormSections/SenderFields'
import ClientFields from '../FormSections/ClientFields'
import DateTerms from '../FormSections/DateTerms'
import ItemList from '../FormSections/ItemList'

import { FormDataObj } from '../../../types/interfaces'

interface Props {
    onClose: React.MouseEventHandler<HTMLButtonElement>
}

const FormModal = ({ onClose }: Props) => {
    const invoiceRedux = useAppSelector((state) => state.invoice)

    // Define the schema for the static properties
    const staticPropertiesSchema = z.object({
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

    // Define a single schema for the entire `items` array
    const itemSchema = z.array(
        z.object({
            name: z.string().min(1),
            quantity: z.string().min(1),
            price: z.string().min(1),
            total: z.string(),
        })
    )

    // Merge the static schema with the items schema
    const schema = z.object({
        ...staticPropertiesSchema.shape,
        items: itemSchema,
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormDataObj>({
        resolver: zodResolver(schema),
    })

    // console.log('Schema properties:')
    // Object.keys(schema.shape).forEach((key) => {
    //     console.log(key)
    // })

    const submitData = (data: FormDataObj) => {
        console.log(data)
    }

    if (errors.items !== undefined) {
        console.log(errors.items!.length)
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
                        <SenderFields register={register} errors={errors} />
                        <ClientFields register={register} errors={errors} />
                        <DateTerms register={register} errors={errors} />
                        <ItemList register={register} errors={errors} />
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
