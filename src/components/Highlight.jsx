export default function Highlight({ children, color }) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: "2px",
        color: "#fff", // Text color is set to white
        padding: "0.2rem",
      }}
    >
      {children}
    </span>
  )
}
