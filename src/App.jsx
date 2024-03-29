import { useState } from "react"
import Input from "./components/Input"


function App() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")

  const [customSize, setCustomSize] = useState(12)
  const [showInput, setShowInput] = useState(false)

  const passwordSize = showInput ? customSize : 8

  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ""

    for (let i = 0; i < passwordSize; i++) {
      if (passwordSize > 35) {
        alert("Máximo de 35 caracters")
        setCustomSize(35)
        break
      }
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
    setCopyText("Copiar")
  }
  function copyToClipBoard() {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }
  return (
    <div>
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="showInput">Customizar Tamanho:</label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput(currentInput => !currentInput
            , setPassword(null))}
        />
      </div>
      {showInput && (
        < div >
          <label htmlFor="passwordSize">Tamanho:</label>
          <Input passwordSize={customSize} setPasswordSize={setCustomSize} />
        </div>
      )
      }
      <button onClick={generate}>Gerar uma senha de {passwordSize} caracteres!</button>
      <button onClick={copyToClipBoard} >{copyText}</button>
      <div>{password}</div>
    </div >
  )
}

export default App