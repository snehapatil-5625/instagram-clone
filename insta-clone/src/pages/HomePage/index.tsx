import { useStyletron } from "baseui";
import Post from "../../components/Post";
import RightSidebar from "../../components/RightSidebar";

export default function HomePage() {
  const [css, $theme] = useStyletron();

  const posts = [
    {
      username: "kartikkohlii18",
      avatar: "https://avatars.dicebear.com/api/human/kartik.svg",
      time: "18h",
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=470&q=80",
      likes: "131.5K",
      caption: "Sorry Anushka Bhabhi 😢❤️ .....",
      hashtags: ["viratkohli", "viratian", "trending", "cricket", "viratkohlifanpage"],
      commentsCount: 469,
    },
    {
      username: "_suraj_96k",
      avatar: "https://avatars.dicebear.com/api/human/suraj.svg",
      time: "16h",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=470&q=80",
      likes: "12,432",
      caption: "Living the dream! ✨",
      hashtags: ["travel", "vibe", "nature"],
      commentsCount: 89,
    },
  ];

  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        width: "100%",
        gap: "64px",
        paddingTop: "24px",
      })}
    >
      {/* Central Feed */}
      <div
        className={css({
          width: "100%",
          maxWidth: "470px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        })}
      >
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>

      {/* Right Sidebar */}
      <div
        className={css({
          display: "none",
          [$theme.mediaQuery.large]: {
            display: "block",
            width: "320px",
          },
        })}
      >
        <RightSidebar />
      </div>
    </div>
  );
}
