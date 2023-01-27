import { useApp } from "../../AppContext";

export const FemaleIcon = ({ isFront }) => {
  const { screenSize } = useApp();
  const iconStyles = {
    zIndex: "1",
    position: "relative",
    bottom: isFront ? "231px" : "170px",
    right: "30px",
  };

  return screenSize === "big" ? (
    <figure style={iconStyles}>
      <svg
        width="127"
        height="194"
        viewBox="0 0 127 194"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M71.4402 193.896V167.115H95.2085V151.046H71.4402V125.604C85.9467 123.818 117.035 111.276 125.337 75.3891C132.702 28.1873 93.1999 -1.60678 62.4015 0.0670418C42.3157 0.0670418 6.89754 12.6542 0.47006 54.9685C-1.20376 65.5693 0.670919 91.4578 21.5602 110.205C36.0452 122.372 47.2711 124.261 52.8514 125.2C53.7194 125.346 54.4509 125.469 55.0367 125.604V151.046H30.5989V167.115H55.0367V193.896H71.4402ZM63.4058 110.204C89.2898 110.204 110.273 89.2212 110.273 63.3372C110.273 37.4532 89.2898 16.4701 63.4058 16.4701C37.5219 16.4701 16.5388 37.4532 16.5388 63.3372C16.5388 89.2212 37.5219 110.204 63.4058 110.204Z"
          fill="#881337"
          fillOpacity="0.3"
        />
      </svg>
    </figure>
  ) : (
    <></>
  );
};
