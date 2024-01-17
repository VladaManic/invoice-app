import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../../../state/hooks'
import { addItem } from '../../../../state/invoice/invoiceSlice'
import clsx from 'clsx'

import Item from '../FormItems/Item'

import { FormDataObj, InvoiceObj, ItemObj } from '../../../../types/interfaces'
interface Props {
    register: UseFormRegister<FormDataObj>
    errors: FieldErrors<FormDataObj>
    invoice: InvoiceObj | undefined
}

const ItemList = ({ register, errors, invoice }: Props) => {
    const invoiceRedux = useAppSelector((state) => state.invoice)
    const dispatch = useAppDispatch()

    //Adding new item
    const onClickHandler = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.TouchEvent<HTMLButtonElement>
    ) => {
        e.preventDefault()
        dispatch(addItem())
    }

    return (
        <div className="pb-[30px]">
            <h3 className="text-titleDark mb-[12px] font-spartanBold text-[18px] leading-[32px]">
                Item List
            </h3>
            <div>
                <div
                    className={clsx(
                        'mb-[8px] justify-between font-spartanMedium text-xs xs:hidden min-[525px]:flex',
                        invoiceRedux.colorTheme === 'light'
                            ? 'text-singleGrey'
                            : 'text-checkboxViolet'
                    )}
                >
                    <p className="w-[40%]">Item Name</p>
                    <p className="w-[10%]">Qty.</p>
                    <p className="w-[15%]">Price</p>
                    <p className="w-[15%]">Total</p>
                    <p className="w-[10%]"></p>
                </div>
                {invoice === undefined
                    ? //Insert form
                      invoiceRedux.itemList.map((item: number) => (
                          <Item
                              key={item}
                              itemIndex={item}
                              register={register}
                              errors={errors}
                              invoice={invoice}
                          />
                      ))
                    : //Update form
                      invoice.items.map((item: ItemObj, index: number) => (
                          <Item
                              key={item.name}
                              itemIndex={index}
                              register={register}
                              errors={errors}
                              invoice={invoice}
                          />
                      ))}
            </div>
            <button
                className="mb-[20px] w-full rounded-[20px] pb-[12px] pt-[12px] font-spartanBold text-xs text-singleGrey hover:border-checkboxViolet hover:bg-checkboxViolet"
                onClick={onClickHandler}
            >
                + Add New Item
            </button>
            {errors.items && errors.items.length !== undefined && (
                <span className="block text-xs text-errorRed">
                    - All fields must be added
                </span>
            )}
            {errors.items && errors.items.message === 'Required' && (
                <span className="block text-xs text-errorRed">
                    - An item must be added
                </span>
            )}
        </div>
    )
}

export default ItemList
