import { useStyletron } from "baseui";

interface ExploreItem {
  id: string;
  type: "image" | "video";
  url: string;
}

const mockExploreData: ExploreItem[] = [
  { id: "1", type: "video", url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1074&auto=format&fit=crop" },
  { id: "2", type: "image", url: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1074&auto=format&fit=crop" },
  { id: "3", type: "video", url: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1074&auto=format&fit=crop" },
  { id: "4", type: "video", url: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop" },
  { id: "5", type: "image", url: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop" },
  { id: "6", type: "video", url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop" },
  { id: "7", type: "video", url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop" },
  { id: "8", type: "image", url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop" },
  { id: "9", type: "video", url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" },
  { id: "10", type: "image", url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop" },
  { id: "11", type: "video", url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop" },
  { id: "12", type: "video", url: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1000&auto=format&fit=crop" },
  { id: "13", type: "image", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" },
  { id: "14", type: "video", url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop" },
  { id: "15", type: "video", url: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1000&auto=format&fit=crop" },
  { id: "16", type: "image", url: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1000&auto=format&fit=crop" },
  { id: "17", type: "video", url: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1000&auto=format&fit=crop" },
  { id: "18", type: "video", url: "https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?q=80&w=1000&auto=format&fit=crop" },
];

export default function ExplorePage() {
  const [css, $theme] = useStyletron();

  return (
    <div
      className={css({
        padding: "24px 0",
        maxWidth: "935px",
        margin: "0 auto",
        width: "100%",
      })}
    >
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "4px",
          [$theme.mediaQuery.medium]: {
            gap: "28px",
          },
        })}
      >
        {mockExploreData.map((item) => (
          <div
            key={item.id}
            className={css({
              position: "relative",
              width: "100%",
              paddingBottom: "100%", // Maintain square aspect ratio
              cursor: "pointer",
              overflow: "hidden",
            })}
          >
            <img
              src={item.url}
              alt=""
              className={css({
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "opacity 0.2s ease",
                ":hover": {
                  opacity: 0.8,
                },
              })}
            />
            {item.type === "video" && (
              <div
                className={css({
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  color: "#fff",
                  zIndex: 2,
                })}
              >
                <svg
                  aria-label="Reels"
                  fill="currentColor"
                  height="20"
                  role="img"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z"></path>
                  <path d="M12 7V17L17 12L12 7Z"></path>
                </svg>
              </div>
            )}
            <div
              className={css({
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background-color 0.2s ease",
                ":hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                },
                ":hover > div": {
                  opacity: 1,
                },
              })}
            >
              {/* Overlay for like/comment icons could go here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
