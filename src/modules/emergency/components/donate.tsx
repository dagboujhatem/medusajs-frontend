import Image from "next/image"
import { FieldValues, useForm } from "react-hook-form"

interface DonationData extends FieldValues {
    amount: string
    percent: string
    total: string
}

function Donate() {
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors },
    } = useForm<DonationData>()

    const onChange = () => {
        const {amount , percent} = getValues()
        const newTotal = +amount + (100* +percent ) / +amount
        setValue('total', newTotal.toString())
    }

    const onSubmit = handleSubmit(async (data) => {
        alert(JSON.stringify(data))
    })

    return <>
        <div className="container mx-auto bg-green donation-container my-16">
            <div className="py-10">
                <h1 className="text-right section-name">
                    Donate and let Aseel Decide
                </h1>
                <div className="flex flex-row my-2 donate-row">
                    <div className="donate-item">
                        <Image className="lazyload loaded" src="https://aseelapp.com/media/catalog/product//d/o/donate-and-let-aseel-decide.png" data-src="https://aseelapp.com/media/catalog/product//d/o/donate-and-let-aseel-decide.png" loading="lazy" alt="donate image" width={277} height={277} />
                    </div>
                    <div className="donate-item">
                        <form className="donate-form" onSubmit={onSubmit}>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-icon">USD</div>
                                    <div className="input-group-area">
                                        <input type="number" className="form-input py-3 text-right text-black-500" placeholder="USD"
                                            defaultValue="0" {...register("amount", {
                                                required: "Amount is required.",
                                                min: {
                                                    value: 1,
                                                    message: 'Amount must be greater than or equal to 1.'
                                                },
                                                max: {
                                                    value: 1000000,
                                                    message: 'Amount must be less than or equal to 1000000.'
                                                },
                                                onChange: (e) => onChange()
                                            })} />
                                    </div>
                                    <div className="input-group-icon">.00</div>
                                </div>
                                <div className="pl-2 text-red-500">
                                    {errors.amount?.message}
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-icon">Assel type</div>
                                    <div className="input-group-area">
                                        <input type="number" className="form-input py-3 text-right text-black-500" placeholder="Assel type"
                                            defaultValue="15" {...register("percent", {
                                                required: "Percent is required.",
                                                min: {
                                                    value: 0,
                                                    message: 'Amount must be greater than or equal to 0.'
                                                },
                                                max: {
                                                    value: 100,
                                                    message: 'Amount must be less than or equal to 100.'
                                                },
                                                onChange: (e) => onChange()
                                            })} />
                                    </div>
                                    <div className="input-group-icon">%</div>
                                </div>
                                <div className="pl-2 text-red-500">
                                    {errors.percent?.message}
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group py-3">
                                    <div className="input-group-icon">Total due USD</div>
                                    <div className="input-group-area">
                                        <input type="number" className="form-input py-3 text-right text-black-500" placeholder="Total due USD" readOnly={true}
                                            defaultValue="0" {...register("total", { required: "Total is required." })} />
                                    </div>
                                    <div className="input-group-icon">.00</div>
                                </div>
                                <div className="pl-2 text-red-500">
                                    {errors.total?.message}
                                </div>
                            </div>
                            <button className="btn-success px-4 py-3" type="submit">Donate</button>
                        </form>
                    </div>
                </div>
                <p className="text-justify">Some of the internal refugees or people in-need require things that can’t be added as packages. For example, we get requests for pots and pans, bags or transport charges to their cities. Use the donate and let ASEEL decide to that and we will decide and report back to you.</p>
            </div>
        </div>
    </>
}

export default Donate