import ItemList from '../ItemList'

interface Props {
    onClose: React.MouseEventHandler<HTMLButtonElement>
}

const FormModal = ({ onClose }: Props) => {
    return (
        <>
            <div
                className="fixed left-[87px] top-0 z-[100] h-screen w-[630px] overflow-y-scroll rounded-r-2xl bg-defaultWhite pl-[50px] pr-[42px] pt-[40px]"
                id="form-modal"
            >
                <div>
                    <h2 className="mb-[30px] font-spartanBold text-[24px] leading-[32px] text-defaultBlack">
                        New invoice
                    </h2>
                    <form>
                        <h3 className="mb-[12px] font-spartanBold text-xs text-packmanUp">
                            Bill From
                        </h3>
                        <label
                            htmlFor="street-address"
                            className="font-spartanMedium text-xs text-singleGrey"
                        >
                            Street Address
                        </label>
                        <input
                            type="text"
                            id="street-address"
                            className="mb-[12px] h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack"
                        />
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
                                />
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
                                />
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
                                />
                            </div>
                        </div>

                        <h3 className="mb-[12px] font-spartanBold text-xs text-packmanUp">
                            Bill To
                        </h3>
                        <div>
                            <label
                                htmlFor="clients-name"
                                className="font-spartanMedium text-xs text-singleGrey"
                            >
                                Client's Name
                            </label>
                            <input
                                type="text"
                                id="clients-name"
                                className="mb-[12px] h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="clients-email"
                                className="font-spartanMedium text-xs text-singleGrey"
                            >
                                Client's Email
                            </label>
                            <input
                                type="email"
                                id="clients-email"
                                className="mb-[12px] h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="street-address-from"
                                className="font-spartanMedium text-xs text-singleGrey"
                            >
                                Street Address
                            </label>
                            <input
                                type="text"
                                id="street-address-from"
                                className="mb-[12px] h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack"
                            />
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
                                />
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
                                />
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
                                />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-[48%]">
                                <label
                                    htmlFor="issue-date"
                                    className="font-spartanMedium text-xs text-singleGrey"
                                >
                                    Issue Date
                                </label>
                                <input type="date" id="issue-date" />
                            </div>
                            <div className="w-[48%]">
                                <label className="font-spartanMedium text-xs text-singleGrey">
                                    Payment Terms
                                </label>
                                <select id="payment-terms">
                                    <option>Net 1 Day</option>
                                    <option>Net 7 Days</option>
                                    <option>Net 14 s</option>
                                    <option>Net 30 Days</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-[20px]">
                            <label
                                htmlFor="project-description"
                                className="font-spartanMedium text-xs text-singleGrey"
                            >
                                Project Description
                            </label>
                            <input
                                type="text"
                                id="project-description"
                                className="mb-[12px] h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack"
                            />
                        </div>
                        <ItemList />
                    </form>
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
                    <button className="text-draftText mr-[15px] rounded-[50px] bg-asideBg pb-[15px] pl-[22px] pr-[22px] pt-[15px] font-spartanBold text-xs">
                        Save as Draft
                    </button>
                    <button className="rounded-[50px] bg-packmanUp pb-[15px] pl-[22px] pr-[22px] pt-[15px] font-spartanBold text-xs text-defaultWhite">
                        Save & Send
                    </button>
                </div>
            </div>
        </>
    )
}

export default FormModal
