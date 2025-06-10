import { useState } from "react"

export default function ErrorBoundaryTestButton({
  children = "Boom!",
  message = "Boom!\nSomething bad happened, but you can try again!",
  cause,
}) {
  const [state, setState] = useState(false)

  // If state is true, throw an error for testing purposes
  if (state) {
    throw new Error(message, {
      cause: cause ? new Error(cause) : undefined,
    })
  }

  return (
    <button
      className="button button--danger"
      type="button"
      onClick={() => setState(true)} // Set state to true to trigger the error
    >
      {children}
    </button>
  )
}
