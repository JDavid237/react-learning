import { Link } from "../Link"

export default function HomePage() {
    return (
        <>
            <h1>Home</h1>
            <p>Esta es una pagina de ejemplo para crear react router</p>

            <Link to="/es/about">Ir a sobre nosotros</Link>
        </>
    )
}