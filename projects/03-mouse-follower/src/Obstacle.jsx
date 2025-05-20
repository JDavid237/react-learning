import { useEffect, useState } from "react"

const Obstacle = ({ enabled, position }) => {
    const [obstacle, setObstacle] = useState({ x: 10, y: 10 })
    const [color, setColor] = useState('red')
    const [count, setCount] = useState(-2);

    useEffect(() => {
        if (position.x < obstacle.x + 50 &&
            position.x + 40 > obstacle.x &&
            position.y < obstacle.y + 60 &&
            position.y + 40 > obstacle.y
        ) {
            const positionY = Math.random() * (document.body.offsetHeight - 60)
            const positionX = Math.random() * (document.body.offsetWidth - 50)
            const r = 100 + Math.floor(Math.random() * 156) // entre 100 y 255
            const g = 100 + Math.floor(Math.random() * 156)
            const b = 100 + Math.floor(Math.random() * 156)
            const randomColor = `rgb(${r}, ${g}, ${b})`

            setObstacle({ x: positionX, y: positionY })
            setColor(randomColor)
            setCount((prev) => prev + 1)
        }

    }, [position, obstacle])

    return (
        <>
            {enabled && <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: 0.6,
                backgroundColor: color,
                border: "2px solid white",
                width: 50,
                height: 60,
                transform: `translate(${obstacle.x}px, ${obstacle.y}px)`,
                zIndex: -1
            }}><span style={{
                display: "flex",
                placeContent: "center",
                fontSize: "35px",
                textShadow: "3px 3px 2.5px black",
                margin: "25%",
                color: "red",
                fontWeight: "bold",

            }}>{count}</span></div>}
        </>
    )


}

export default Obstacle