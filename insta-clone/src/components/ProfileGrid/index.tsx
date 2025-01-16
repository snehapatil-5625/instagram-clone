import { useStyletron } from "baseui";
import { Block } from "baseui/block";
import { StatefulTabs, Tab } from "baseui/tabs";
import { HeartIcon, MessageSquare } from "lucide-react";
import { Card } from "baseui/card";
import React from "react";

interface Post {
  id: string;
  imageUrl: string;
  likes: number;
  comments: number;
}
export default function ProfileGrid() {
  const [css, theme] = useStyletron();

  const posts: Post[] = [
    {
      id: "1",
      imageUrl:
        "https://marketplace.canva.com/EAFPR8PiiGQ/1/0/1600w/canva-peach-gradient-happy-diwali-instagram-post-qsbv3MPEze8.jpg",
      likes: 3,
      comments: 0,
    },
    {
      id: "2",
      imageUrl:
        "https://marketplace.canva.com/EAFPR8PiiGQ/1/0/1600w/canva-peach-gradient-happy-diwali-instagram-post-qsbv3MPEze8.jpg",
      likes: 3,
      comments: 0,
    },
  ];

  return (
    <Block
      width="100%"
      margin="0 auto"
      padding={["16px", "16px", "20px", "40px"]}
    >
      <StatefulTabs
        initialState={{ activeKey: "0" }}
        overrides={{
          Root: {
            style: {
              borderBottom: `1px solid ${theme.colors.borderOpaque}`,
            },
          },
          TabContent: {
            style: {
              justifyContent: "center",
            },
          },
          TabBar: {
            style: {
              height: "1px",
            },
          },
          Tab: {
            style: {
              fontSize: "12px",
              letterSpacing: "1px",
              paddingTop: "16px",
              paddingBottom: "16px",
            },
          },
        }}
      >
        <Tab
          id="0"
          title={
            <Block display="flex" alignItems="center" gridColumnGap="8px">
              <span className={css({ fontSize: "12px", fontWeight: 600 })}>
                POSTS
              </span>
            </Block>
          }
        >
          <PostsGrid posts={posts} />
        </Tab>
        <Tab
          id="1"
          title={
            <Block display="flex" alignItems="center" gridColumnGap="4px">
              <span className={css({ fontSize: "12px", fontWeight: 600 })}>
                SAVED
              </span>
            </Block>
          }
        ></Tab>
        <Tab
          id="2"
          title={
            <Block display="flex" alignItems="center" gridColumnGap="4px">
              <span className={css({ fontSize: "12px", fontWeight: 600 })}>
                TAGGED
              </span>
            </Block>
          }
        ></Tab>
      </StatefulTabs>
    </Block>
  );
}

function PostsGrid({ posts }: { posts: Post[] }) {
  return (
    <Block
      display="grid"
      gridTemplateColumns={["2fr", "1fr 1fr", "1fr 1fr 1fr"]}
      gridGap="2px"
      paddingTop="4px"
    >
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Block>
  );
}

function PostCard({ post }: { post: Post }) {
  const [css] = useStyletron();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card
      overrides={{
        Root: {
          style: {
            position: "relative",
            padding: 0,
            backgroundColor: "transparent",
            cursor: "pointer",
            border: "none",
          },
          props: {
            onMouseEnter: () => setIsHovered(true),
            onMouseLeave: () => setIsHovered(false),
          },
        },
      }}
    >
      <div
        className={css({
          position: "relative",
          width: "100%",
          paddingBottom: "100%",
        })}
      >
        <img
          src={post.imageUrl || "/placeholder.svg"}
          className={css({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          })}
          alt=""
        />
        {isHovered && (
          <Block
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            backgroundColor="rgba(0, 0, 0, 0.3)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gridColumnGap="10px"
          >
            <Block
              display="flex"
              alignItems="center"
              color="white"
              gridColumnGap="5px"
            >
              <HeartIcon size={24} />
              <span className={css({ fontWeight: 600 })}>{post.likes}</span>
            </Block>
            <Block
              display="flex"
              alignItems="center"
              color="white"
              gridColumnGap="5px"
            >
              <MessageSquare size={24} />
              <span className={css({ fontWeight: 600 })}>{post.comments}</span>
            </Block>
          </Block>
        )}
      </div>
    </Card>
  );
}
