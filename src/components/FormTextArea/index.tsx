/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

export default function FormTextArea(props: any) {
    const { validation, invalid = "false", onTurnDirty, dirty = "false", ...textareaProps } = props;

    function handleBlur() {
        onTurnDirty(props.name);
    }
    return (
        <textarea onBlur={handleBlur} {...textareaProps} data-invalid={invalid} data-dirty={dirty} />
    );
}