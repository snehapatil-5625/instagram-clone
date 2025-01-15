import { useStyletron } from "baseui";
import ReelsDesign from "../../components/ReelsDesign";

const DEMO_REEL = {
  videoSrc: "/placeholder.mp4",
  text: "Happy Makarsankranti 🪁... more",
  profileImage:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-15%2016-57-15-fFmNSc152EVLyPuFSExFG1JRaRuAG8.png",
  username: "bhagyasirii",
  likes: "299K",
  comments: "603",
  audioTitle: "bhagyasirii • Original audio",
};
export default function ReelsPage() {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <div
        className={css({
          width: "100%",
          maxWidth: "480px",
          height: "100%",
        })}
      >
        <ReelsDesign {...DEMO_REEL} />
      </div>
    </div>
  );
}

// const data = [
//   {
//     videoSrc:
//       "https://videos.pexels.com/video-files/5896379/5896379-uhd_2160_3840_24fps.mp4",
//     text: "learning video",
//     profileImage: "/src/assets/profile.png",
//     username: "sneha_123",
//     likes: "200k",
//     comments: "1000",
//   },
// ];
