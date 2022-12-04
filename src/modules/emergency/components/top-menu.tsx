import Image from 'next/image'
import Link from 'next/link'

function TopMenu() {
    return (
        <div className="container mx-auto header mb-64">
            <div className="flex">
                <Link href="/emergency#donate-let-aseel-decide" scroll={true} passHref>
                    Donate &amp; Let ASEEL Decide
                </Link>
                <Link className='btn-white' href="/emergency#emergency-products" scroll={true} passHref>
                    Donate a package
                </Link>
                <Link className='btn-white' href="/campaign/form" passHref>
                    Start a campaingn
                </Link>
            </div>
            <picture className="play-store">
                <source className='image' type="image/webp" src="https://aseelapp.com/media/er/er-main-banner.webp" />
                <source className='image' type="image/jpg" src="https://aseelapp.com/media/er/er-main-banner.jpg" />
                {/* <Image layout='fill' className="lazyload play-store loaded image" src="https://aseelapp.com/media/er/er-main-banner.jpg" data-src="/media/er/er-main-banner.jpg" alt="ASEEL App" loading="lazy" /> */}
            </picture>
        </div>
    )
}

export default TopMenu