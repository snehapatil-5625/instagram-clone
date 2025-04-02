import { useState } from "react";
import { Button } from "baseui/button";
import { useStyletron } from "baseui";

const CustomTooltip = ({
  children,
  content,
  arrowPosition = "center", // 'top', 'center', or 'bottom'
  color = "#4299e1",
  textColor = "white",
  width = "120px",
}) => {
  const [css] = useStyletron();
  const [isHovered, setIsHovered] = useState(false);

  // Calculate the arrow position based on the arrowPosition prop
  const getArrowPosition = () => {
    switch (arrowPosition) {
      case "top":
        return { top: "20px", transform: "translateY(0)" };
      case "bottom":
        return { bottom: "20px", transform: "translateY(0)" };
      case "center":
      default:
        return { top: "50%", transform: "translateY(-50%)" };
    }
  };

  // Tooltip styles
  const tooltipStyles = css({
    position: "absolute",
    left: "calc(100% + 10px)",
    display: isHovered ? "inline-block" : "none",
    backgroundColor: color,
    color: textColor,
    padding: "10px 15px",
    borderRadius: "4px",
    width: width,
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  });

  // Arrow styles
  const arrowStyles = css({
    position: "absolute",
    left: "-6px",
    width: "0",
    height: "0",
    borderTop: "6px solid transparent",
    borderBottom: "6px solid transparent",
    borderRight: `6px solid ${color}`,
    ...getArrowPosition(),
  });

  // Container styles
  const containerStyles = css({
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
  });

  return (
    <div
      className={containerStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <div className={tooltipStyles}>
        <div className={arrowStyles} />
        {content}
      </div>
    </div>
  );
};
const TooltipExample = () => {
  const [arrowPosition, setArrowPosition] = useState("center");

  const changeArrowPosition = () => {
    const positions = ["top", "center", "bottom"];
    const currentIndex = positions.indexOf(arrowPosition);
    const nextIndex = (currentIndex + 1) % positions.length;
    setArrowPosition(positions[nextIndex]);
  };

  return (
    <div
      style={{
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div>
        <Button onClick={changeArrowPosition}>
          Change Arrow Position: {arrowPosition}
        </Button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <CustomTooltip content="Filters" arrowPosition={arrowPosition}>
          <div
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "#3182ce",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
          </div>
        </CustomTooltip>
      </div>
    </div>
  );
};

export default TooltipExample;
