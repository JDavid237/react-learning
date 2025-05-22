import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"

export function App() {
    const {fact, getFactAndUpdateReact} = useCatFact()
    const { image } = useCatImage({ fact })

    async function handleCLick() {
        getFactAndUpdateReact()
    }

    return (
        <main style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            margin: "0 auto",
            fontFamily: "sans-serif",
            width: "70%",
            gap: "0.5rem"

        }}>
            <h1>App de gatos</h1>

            <button onClick={handleCLick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {image &&
                <img
                    style={{ aspectRatio: "1/1" }}
                    width={"50%"}
                    src={image}
                    alt={`Image extracted using the firs three words for ${fact}`}
                />}
        </main>

    )
}