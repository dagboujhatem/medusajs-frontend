import Link from 'next/link'

function TopMenu() {
    return (
        <div className="header">
            <div className="container mx-auto flex items-end h-575 pb-8">
                <Link href="/emergency#donate-let-aseel-decide" scroll={true} passHref>
                    Donate &amp; Let ASEEL Decide
                </Link>
                <Link href="/emergency#emergency-products" scroll={true} passHref>
                    Donate a package
                </Link>
                <Link href="/campaign/form" passHref>
                    Start a campaingn
                </Link>
            </div>
        </div>
    )
}

export default TopMenu