import BrowserWindow from "./index"

// Quick and dirty component, to improve later if needed
export default function IframeWindow({ url }) {
  return (
    <div style={{ padding: 10 }}>
      <BrowserWindow
        url={url}
        style={{
          minWidth: "min(100%,45vw)",
          width: 800,
          maxWidth: "100%",
          overflow: "hidden",
        }}
        bodyStyle={{ padding: 0 }}
      >
        <iframe
          src={url}
          title={url}
          style={{ display: "block", width: "100%", height: 300 }}
        />
      </BrowserWindow>
    </div>
  )
}
