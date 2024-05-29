"use client"

import { X } from "@phosphor-icons/react"
import YouTube from "react-youtube"

const VidioPlayer = ({ youtubeId }) => {
    const option = {
        width: "350",
        height: "250"
    }

    return (
        <div className="flex justify-center">
            <YouTube
                videoId={youtubeId}
                onReady={(event) => event.target.pauseVideo()}
                opts={option}
                onError={() => alert("Video is broken, please try another.")}
            />
        </div>
    )
}

export default VidioPlayer