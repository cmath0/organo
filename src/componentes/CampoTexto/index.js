import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholder = props.placeholder ? props.placeholder : 'Digite...';
    const labelDoisPontos = `${props.label}:`;

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    };

    return (
        <div className="campo-texto">
            <label>
                {labelDoisPontos}
            </label>

            <input value={props.valor} onChange={aoDigitado} placeholder={placeholder} required={props.obrigatorio} />
        </div>
    );
};

export default CampoTexto;