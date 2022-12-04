
import Layout from "@modules/layout/templates"
import { NextPageWithLayout } from "types/global"

const Form: NextPageWithLayout = () => {
    return (
        <div className="container mx-auto py-24">
            <h1 className="text-center text-4xl">Organizer Information</h1>
        </div>
    )
}

Form.getLayout = (page) => <Layout>{page}</Layout>

export default Form