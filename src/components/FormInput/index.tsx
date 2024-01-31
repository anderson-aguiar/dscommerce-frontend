/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

export default function FormInput(props: any){
    const { validation, ...inputProps } = props;
    return(
        <input {...inputProps} />
    );
}