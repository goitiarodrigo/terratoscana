import Layout from "@/components/Layout"
import { Outlet } from "react-router"

const PublicRoutes = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    )
}

export default PublicRoutes