export function Capslock(props){
    const textoIserido = props.children
    const textoEmCapsLock = textoIserido.toUpperCase()
    return <div><strong>{textoEmCapsLock}</strong></div>
}