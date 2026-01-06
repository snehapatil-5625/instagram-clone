import { useStyletron } from "baseui";
import { Avatar } from "baseui/avatar";
import { Button } from "baseui/button";
import { Shield } from "lucide-react";

interface NotificationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationDrawer({
  isOpen,
  onClose,
}: NotificationProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      className={css({
        position: "fixed",
        top: 0,
        left: "72px",
        width: "397px",
        height: "100vh",
        backgroundColor: "#fff",
        borderLeft: "1px solid #efefef",
        borderRight: "1px solid #efefef",
        zIndex: 11,
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease-in-out",
        visibility: isOpen ? "visible" : "hidden",
        overflow: "hidden",
      })}
    >
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "24px 0",
        })}
      >
        <div className={css({ padding: "0 24px", marginBottom: "24px" })}>
          <span className={css({ fontSize: "24px", fontWeight: 700 })}>Notifications</span>
        </div>

        <div className={css({ flex: 1, overflowY: "auto", padding: "0 24px" })}>
          {/* Today */}
          <section className={css({ marginBottom: "24px" })}>
            <div className={css({ fontSize: "16px", fontWeight: 700, marginBottom: "16px" })}>Today</div>
            <LikeNotification
              avatars={["https://i.pravatar.cc/150?u=eraa_224", "https://i.pravatar.cc/150?u=shwetaaaa_224"]}
              usernames={["eraa_224", "shwetaaaa_224"]}
              count={1}
              time="17h"
              thumbnail="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=100&auto=format&fit=crop"
            />
          </section>

          <div className={css({ borderBottom: "1px solid #efefef", margin: "0 -24px 24px -24px" })} />

          {/* This Month */}
          <section className={css({ marginBottom: "24px" })}>
            <div className={css({ fontSize: "16px", fontWeight: 700, marginBottom: "16px" })}>This month</div>
            <LikeNotification
              avatars={["https://i.pravatar.cc/150?u=patil.lakshmi.237", "https://i.pravatar.cc/150?u=sneha"]}
              usernames={["patil.lakshmi.237", "sneha"]}
              time="25 Dec"
              thumbnail="https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=100&auto=format&fit=crop"
            />
          </section>

          <div className={css({ borderBottom: "1px solid #efefef", margin: "0 -24px 24px -24px" })} />

          {/* Earlier */}
          <section>
            <div className={css({ fontSize: "16px", fontWeight: 700, marginBottom: "16px" })}>Earlier</div>
            <div className={css({ display: "flex", flexDirection: "column", gap: "16px" })}>
              <FollowNotification
                avatar="https://i.pravatar.cc/150?u=mistari"
                username="mistari_dhiraj_08"
                time="23 Nov"
              />
              <FollowNotification
                avatar="https://i.pravatar.cc/150?u=mayur"
                username="mayur168"
                time="04 Nov"
              />
              <InfoNotification
                icon={<Shield size={24} color="#3897f0" />}
                text="Learn how Meta will use your info in new ways to personalize your experiences."
                time="21 Oct"
              />
              <LikeNotification
                avatars={["https://i.pravatar.cc/150?u=chand", "https://i.pravatar.cc/150?u=kedar"]}
                usernames={["chandradipvetale", "kedar.alawekar"]}
                othersCount={0}
                time="20 Oct"
                thumbnail="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=100&auto=format&fit=crop"
              />
              <FollowNotification
                avatar="https://i.pravatar.cc/150?u=nana"
                username="nana.wagh.79677"
                time="23 Sept"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function LikeNotification({ avatars, usernames, count, time, thumbnail, othersCount }: any) {
  const [css] = useStyletron();
  return (
    <div className={css({ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" })}>
      <div className={css({ position: "relative", width: "44px", height: "44px" })}>
        <Avatar src={avatars[0]} size="32px" overrides={{ Root: { style: { position: "absolute", top: 0, left: 0, border: "2px solid #fff", zIndex: 1 } } }} />
        <Avatar src={avatars[1]} size="32px" overrides={{ Root: { style: { position: "absolute", bottom: 0, right: 0, border: "2px solid #fff", zIndex: 2 } } }} />
      </div>
      <div className={css({ flex: 1, fontSize: "14px", lineHeight: "1.4" })}>
        <span className={css({ fontWeight: 600 })}>{usernames[0]}</span>,{" "}
        <span className={css({ fontWeight: 600 })}>{usernames[1]}</span>
        {count ? ` and ${count} other` : ""} {othersCount !== undefined ? " and others" : ""} liked your photo.{" "}
        <span className={css({ color: "#8e8e8e" })}>{time}</span>
      </div>
      <img src={thumbnail} className={css({ width: "44px", height: "44px", borderRadius: "4px", objectFit: "cover" })} />
    </div>
  );
}

function FollowNotification({ avatar, username, time }: any) {
  const [css] = useStyletron();
  return (
    <div className={css({ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" })}>
      <Avatar src={avatar} size="44px" />
      <div className={css({ flex: 1, fontSize: "14px", lineHeight: "1.4" })}>
        <span className={css({ fontWeight: 600 })}>{username}</span> started following you.{" "}
        <span className={css({ color: "#8e8e8e" })}>{time}</span>
      </div>
      <Button
        size="compact"
        overrides={{
          BaseButton: {
            style: {
              backgroundColor: "#0095f6",
              color: "#fff",
              borderRadius: "8px",
              paddingLeft: "12px",
              paddingRight: "12px",
              fontSize: "14px",
              fontWeight: 600,
              ":hover": { backgroundColor: "#1877f2" },
            },
          },
        }}
      >
        Follow Back
      </Button>
    </div>
  );
}

function InfoNotification({ icon, text, time }: any) {
  const [css] = useStyletron();
  return (
    <div className={css({ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" })}>
      <div className={css({
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        backgroundColor: "#e7f3ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      })}>
        {icon}
      </div>
      <div className={css({ flex: 1, fontSize: "14px", lineHeight: "1.4" })}>
        {text} <span className={css({ color: "#8e8e8e" })}>{time}</span>
      </div>
    </div>
  );
}
