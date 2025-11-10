export default function Input(props) {
    return (
    <div>
        <label>{props.children}</label>
        <input type={props.type} 
               value={props.value}
               name={props.name}
               onChange={props.handleChange}
               id={props.id}
               required={props.required}
               step={props.step}
               >
               </input>
    </div>)
}