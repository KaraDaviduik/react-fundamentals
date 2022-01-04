// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// EXTRA CREDIT 3
function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')

  function handleChange(event) {
    const {value} = event.target
    setUsername(value.toLowerCase())
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          value={username}
          onChange={handleChange}
          type="text"
          id="usernameInput"
        />
      </div>
      <button id="submitButton" type="submit">
        Submit
      </button>
    </form>
  )
}

// EXTRA CREDIT 2
// function UsernameForm({onSubmitUsername}) {
//   const inputRef = React.useRef(null)
//   const [error, setError] = React.useState(null)

//   function handleChange(event) {
//     const {value} = event.target
//     const isLowerCase = value === value.toLowerCase()
//     setError(isLowerCase ? null : 'Username must be lower case')
//   }

//   function handleSubmit(event) {
//     event.preventDefault()
//     const username = inputRef.current.value
//     onSubmitUsername(username)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input
//           onChange={handleChange}
//           ref={inputRef}
//           type="text"
//           id="usernameInput"
//         />
//       </div>
//       <div style={{color: 'red'}}>{error}</div>
//       <button disabled={Boolean(error)} id="submitButton" type="submit">
//         Submit
//       </button>
//     </form>
//   )
// }

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

// EXTRA CREDIT 1
// function UsernameForm({onSubmitUsername}) {
//   const inputRef = React.useRef(null)

//   function handleSubmit(event) {
//     event.preventDefault()
//     const username = inputRef.current.value
//     onSubmitUsername(username)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input ref={inputRef} type="text" id="usernameInput" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// SOLUTION
// function UsernameForm({onSubmitUsername}) {
//   function handleSubmit(event) {
//     event.preventDefault()
//     const username = event.target.elements.usernameInput.value
//     onSubmitUsername(username)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input type="text" id="usernameInput" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

export default App
