import videoSRC from "./VideoPlayerAssets";
import VideoPlayerStyle from "./VideoPlayerStyle";

function VideoPlayer() {
  const handlePlay = (event) => {
    const iconElement = document.querySelector(".icon");

    if (event.target.paused) {
      event.target.play();
      iconElement.style.opacity = "0";
    } else {
      event.target.pause();
      iconElement.style.opacity = "1";
    }
  };

  return (
    <VideoPlayerStyle>
      <video
        src={videoSRC}
        className="video"
        autoPlay
        muted
        onClick={handlePlay}
      />
      <i className="icon">
        <img src="./images/play-button-icon.png" alt="Play button icon" />
      </i>
    </VideoPlayerStyle>
  );
}

export default VideoPlayer;
