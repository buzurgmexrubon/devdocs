import { useState } from "react"
import { useLocation } from "@docusaurus/router"

export default function CustomDogfoodNavbarItem(props) {
  const { pathname } = useLocation()
  const [showMessage, setShowMessage] = useState(false)

  // Determine if the component should render based on the current pathname
  const shouldRender = pathname === "/tests" || pathname.startsWith("/tests/")

  if (!shouldRender) {
    return null
  }

  return (
    <>
      <button
        onClick={() => setShowMessage(true)} // Set state to show the message
        type="button"
      >
        {props.content}
        {props.mobile ? " (mobile)" : ""}
      </button>
      {showMessage && (
        // Simple message box UI to replace alert()
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            border: "1px solid #ccc",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            zIndex: 1000,
            borderRadius: "8px",
            textAlign: "center",
            color: "black", // Ensure text is visible in light mode
          }}
        >
          <p>I'm a custom navbar item type example</p>
          <button
            onClick={() => setShowMessage(false)}
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      )}
    </>
  )
}
