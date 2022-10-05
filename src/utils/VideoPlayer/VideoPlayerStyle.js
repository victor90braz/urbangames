import styled from "styled-components";

const VideoPlayerStyle = styled.div`
  .video {
    width: 100%;
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;

    img {
      width: 50px;
      height: 50px;
    }
  }
`;

export default VideoPlayerStyle;
