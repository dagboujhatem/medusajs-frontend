import Image from "next/image"

function Campaigns() {
    return <div className="bg-green py-10">
        <div className="md:container md:mx-auto px-4">
            <div className="columns">
                <div className="flex flex-row justify-around items-center my-5">
                    <h1 className="text-left section-name">
                        Current People-Led Campaigns
                    </h1>
                    <div className="w-100 bg-red-100">
                        <button className="btn-success">
                            View all
                        </button>
                    </div>
                </div>
                {/* <div>
                    <div className="c">
                        <div className="campaign-item">
                            <Image className="lazyload border-radius-5 loaded" src=" https://aseelapp.com/media/catalog/product//8/0/80566cd7-5356-4fd9-a578-6bf9d84f15bb.jpg" data-src=" https://aseelapp.com/media/catalog/product//8/0/80566cd7-5356-4fd9-a578-6bf9d84f15bb.jpg" width={100} height={100} />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
}

export default Campaigns