import Image from "next/image"

function MobileApp() {
    return <>
        <div className="container mx-auto px-5 container-paiding">
            <div className="my-24">
                <div className="grid grid-cols-2 custom-grid">
                    <div className="grid-cols-1">
                        <h1 className="text-green">ASEEL Mobile Apps Now Available</h1>
                        <p className="text text-justify my-8">
                            ASEEL assures our Tribe that we are doubling down on our commitment to provide aid to Afghan families, despite challenging circumstances.
                        </p>
                        <div className="text-center">
                            <Image className="lazyload play-store loaded" src="https://aseelapp.com/media/er/play-store.svg" data-src="https://aseelapp.com/media/er/play-store.svg" alt="ASEEL App" width={276} height={100} />
                        </div>
                    </div>
                    <picture className="grid-cols-1">
                        <source type="image/webp" srcSet="https://aseelapp.com/media/er/app.webp" />
                        <source type="image/png" srcSet="https://aseelapp.com/media/er/app.png" />
                        <Image className="lazyload loaded w-full aspect-square" src="https://aseelapp.com/media/er/app.png" data-src="https://aseelapp.com/media/er/app.png" alt="ASEEL App" loading="lazy" width={417} height={431} />
                    </picture>
                </div>
            </div>
        </div>
    </>
}

export default MobileApp