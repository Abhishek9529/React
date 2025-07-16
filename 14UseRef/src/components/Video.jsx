import React, { useRef, useState } from 'react'
import NatureVideo from '../assets/NatureVideo.mp4'

const Video = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const ref = useRef(null);

    function handleClick(){
        const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying)

        if(nextIsPlaying){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }
    return (
        <div>
            <button onClick={handleClick}  className='bg-yellow-200 px-2 mb-4 text-black rounded-md'>
                {isPlaying ? "Pause" : "Play"}
            </button>
            <video
                width='250'
                ref={ref}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source
                    src={NatureVideo}
                    type='video/mp4'
                />

            </video>
        </div>
    )
}

export default Video
