import { useState } from "react"

export default function MyComponent() {
  const [bool, setBool] = useState(false) // State variable 'bool' initialized to false

  return (
    <div>
      <p>MyComponent rendered !</p>
      {/* Displays the current boolean value as a string */}
      <p>bool={bool ? "true" : "false"}</p>
      <p>
        {/* Button to toggle the 'bool' state */}
        <button onClick={() => setBool((b) => !b)}>toggle bool</button>
      </p>
    </div>
  )
}
