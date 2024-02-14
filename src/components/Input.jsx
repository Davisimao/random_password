

export default function Input(props) {

  return (
    <input
      type="number"
      id="passwordSize"
      min={5}
      max={35}
      value={props.passwordSize}
      onChange={(ev) => props.setPasswordSize(+ev.target.value)} />
  )
}