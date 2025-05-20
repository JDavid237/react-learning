import { useState } from "react";

export function TwitterFollowCard({ userName = "unknown", children, initialFollow }) {
    const [isFollowing, setIsFollowing] = useState(initialFollow);

    const text = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClass = isFollowing 
    ? "tw-followCard-button isFollowing" 
    :"tw-followCard-button";

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar"
                    alt="avatar" src={`https://unavatar.io/${userName}`} />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClass} onClick={handleClick}>
                    <span>{text}</span>
                </button>
            </aside>
        </article>
    )
}