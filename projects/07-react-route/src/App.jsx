import { lazy, Suspense } from "react"

import { Router } from "./Router"
import { SearchPage } from "./pages/Search"
import { Route } from "./Route"

const AboutPage = lazy(() => import("./pages/About"))
const HomePage = lazy(() => import("./pages/Home"))

const routes = [
    {
        path: "/search/:query",
        Component: SearchPage
    }
]

function App() {

    return (
        <main>
            <Suspense fallback={null}>
                <Router routes={routes}>
                    <Route path="/" Component={HomePage} />
                    <Route path="/:lang/about" Component={AboutPage} />
                </Router>
            </Suspense>
        </main>
    )
}

export default App