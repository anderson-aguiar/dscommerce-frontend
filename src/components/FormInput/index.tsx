/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

export default function FormInput(props: any){
    const { validation, invalid = "false", onTurnDirty , dirty = "false",  ...inputProps } = props;

    function handleBlur(){
        onTurnDirty(props.name);
    }
    return(
        <input onBlur={handleBlur} {...inputProps} data-invalid={invalid} data-dirty={dirty}/>
    );
}