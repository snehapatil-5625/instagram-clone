import { useStyletron } from "baseui";
import ReelsDesign from "../../components/ReelsDesign";
import { Button } from "baseui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRef } from "react";

const MOCK_REELS = [
  {
    id: "1",
    videoSrc: "https://videos.pexels.com/video-files/5896379/5896379-uhd_2160_3840_24fps.mp4",
    text: "Saty ghatnevar aadharit 🤣... more",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    username: "the_junglebook09",
    likes: "304K",
    comments: "2,024",
    shares: "3,557",
    audioTitle: "the_junglebook09 • Original audio",
  },
  {
    id: "2",
    videoSrc: "https://videos.pexels.com/video-files/4492622/4492622-uhd_2160_3840_25fps.mp4",
    text: "Beautiful nature reels #nature #reels",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    username: "nature_vibes",
    likes: "150K",
    comments: "800",
    shares: "1,200",
    audioTitle: "nature_vibes • Nature Sounds",
  },
  {
    id: "3",
    videoSrc: "https://videos.pexels.com/video-files/3816538/3816538-uhd_2160_3840_24fps.mp4",
    text: "Working on the new clone project! 💻 #coding #react",
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    username: "dev_sneha",
    likes: "12K",
    comments: "45",
    shares: "89",
    audioTitle: "dev_sneha • Coding Beats",
  }
];

export default function ReelsPage() {
  const [css] = useStyletron();
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "up" | "down") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerHeight;
      scrollRef.current.scrollBy({
        top: direction === "up" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={css({
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#fff",
      })}
    >
      <div
        ref={scrollRef}
        className={css({
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          /* Hide scrollbar for Chrome, Safari and Opera */
          "::-webkit-scrollbar": {
            display: "none",
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          msOverflowStyle: "none",  /* IE and Edge */
          scrollbarWidth: "none",  /* Firefox */
        })}
      >
        {MOCK_REELS.map((reel) => (
          <div key={reel.id} className={css({ scrollSnapAlign: "start", height: "100vh", display: "flex", alignItems: "center" })}>
            <ReelsDesign {...reel} />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div
        className={css({
          position: "fixed",
          right: "40px",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          zIndex: 10,
        })}
      >
        <Button
          onClick={() => handleScroll("up")}
          kind="secondary"
          overrides={{
            BaseButton: {
              style: {
                borderRadius: "50%",
                padding: "12px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                ":hover": { backgroundColor: "#f2f2f2" }
              }
            }
          }}
        >
          <ChevronUp size={24} />
        </Button>
        <Button
          onClick={() => handleScroll("down")}
          kind="secondary"
          overrides={{
            BaseButton: {
              style: {
                borderRadius: "50%",
                padding: "12px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                ":hover": { backgroundColor: "#f2f2f2" }
              }
            }
          }}
        >
          <ChevronDown size={24} />
        </Button>
      </div>
    </div>
  );
}
