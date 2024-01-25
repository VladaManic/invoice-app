import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppDispatch } from '../../../state/hooks'
import {
    addItem,
    createInvoice,
    updateInvoice,
} from '../../../state/invoice/invoiceSlice'
import { format } from 'date-fns'
import clsx from 'clsx'
import stringGenerator from '../../../utils/stringGenerator'
import reformatDate from '../../../utils/reformatDate'

import Nav from '../FormSections/Nav'
import FormTitle from '../FormSections/FormTitle'
import SenderFields from '../FormSections/SenderFields'
import ClientFields from '../FormSections/ClientFields'
import DateTerms from '../FormSections/DateTerms'
import ItemList from '../FormSections/ItemList'
import SubmitBtns from '../FormSections/SubmitBtns'

import { FormDataObj, InvoiceObj, ItemObj } from '../../../types/interfaces'
interface Props {
    invoice: InvoiceObj | undefined
    colorTheme: string
    onClose: React.MouseEventHandler<HTMLButtonElement>
}

const FormModal = ({ invoice, colorTheme, onClose }: Props) => {
    const [submitType, setSubmitType] = useState('pending')
    const { pathname } = useLocation()
    const dispatch = useAppDispatch()

    let singleInvoice, formTitle
    //Edit form values
    if (pathname.includes('/invoice/')) {
        singleInvoice = invoice
        formTitle = <FormTitle invoice={invoice} />
        //Add form values
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
        clientEmail: z.string().min(1, { message: "can't be empty" }), //.email(),
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
        unregister,
        handleSubmit,
        formState: { errors },
    } = useForm<FormDataObj>({
        resolver: zodResolver(schema),
    })

    // console.log('Schema properties:')
    // Object.keys(schema.shape).forEach((key) => {
    //     console.log(key)
    // })

    useEffect(() => {
        //Edit form
        if (invoice !== undefined) {
            //Setting value for list items depending on single invoice items list
            Array.from({ length: invoice.items.length }, () =>
                dispatch(addItem())
            )
        }
    }, [])

    //Different submit btns clicked in add form (draft or pending)
    const onClickHandler = (e: React.FormEvent<HTMLButtonElement>) => {
        const type = e.currentTarget.name
        setSubmitType(type)
    }

    const submitData = (data: FormDataObj) => {
        let total: number = 0
        data.items.forEach((item: ItemObj) => {
            item.total = item.quantity * item.price
            total = total + item.total
        })
        const newObj: InvoiceObj = {
            id: '0',
            createdAt: '0',
            paymentDue: reformatDate(data.paymentDue),
            description: data.description,
            paymentTerms: parseInt(data.paymentTerms),
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
            total: total,
        }
        console.log(data)
        //If Home page (add form)
        if (!pathname.includes('/invoice/')) {
            const letterPart = stringGenerator(2, 'letters')
            const numberPart = stringGenerator(4, 'numbers')
            const id = letterPart + numberPart
            const now = new Date()
            const currentTime = format(now, 'y-MM-dd')
            newObj.id = id
            newObj.createdAt = currentTime
            if (submitType === 'pending') {
                newObj.status = 'pending'
            } else {
                newObj.status = 'draft'
            }
            dispatch(createInvoice(newObj))
            //If single pade (edit form)
        } else {
            newObj.id = invoice!.id
            newObj.createdAt = invoice!.createdAt
            newObj.status = invoice!.status
            dispatch(updateInvoice(newObj))
        }
    }

    if (errors.items !== undefined) {
        console.log(errors.items)
    }

    return (
        <form onSubmit={handleSubmit(submitData)}>
            <div
                className={clsx(
                    'fixed left-0 z-[100] h-screen pt-[40px] xs:top-[72px] xs:pb-[190px] xs:pl-[30px] xs:pr-[6px] min-[525px]:pl-[50px] min-[525px]:pr-[24px] min-[630px]:w-[630px] min-[630px]:rounded-r-2xl md:top-[80px] lg:left-[87px] lg:top-0 lg:pb-[110px]',
                    colorTheme === 'light' ? 'modalLight' : 'bg-themeDark'
                )}
            >
                <div
                    className={clsx(
                        'h-full overflow-y-scroll',
                        colorTheme === 'light' ? 'inner-light' : 'inner-dark'
                    )}
                    id="form-inner"
                >
                    <div className="mr-[10px] h-full">
                        <Nav colorTheme={colorTheme} />
                        <h2
                            className={clsx(
                                'mb-[30px] font-spartanBold text-[24px] leading-[32px] text-defaultBlack',
                                colorTheme === 'light'
                                    ? 'text-defaultBlack'
                                    : 'text-defaultWhite'
                            )}
                        >
                            {formTitle}
                        </h2>
                        <SenderFields
                            register={register}
                            errors={errors}
                            invoice={singleInvoice}
                            colorTheme={colorTheme}
                        />
                        <ClientFields
                            register={register}
                            errors={errors}
                            invoice={singleInvoice}
                            colorTheme={colorTheme}
                        />
                        <DateTerms
                            register={register}
                            errors={errors}
                            invoice={singleInvoice}
                            colorTheme={colorTheme}
                        />
                        <ItemList
                            register={register}
                            unregister={unregister}
                            errors={errors}
                            invoice={singleInvoice}
                            colorTheme={colorTheme}
                        />
                    </div>
                </div>
                <SubmitBtns
                    pathname={pathname}
                    colorTheme={colorTheme}
                    onClose={onClose}
                    onClick={onClickHandler}
                />
            </div>
        </form>
    )
}

export default FormModal
