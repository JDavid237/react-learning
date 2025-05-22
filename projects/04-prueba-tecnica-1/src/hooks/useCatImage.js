import { useEffect, useState } from "react";

export function useCatImage({fact}) {
        const [image, setImage] = useState()

        useEffect(() => {
            if (!fact) return

            const firstWord = fact.split(" ", 3).join(" ")
            fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red`)
                .then(res => {
                    const { url } = res
                    setImage(url)
                })
        }, [fact])

        return {image}
    }