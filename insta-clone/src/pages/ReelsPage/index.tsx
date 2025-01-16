import { useStyletron } from "baseui";
import ReelsDesign from "../../components/ReelsDesign";

const DEMO_REEL = {
  videoSrc:
    "https://videos.pexels.com/video-files/5896379/5896379-uhd_2160_3840_24fps.mp4",
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
        height: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        marginBottom: "20px",
      })}
    >
      <div
        className={css({
          width: "100%",
          maxWidth: "350px",
          height: "auto",
        })}
      >
        <ReelsDesign {...DEMO_REEL} />
      </div>
    </div>
  );
}
