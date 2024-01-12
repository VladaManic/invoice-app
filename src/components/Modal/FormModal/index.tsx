import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppDispatch } from '../../../state/hooks'
import {
    createInvoice,
    updateInvoice,
} from '../../../state/invoice/invoiceSlice'
import { format } from 'date-fns'
import stringGenerator from '../../../utils/stringGenerator'

import FormTitle from '../FormSections/FormTitle'
import SenderFields from '../FormSections/SenderFields'
import ClientFields from '../FormSections/ClientFields'
import DateTerms from '../FormSections/DateTerms'
import ItemList from '../FormSections/ItemList'
import SubmitBtns from '../FormSections/SubmitBtns'

import { FormDataObj, InvoiceObj, ItemObj } from '../../../types/interfaces'
interface Props {
    invoice: InvoiceObj | undefined
    onClose: React.MouseEventHandler<HTMLButtonElement>
}

const FormModal = ({ invoice, onClose }: Props) => {
    const [submitType, setSubmitType] = useState('pending')
    const { pathname } = useLocation()
    const dispatch = useAppDispatch()

    let singleInvoice, formTitle
    //Update form features
    if (pathname.includes('/invoice/')) {
        singleInvoice = invoice
        formTitle = <FormTitle invoice={invoice} />
        //Insert form features
    } else {
        singleInvoice = undefined
        formTitle = 'New invoice'
    }

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

    //Different submit btns clicked in insert form (draft or pending)
    const onClickHandler = (e: React.FormEvent<HTMLButtonElement>) => {
        const type = e.currentTarget.name
        setSubmitType(type)
    }

    const submitData = (data: FormDataObj) => {
        const newObj: InvoiceObj = {
            id: '0',
            createdAt: '0',
            paymentDue: data.paymentDue,
            description: data.description,
            paymentTerms: data.paymentTerms,
            clientName: data.clientName,
            clientEmail: data.clientEmail,
            status: 'pending',
            senderAddress: {
                street: data.senderAddress,
                city: data.senderCity,
                postCode: data.senderPostcode,
                country: data.senderCountry,
            },
            clientAddress: {
                street: data.clientAddress,
                city: data.clientCity,
                postCode: data.clientPostcode,
                country: data.clientCountry,
            },
            items: data.items,
            total: 0,
        }
        //If Home page (add form)
        if (!pathname.includes('/invoice/')) {
            console.log(data)
            const letterPart = stringGenerator(2, 'letters')
            const numberPart = stringGenerator(4, 'numbers')
            const id = letterPart + numberPart
            const now = new Date()
            const currentTime = format(now, 'y-MM-dd')
            let total: number = 0
            data.items.forEach((item: ItemObj) => {
                item.total = item.quantity * item.price
                total = total + item.total
            })
            newObj.id = id
            newObj.createdAt = currentTime
            newObj.total = total
            if (submitType === 'pending') {
                newObj.status = 'pending'
            } else {
                newObj.status = 'draft'
            }
            dispatch(createInvoice(newObj))
            //If single pade (edit form)
        } else {
            console.log(data)
            let total: number = 0
            data.items.forEach((item: ItemObj) => {
                item.total = item.quantity * item.price
                total = total + item.total
            })
            newObj.id = invoice!.id
            newObj.createdAt = invoice!.createdAt
            newObj.status = invoice!.status
            newObj.total = total
            dispatch(updateInvoice(newObj))
        }
    }

    if (errors.items !== undefined) {
        console.log(errors.items)
    }

    return (
        <form onSubmit={handleSubmit(submitData)}>
            <div
                className="fixed left-0 z-[100] h-screen bg-defaultWhite pt-[40px] xs:top-[72px] xs:pb-[190px] xs:pl-[30px] xs:pr-[6px] min-[525px]:pl-[50px] min-[525px]:pr-[24px] min-[630px]:w-[630px] min-[630px]:rounded-r-2xl md:top-[80px] lg:left-[87px] lg:top-0 lg:pb-[110px]"
                id="form-wrapper"
            >
                <div className="h-full overflow-y-scroll" id="form-inner">
                    <div className="mr-[10px] h-full">
                        <h2 className="mb-[30px] font-spartanBold text-[24px] leading-[32px] text-defaultBlack">
                            {formTitle}
                        </h2>
                        <SenderFields
                            register={register}
                            errors={errors}
                            invoice={singleInvoice}
                        />
                        <ClientFields
                            register={register}
                            errors={errors}
                            invoice={singleInvoice}
                        />
                        <DateTerms
                            register={register}
                            errors={errors}
                            invoice={singleInvoice}
                        />
                        <ItemList
                            register={register}
                            errors={errors}
                            invoice={singleInvoice}
                        />
                    </div>
                </div>
                <SubmitBtns
                    pathname={pathname}
                    onClose={onClose}
                    onClick={onClickHandler}
                />
            </div>
        </form>
    )
}

export default FormModal
