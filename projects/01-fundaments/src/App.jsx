import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

function App() {
    const juan = {initialFollow: true, userName: "midudev"}

    return (
        <div className="content">
            <TwitterFollowCard {...juan}>
                Juan David
            </TwitterFollowCard>
            <TwitterFollowCard initialFollow={false} userName="hatsune">
                Hatsune Miku
            </TwitterFollowCard>

        </div>

    )
}

export default App