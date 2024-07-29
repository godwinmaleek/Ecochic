export default function ProductRating({ rating, className }) {
  const RATING_SCALE = 5;
  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(RATING_SCALE).keys()].map((index) => (
        <svg
          key={index + "star"}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_36_7303)">
            <path
              d="M10.0002 14.1667L5.10186 17.1584L6.43353 11.575L2.0752 7.84171L7.79603 7.38337L10.0002 2.08337L12.2044 7.38337L17.926 7.84171L13.5669 11.575L14.8985 17.1584L10.0002 14.1667Z"
              fill={`${rating > index ? "#C8894C" : "#666666"}`}
            />
          </g>
          <defs>
            <clipPath id="clip0_36_7303">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ))}
    </div>
  );
}
