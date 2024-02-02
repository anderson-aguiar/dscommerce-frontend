/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

export default function FormInput(props: any){
    const { validation, invalid, ...inputProps } = props;
    return(
        <input {...inputProps} data-invalid={invalid}/>
    );
}