import { Link } from "../Link"

const i18n = {
    es: {
        title: "Sobre nosotros",
        button: "Ir a la home",
        descripcion: "Holaaaa"
    },
    en: {
        title: "About us",
        button: "Go to home",
        descripcion: "Hiiiii"
    }
}

const useI18n = (lang) => {
    return i18n[lang] || i18n.en
}

export default function AboutPage({ routeParams }) {

    const translate = useI18n(routeParams.lang ?? 'es')
    return (
        <>
            <h1>{translate.title}</h1>
            <p>{translate.descripcion}</p>
            <Link to="/">{translate.button}</Link>
        </>
    )
}