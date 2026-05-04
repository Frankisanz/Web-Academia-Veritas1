import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#7c3aed",
          borderRadius: 36,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width="130"
          height="130"
        >
          <path
            d="M241.9,86.91l-104-56a16,16,0,0,0-15.18,0l-104,56a16,16,0,0,0,0,28.18l104,56a16,16,0,0,0,15.18,0l93-50.08V152a8,8,0,0,0,16,0V93.59A16.08,16.08,0,0,0,241.9,86.91Z"
            fill="#ffffff"
          />
          <path
            d="M208,126v42.66c0,25.68-35.82,47.34-80,47.34s-80-21.66-80-47.34V126a8,8,0,0,0-16,0v42.66c0,35.43,43.23,63.34,96,63.34s96-27.91,96-63.34V126a8,8,0,0,0-16,0Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
