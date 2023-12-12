import { InvoiceObj, ItemObj } from '../../../types/interfaces'

interface Props {
    invoice: InvoiceObj
}

const SubsectionItemName = ({ invoice }: Props) => {
    return (
        <div className="bg-tableGrey p-4 pb-6">
            <table className="w-full border-separate border-spacing-[20px]">
                <thead>
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
                            <td className="w-[50%] text-left font-spartanBold text-xs text-defaultBlack">
                                {singleItem.name}
                            </td>
                            <td className="w-[10%] font-spartanBold text-xs">
                                {singleItem.quantity}
                            </td>
                            <td className="w-[20%] text-right font-spartanBold text-xs">
                                <span>£</span>{' '}
                                {parseFloat(
                                    singleItem.price.toString()
                                ).toFixed(2)}
                            </td>
                            <td className="w-[20%] text-right font-spartanBold text-xs text-defaultBlack">
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
    )
}

export default SubsectionItemName
