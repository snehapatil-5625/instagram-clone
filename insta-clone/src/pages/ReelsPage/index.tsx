import { useStyletron } from "baseui";
import ReelsDesign from "../../components/ReelsDesign";

export default function ReelsPage() {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        maxWidth: "400px",
        margin: "0 auto",
        justifyContent: "center",
        alignItems: "center",
        opacity: 1,
        objectFit: "cover",
      })}
    >
      {data.map((reel) => (
        <ReelsDesign
          videoSrc={reel.videoSrc}
          text={reel.text}
          profileImage={reel.profileImage}
          username={reel.username}
          likes={reel.likes}
          comments={reel.comments}
        />
      ))}
    </div>
  );
}

const data = [
  {
    videoSrc:
      "https://videos.pexels.com/video-files/5896379/5896379-uhd_2160_3840_24fps.mp4",
    text: "learning video",
    profileImage: "/src/assets/profile.png",
    username: "sneha_123",
    likes: "200k",
    comments: "1000",
  },
  {
    videoSrc: "https://www.youtube.com/watch?v=nnsrwPu-MWo",
    text: "learning video",
    profileImage: "/src/assets/profile.png",
    username: "sneha_123",
    likes: "200k",
    comments: "1000",
  },
];
