import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#0A0A0B",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "#D4AF37",
              letterSpacing: "0.05em",
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            TAYO OPEYEMI
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 400,
              color: "#00D4FF",
              letterSpacing: "0.02em",
              marginBottom: 48,
            }}
          >
            Lead Systems Architect
          </div>
          <div
            style={{
              width: 300,
              height: 3,
              background: "linear-gradient(90deg, transparent, #00D4FF, transparent)",
              margin: "0 auto",
              borderRadius: 2,
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}