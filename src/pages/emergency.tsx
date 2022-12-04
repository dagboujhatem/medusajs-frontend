import { StoreGetProductsParams } from "@medusajs/medusa"
import Head from "@modules/common/components/head"
import EmergencyTemplate from "@modules/emergency/templates/emergency-template"
import Layout from "@modules/layout/templates"
import InfiniteProducts from "@modules/products/components/infinite-products"
import RefinementList from "@modules/store/components/refinement-list"
import { useState } from "react"
import { NextPageWithLayout } from "types/global"

const Emergency: NextPageWithLayout = () => {
    const [params, setParams] = useState<StoreGetProductsParams>({})

    return (
        <>
            <EmergencyTemplate/>
        </>
    )
}

Emergency.getLayout = (page) => <Layout>{page}</Layout>

export default Emergency
