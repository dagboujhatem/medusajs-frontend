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
                <div className="">
                    <div className="flex-container">
                        <div className="flex flex-col items-end campaign-item">
                            <Image className="lazyload border-radius-5 loaded" width='321' height='321' src="https://aseelapp.com/media/catalog/product//8/0/80566cd7-5356-4fd9-a578-6bf9d84f15bb.jpg" alt="image item" />
                            <div className="package-block">
                                <p className="h-40"><strong>Food Support for Afghan Families</strong></p>
                                <p className="my-4">Many of us are lucky enough to take food for granted - no worries abou...</p>
                                <div className="mb-4 w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div className="progress-green h-2 rounded-full w-0"></div>
                                </div>
                                <p><strong>0 raised of $5000</strong></p>
                                <button className="btn-success mt-3">View</button>
                            </div>
                        </div>
                        <div className="campaign-item">
                            <Image className="lazyload border-radius-5 loaded" width='321' height='321' src="https://aseelapp.com/media/catalog/product//m/y/my_project-1_6_.png" alt="image item" />
                            <div className="package-block">
                                <p className="h-40"><strong>Emergency Winter Campaign for Afghanistan</strong></p>
                                <p className="my-4">OneAfghanistan &amp; Aseel have joined together to help the winter emergen...</p>
                                <div className="mb-4 w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div className="progress-green h-2 rounded-full w-40"></div>
                                </div>
                                <p><strong>5910 raised of $15000</strong></p>
                                <button className="btn-success mt-3">View</button>
                            </div>
                        </div>
                        <div className="campaign-item">
                            <Image className="lazyload border-radius-5 loaded" width="321" height="321" src="https://aseelapp.com/media/catalog/product//m/y/my_project-1_1_.jpg" alt="image item" />
                            <div className="package-block">
                                <p className="h-40"><strong>Winter Season Support for Families in Maidan-Wardak Province, Afghanistan</strong></p>
                                <p className="my-4">The goal of this campaign is to gather donations for emergency food an...</p>
                                <div className="mb-4 w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div className="progress-green h-2 rounded-full w-15"></div>
                                </div>
                                <p><strong>775 raised of $5000</strong></p>
                                <button className="btn-success mt-3">View</button>
                            </div>
                        </div>
                        <div className="campaign-item">
                            <Image className="lazyload border-radius-5 loaded" width="321" height="321" src="https://aseelapp.com/media/catalog/product//i/m/img_8887_1_.jpg" alt="image item" />
                            <div className="package-block">
                                <p className="h-40"><strong>Relief for Jawand District, Badghis</strong></p>
                                <p className="my-4">Badghis is one of the most deprived provinces of Afghanistan: one of o...</p>
                                <div className="mb-4 w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div className="progress-green h-2 rounded-full w-10"></div>
                                </div>
                                <p><strong>362 raised of $3000</strong></p>
                                <button className="btn-success mt-3">View</button>
                            </div>
                        </div>
                        <div className="campaign-item">
                            <Image className="lazyload border-radius-5 loaded" width="321" height="321" src="https://aseelapp.com/media/catalog/product//i/m/img_8833.jpg" alt="image item" />
                            <div className="package-block">
                                <p className="h-40"><strong>Support Logar Province Relief Efforts for Winter</strong></p>
                                <p className="my-4">My ancestry traces back to Logar, Afghanistan. Many of my extended fa...</p>
                                <div className="mb-4 w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div className="progress-green h-2 rounded-full w-60"></div>
                                </div>
                                <p><strong>1338 raised of $2000</strong></p>
                                <button className="btn-success mt-3">View</button>
                            </div>
                        </div>
                        <div className="campaign-item">
                            <Image className="css lazyload border-radius-5 loaded" width="321" height="321" src=" https://aseelapp.com/media/catalog/product//m/y/my_project-1_3_.png" alt="image item" />
                            <div className="package-block">
                                <p className="h-40"><strong>Winter food packages for Khost province</strong></p>
                                <p className="my-4">The winter will be hard for many people in Afghanistan struggling to f...</p>
                                <div className="mb-4 w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div className="progress-green h-2 rounded-full w-12"></div>
                                </div>
                                <p><strong>1515 raised of $9200</strong></p>
                                <button className="btn-success mt-3">View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Campaigns