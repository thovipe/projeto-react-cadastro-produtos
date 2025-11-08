import "./form.modules.css"
export default function Form(props) {

    return <div>
        <h3>{props.formName}</h3>
        <form onSubmit={props.onSubmit}>{props.children}</form>
    </div>
}