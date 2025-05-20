import { useEffect, useState } from "react"
import Obstacle from "./Obstacle"

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})

  useEffect(() => {
    const handleMove = (event) => {
      const {clientX, clientY} = event
      setPosition({x: clientX, y: clientY})
    }

    if (enabled) {
      window.addEventListener("pointermove", handleMove)
    }

    return () => {
      window.removeEventListener("pointermove", handleMove)
    }
    
  }, [enabled])

  return (
    <>
      <div style={{
        position: "absolute",
        backgroundColor: "#89f",
        borderRadius: "50%",
        opacity: "0.8",
        pointerEvents: "none",
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`,
        zIndez: 2
      }}>

      </div>
      <Obstacle enabled={enabled} position={position}/>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  )
}

export default App