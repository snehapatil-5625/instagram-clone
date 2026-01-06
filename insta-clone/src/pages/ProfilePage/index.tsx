import { useStyletron } from "baseui";
import { Avatar } from "baseui/avatar";
import { Button } from "baseui/button";
import { Settings, Grid, Bookmark, UserSquare2, Plus, Link as LinkIcon, Heart, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SettingsModal from "../../components/SettingsModal";
import NewHighlightModal from "../../components/NewHighlightModal";

const MOCK_POSTS = [
  { id: "1", url: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1000&auto=format&fit=crop" },
  { id: "2", url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop" },
  { id: "3", url: "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1000&auto=format&fit=crop" },
  { id: "4", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop" },
  { id: "5", url: "https://images.unsplash.com/photo-1546768292-fb12f6c92568?q=80&w=1000&auto=format&fit=crop" },
  { id: "6", url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop" },
  { id: "7", url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop" },
  { id: "8", url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop" },
  { id: "9", url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop" },
];

export default function ProfilePage() {
  const [css, $theme] = useStyletron();
  const [activeTab, setActiveTab] = useState("posts");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isNewHighlightOpen, setIsNewHighlightOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={css({
        maxWidth: "935px",
        margin: "0 auto",
        padding: "30px 20px 0",
        color: "#262626",
      })}
    >
      {/* Header Section */}
      <header
        className={css({
          display: "flex",
          marginBottom: "44px",
          gap: "30px",
          [$theme.mediaQuery.medium]: {
            gap: "100px",
          },
        })}
      >
        {/* Avatar Area with Note */}
        <div className={css({ position: "relative", flexShrink: 0 })}>
          <div
            className={css({
              position: "absolute",
              top: "-5px",
              left: "20px",
              backgroundColor: "#fff",
              border: "1px solid #efefef",
              borderRadius: "12px",
              padding: "4px 10px",
              fontSize: "12px",
              color: "#8e8e8e",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              zIndex: 2,
            })}
          >
            Note...
          </div>
          <Avatar
            name="anthaathico"
            size="150px"
            src=""
            overrides={{
              Root: {
                style: {
                  backgroundColor: "#000",
                  border: "1px solid #efefef",
                },
              },
            }}
          />
        </div>

        {/* Info Area */}
        <section className={css({ flex: 1 })}>
          <div className={css({ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px", flexWrap: "wrap" })}>
            <h2 className={css({ fontSize: "20px", fontWeight: 400 })}>anthaathico</h2>
            <Settings
              size={24}
              cursor="pointer"
              onClick={() => setIsSettingsOpen(true)}
            />
            <div className={css({ display: "flex", gap: "8px" })}>
              <Button
                kind="secondary"
                size="compact"
                overrides={{
                  BaseButton: {
                    style: {
                      backgroundColor: "#efefef",
                      color: "#000",
                      borderRadius: "8px",
                      padding: "0 16px",
                      height: "32px",
                      fontSize: "14px",
                      fontWeight: 600,
                    },
                  },
                }}
              >
                Edit profile
              </Button>
              <Button
                kind="secondary"
                size="compact"
                overrides={{
                  BaseButton: {
                    style: {
                      backgroundColor: "#efefef",
                      color: "#000",
                      borderRadius: "8px",
                      padding: "0 16px",
                      height: "32px",
                      fontSize: "14px",
                      fontWeight: 600,
                    },
                  },
                }}
                onClick={() => navigate("/archive")}
              >
                View archive
              </Button>
            </div>
          </div>

          <ul className={css({ display: "flex", gap: "40px", listStyle: "none", padding: 0, marginBottom: "20px" })}>
            <li>
              <span className={css({ fontWeight: 600 })}>22</span> posts
            </li>
            <li>
              <span className={css({ fontWeight: 600 })}>20</span> followers
            </li>
            <li>
              <span className={css({ fontWeight: 600 })}>0</span> following
            </li>
          </ul>

          <div className={css({ fontSize: "14px", lineHeight: "1.4" })}>
            <div className={css({ fontWeight: 600, marginBottom: "4px" })}>Anthaathi Private Limited</div>
            <div className={css({ color: "#8e8e8e", marginBottom: "4px" })}>Product/service</div>
            <div>At Anthaathi Private Limited,</div>
            <div className={css({ fontWeight: 600 })}>We Turn Ideas into Digital Realities.</div>
            <div className={css({ color: "#8e8e8e" })}>Dhanvantari bavan,near bus stand,Beside tourist hotel, Kolhapur 416001</div>
            <div className={css({ display: "flex", alignItems: "center", gap: "4px", marginTop: "4px" })}>
              <LinkIcon size={14} color="#00376b" />
              <a href="https://anthaathi.co" target="_blank" className={css({ color: "#00376b", textDecoration: "none", fontWeight: 600 })}>
                anthaathi.co
              </a>
            </div>
          </div>
        </section>
      </header>

      {/* Highlights Section */}
      <div className={css({ marginBottom: "44px", paddingLeft: "40px" })}>
        <div className={css({ display: "flex", flexDirection: "column", alignItems: "center", width: "84px", gap: "10px" })}>
          <div
            className={css({
              width: "77px",
              height: "77px",
              borderRadius: "50%",
              border: "1px solid #dbdbdb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fafafa",
              cursor: "pointer",
            })}
            onClick={() => setIsNewHighlightOpen(true)}
          >
            <Plus size={44} color="#dbdbdb" strokeWidth={1} />
          </div>
          <span className={css({ fontSize: "12px", fontWeight: 600 })}>New</span>
        </div>
      </div>

      {/* Profile Tabs */}
      <div className={css({ borderTop: "1px solid #dbdbdb", display: "flex", justifyContent: "center", gap: "60px" })}>
        <TabItem
          id="posts"
          label="POSTS"
          icon={<Grid size={12} />}
          isActive={activeTab === "posts"}
          onClick={() => setActiveTab("posts")}
        />
        <TabItem
          id="saved"
          label="SAVED"
          icon={<Bookmark size={12} />}
          isActive={activeTab === "saved"}
          onClick={() => setActiveTab("saved")}
        />
        <TabItem
          id="tagged"
          label="TAGGED"
          icon={<UserSquare2 size={12} />}
          isActive={activeTab === "tagged"}
          onClick={() => setActiveTab("tagged")}
        />
      </div>

      {/* Posts Grid */}
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "4px",
          [$theme.mediaQuery.medium]: {
            gap: "28px",
          },
          paddingBottom: "50px",
        })}
      >
        {MOCK_POSTS.map((post) => (
          <div
            key={post.id}
            className={css({
              position: "relative",
              width: "100%",
              paddingBottom: "100%",
              overflow: "hidden",
              cursor: "pointer",
            })}
          >
            <img
              src={post.url}
              alt=""
              className={css({
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              })}
            />
            {/* Hover Overlay */}
            <div
              className={css({
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                opacity: 0,
                transition: "opacity 0.2s ease",
                zIndex: 1,
                ":hover": {
                  opacity: 1,
                },
              })}
            >
              <div className={css({ display: "flex", gap: "30px", marginBottom: "30px" })}>
                <div className={css({ display: "flex", alignItems: "center", gap: "8px" })}>
                  <Heart size={24} fill="#fff" />
                  <span className={css({ fontWeight: 700, fontSize: "18px" })}>5</span>
                </div>
                <div className={css({ display: "flex", alignItems: "center", gap: "8px" })}>
                  <MessageCircle size={24} fill="#fff" />
                  <span className={css({ fontWeight: 700, fontSize: "18px" })}>0</span>
                </div>
              </div>

              {/* Boost Button placeholder */}
              <div className={css({
                position: "absolute",
                bottom: "16px",
                width: "100%",
                display: "flex",
                justifyContent: "center"
              })}>
                <Button
                  overrides={{
                    BaseButton: {
                      style: {
                        backgroundColor: "#fff",
                        color: "#000",
                        borderRadius: "24px",
                        padding: "8px 24px",
                        fontSize: "16px",
                        fontWeight: 700,
                        width: "85%",
                        ":hover": {
                          backgroundColor: "#efefef"
                        }
                      },
                    },
                  }}
                >
                  Boost post
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />

      <NewHighlightModal
        isOpen={isNewHighlightOpen}
        onClose={() => setIsNewHighlightOpen(false)}
      />
    </div>
  );
}

function TabItem({ label, icon, isActive, onClick }: any) {
  const [css] = useStyletron();
  return (
    <div
      onClick={onClick}
      className={css({
        display: "flex",
        alignItems: "center",
        gap: "6px",
        padding: "19px 0",
        cursor: "pointer",
        color: isActive ? "#262626" : "#8e8e8e",
        borderTop: isActive ? "1px solid #262626" : "none",
        marginTop: "-1px",
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "1px",
      })}
    >
      {icon}
      {label}
    </div>
  );
}
