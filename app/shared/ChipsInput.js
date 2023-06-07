import ReactChipInput from "react-chip-input"

/*
    ReactChipInput is a 3rd-party library, thus we must use noraml css classes instead Taliwind. 
*/

const ChipsInput = ({chips, onChipRemove, onInput, onFocus}) => {
    return (
        <div contentEditable={true} suppressContentEditableWarning="true" onInput={e => onInput(e.target.value)} onFocus={onFocus}>
            <ReactChipInput
                classes="chipinput"
                chips={chips}
                onRemove={index => onChipRemove(index)}
            />       
        </div>        
    )
}

export default ChipsInput