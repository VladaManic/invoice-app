import { useAppSelector } from '../../../state/hooks'
import clsx from 'clsx'

import { InvoiceObj, ItemObj } from '../../../types/interfaces'

interface Props {
    invoice: InvoiceObj
}

const SubsectionItemName = ({ invoice }: Props) => {
    const invoiceRedux = useAppSelector((state) => state.invoice)

    return (
        <div
            className={clsx(
                'xs:p-[10px] sm:p-4 md:pb-6',
                invoiceRedux.colorTheme === 'light'
                    ? 'bg-tableGrey '
                    : 'bg-editDark'
            )}
        >
            <div className="max-md:hidden md:block">
                <table className="w-full border-separate border-spacing-[20px]">
                    <thead
                        className={clsx(
                            invoiceRedux.colorTheme === 'light'
                                ? 'text-defaultText'
                                : 'text-checkboxViolet'
                        )}
                    >
                        <tr>
                            <th className="w-[50%] text-left text-[11px] leading-[18px]">
                                Item Name
                            </th>
                            <th className="w-[10%] text-[11px] leading-[18px]">
                                QTY.
                            </th>
                            <th className="w-[20%] text-right text-[11px] leading-[18px]">
                                Price
                            </th>
                            <th className="w-[20%] text-right text-[11px] leading-[18px]">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoice.items.map((singleItem: ItemObj) => (
                            <tr key={singleItem.name}>
                                <td
                                    className={clsx(
                                        'w-[50%] text-left font-spartanBold text-xs text-defaultBlack',
                                        invoiceRedux.colorTheme === 'light'
                                            ? 'text-defaultBlack'
                                            : 'text-defaultWhite'
                                    )}
                                >
                                    {singleItem.name}
                                </td>
                                <td
                                    className={clsx(
                                        'w-[10%] font-spartanBold text-xs',
                                        invoiceRedux.colorTheme === 'light'
                                            ? 'text-singleGrey'
                                            : 'text-checkboxViolet'
                                    )}
                                >
                                    {singleItem.quantity}
                                </td>
                                <td
                                    className={clsx(
                                        'w-[20%] text-right font-spartanBold text-xs',
                                        invoiceRedux.colorTheme === 'light'
                                            ? 'text-singleGrey'
                                            : 'text-checkboxViolet'
                                    )}
                                >
                                    <span>£</span>{' '}
                                    {parseFloat(
                                        singleItem.price.toString()
                                    ).toFixed(2)}
                                </td>
                                <td
                                    className={clsx(
                                        'w-[20%] text-right font-spartanBold text-xs text-defaultBlack',
                                        invoiceRedux.colorTheme === 'light'
                                            ? 'text-defaultBlack'
                                            : 'text-defaultWhite'
                                    )}
                                >
                                    <span>£</span>{' '}
                                    {parseFloat(
                                        singleItem.total.toString()
                                    ).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
            <div className="w-full max-md:block md:hidden">
                {invoice.items.map((singleItem: ItemObj) => (
                    <div
                        key={singleItem.name}
                        className="mb-[10px] flex w-full items-center justify-between"
                    >
                        <div className="text-left">
                            <p className="font-spartanBold text-xs text-defaultBlack">
                                {singleItem.name}
                            </p>
                            <p className="font-spartanBold text-xs">
                                {singleItem.quantity} x <span>£</span>{' '}
                                {parseFloat(
                                    singleItem.price.toString()
                                ).toFixed(2)}
                            </p>
                        </div>
                        <p className="font-spartanBold text-xs text-defaultBlack">
                            <span>£</span>{' '}
                            {parseFloat(singleItem.total.toString()).toFixed(2)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SubsectionItemName
