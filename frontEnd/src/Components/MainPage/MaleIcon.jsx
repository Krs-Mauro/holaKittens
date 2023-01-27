import { useApp } from "../../AppContext";

export const MaleIcon = ({ isFront }) => {
  const { screenSize } = useApp();
  const iconStyles = {
    zIndex: "1",
    position: "relative",
    bottom: isFront ? "155px" : "95px",
    right: "30px",
  };

  return screenSize === "big" ? (
    <figure style={iconStyles}>
      <svg
        width="160"
        height="131"
        viewBox="0 0 160 131"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M160 0V57.092H144.888V26.7719L110.485 60.9626C128.638 88.6665 124.173 112.597 114.576 129H96.4277C103.578 120.825 107.913 110.11 107.913 98.3787C107.913 72.7263 87.1843 51.931 61.6139 51.931C36.0435 51.931 15.3145 72.7263 15.3145 98.3787C15.3145 110.11 19.6495 120.825 26.8001 129H9.00001V130.714C8.61807 130.138 8.25784 129.573 7.91951 129.021C2.45365 121.603 -13.301 79.3482 24.6387 49.0281C56.0194 26.8364 87.2286 40.2117 98.9106 49.6732L133.314 15.8051H100.84V0H160Z"
          fill="#881337"
          fillOpacity="0.3"
        />
      </svg>
    </figure>
  ) : (
    <></>
  );
};
