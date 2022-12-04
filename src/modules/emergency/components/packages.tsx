import Image from "next/image"

function Packages() {
    return <div id="donate-let-aseel-decide">
        <div className="container mx-auto px-2">
            <h1 className="text-center section-name">Emergency Packages</h1>
            <div className="">
                <div className="flex-container">
                    <div className="flex-item">
                        <Image className="lazyload border-radius-5 loaded" width='321' height='321' src="https://aseelapp.com/media/catalog/product/c/h/child_relief.jpg" data-src="https://aseelapp.com/media/catalog/product/c/h/child_relief.jpg" alt="image item" />
                        <div className="package-block">
                            <p><strong>Emergency Package for Child Relief</strong></p>
                            <p><strong>USD 61</strong></p>
                            <button className="btn-success mt-3">View</button>
                        </div>
                    </div>
                    <div className="flex-item">
                        <Image className="lazyload border-radius-5 loaded" width='321' height='321' src="https://aseelapp.com/media/catalog/product/w/i/winter_packages_1.jpg" data-src="https://aseelapp.com/media/catalog/product/w/i/winter_packages_1.jpg" alt="image item" />
                        <div className="package-block">
                            <p><strong>Large Emergency Winter Package</strong></p>
                            <p><strong>USD 95</strong></p>
                            <button className="btn-success mt-3">View</button>
                        </div>
                    </div>
                    <div className="flex-item">
                        <Image className="lazyload border-radius-5 loaded" width="321" height="321" src="https://aseelapp.com/media/catalog/product/e/r/er_food.jpg" data-src="https://aseelapp.com/media/catalog/product/e/r/er_food.jpg" alt="image item" />
                        <div className="package-block">
                            <p><strong>Emergency Food Package</strong></p>
                            <p><strong>USD 92</strong></p>
                            <button className="btn-success mt-3">View</button>
                        </div>
                    </div>
                    <div className="flex-item">
                        <Image className="lazyload border-radius-5 loaded" width="321" height="321" src=" https://aseelapp.com/media/catalog/product/b/a/baby_1.jpg" data-src=" https://aseelapp.com/media/catalog/product/b/a/baby_1.jpg" alt="image item" />
                        <div className="package-block">
                            <p><strong>Emergency Baby Care Package</strong></p>
                            <p><strong>USD 46</strong></p>
                            <button className="btn-success mt-3">View</button>
                        </div>
                    </div>
                    <div className="flex-item">
                        <Image className="lazyload border-radius-5 loaded" width="321" height="321" src=" https://aseelapp.com/media/catalog/product/l/i/life_package.jpg" data-src=" https://aseelapp.com/media/catalog/product/l/i/life_package.jpg" alt="image item" />
                        <div className="package-block">
                            <p><strong>Emergency Life Package</strong></p>
                            <p><strong>USD 211</strong></p>
                            <button className="btn-success mt-3">View</button>
                        </div>
                    </div>
                    <div className="flex-item">
                        <Image className="css lazyload border-radius-5 loaded" width="321" height="321" src=" https://aseelapp.com/media/catalog/product/f/i/first_aid.jpg" data-src=" https://aseelapp.com/media/catalog/product/f/i/first_aid.jpg" alt="image item" />
                        <div className="package-block">
                            <p><strong>Emergency First Aid Package</strong></p>
                            <p><strong>USD 46</strong></p>
                            <button className="btn-success mt-3">View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Packages