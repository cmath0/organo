import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholder = props.placeholder ? props.placeholder : 'Digite...';
    const labelDoisPontos = `${props.label}:`;

    return (
        <div className="campo-texto">
            <label>
                {labelDoisPontos}
            </label>

            <input placeholder={placeholder} />
        </div>
    );
};

export default CampoTexto;