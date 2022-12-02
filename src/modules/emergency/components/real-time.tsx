import Image from "next/image"

function RealTime() {
    return <>
        <div className="container my-12 mx-auto">
            <div className="columns">
                <h1 className="text-green text-center my-12">Real-time Aseel Emergency Response Update</h1>
                <div className="flex flex-row justify-between real-row">
                    <div className="real-item flex flex-row">
                        <Image className="lazyload loaded" src="https://aseelapp.com/media/er/family.svg" data-src="https://aseelapp.com/media/er/family.svg" alt="Help Afghanistan" width={50} height={65} />
                        <div className="real-text px-8 py-12">
                            <h4>Families supported</h4>
                            <p>66337</p>
                        </div>
                    </div>
                    <div className="real-item flex flex-row">
                        <Image className="lazyload loaded" src="https://aseelapp.com/media/er/family.svg" data-src="https://aseelapp.com/media/er/family.svg" alt="Help Afghanistan" width={50} height={65} />
                        <div className="real-text px-8 py-12">
                            <h4>Individuals supported</h4>
                            <p>464359</p>
                        </div>
                    </div>
                    <div className="real-item flex flex-row">
                        <Image className="lazyload loaded" src="https://aseelapp.com/media/er/food.svg" data-src="https://aseelapp.com/media/er/food.svg" alt="Help Afghanistan" width={50} height={65} />
                        <div className="real-text px-8 py-12">
                            <h4>Food packages donated</h4>
                            <p>33169</p>
                        </div>
                    </div>
                    <div className="real-item flex flex-row">
                        <Image className="lazyload loaded" src="https://aseelapp.com/media/er/medical.svg" data-src="https://aseelapp.com/media/er/medical.svg" alt="Help Afghanistan" width={50} height={65} />
                        <div className="real-text px-8 py-12">
                            <h4>First Aid/Medical Packages donated</h4>
                            <p>11056</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between real-row">
                    <div className="real-item flex flex-row">
                        <Image className="lazyload loaded" src="https://aseelapp.com/media/er/life.svg" data-src="https://aseelapp.com/media/er/life.svg" alt="Help Afghanistan" width={50} height={65} />
                        <div className="real-text px-8 py-12">
                            <h4>Life Packages donated</h4>
                            <p>5528</p>
                        </div>
                    </div>
                    <div className="real-item flex flex-row">
                        <Image className="lazyload loaded" src="https://aseelapp.com/media/er/baby-care.svg" data-src="https://aseelapp.com/media/er/baby-care.svg" alt="Help Afghanistan" width={50} height={65} />
                        <div className="real-text px-8 py-12">
                            <h4>Baby-care Packages donated</h4>
                            <p>16584</p>
                        </div>
                    </div>
                    <div className="real-item flex flex-row">
                        <Image className="lazyload loaded" src="https://aseelapp.com/media/er/afghanistan.svg" data-src="https://aseelapp.com/media/er/afghanistan.svg" alt="Help Afghanistan" width={50} height={65} />
                        <div className="real-text px-8 py-12">
                            <h4>Cities covered</h4>
                            <p>24</p>
                        </div>
                    </div>
                    <div className="real-item flex flex-row">
                        <Image className="lazyload loaded" src="https://aseelapp.com/media/er/volunteers.svg" data-src="https://aseelapp.com/media/er/volunteers.svg" alt="Help Afghanistan" width={50} height={65} />
                        <div className="real-text px-8 py-12">
                            <h4>Active volunteers</h4>
                            <p>180</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default RealTime