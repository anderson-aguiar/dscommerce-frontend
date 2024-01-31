/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

export function update(inputs: any, name: string, newValue: any){

    return { ...inputs, [name] : {...inputs[name], value: newValue} };
}