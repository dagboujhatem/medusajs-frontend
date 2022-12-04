import EmergencyTemplate from "@modules/emergency/templates/emergency-template"
import Layout from "@modules/layout/templates"
import { NextPageWithLayout } from "types/global"

const Emergency: NextPageWithLayout = () => {
    return (
        <>
            <EmergencyTemplate/>
        </>
    )
}

Emergency.getLayout = (page) => <Layout>{page}</Layout>

export default Emergency
