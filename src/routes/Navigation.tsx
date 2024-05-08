import Loader from "@/components/common/Loader"
import { Suspense } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { routes } from "./routes"
import PublicRoutes from "./PublicRoutes"

const Navigation = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <>
                    <Routes>
                        <Route path="/" element={<PublicRoutes />}>
                            {
                                routes.map(route =>
                                    (
                                        <Route
                                            key={route.path}
                                            path={route.path}
                                            element={<route.Component />}
                                        />
                                    )
                                )
                            }
                            <Route path="/*" element={<Navigate to="/" replace />} />
                        </Route>
                    </Routes>
                </>
            </Suspense>
        </BrowserRouter>
    )
}

export default Navigation