/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import Select from "react-select";

export default function FormSelect(props: any) {
    const { validation, className="", invalid = "false", onTurnDirty, dirty = "false", ...SelectProps } = props;

    function handleBlur() {
        onTurnDirty(props.name);
    }
    return (
        <div data-invalid={invalid} data-dirty={dirty} className={className}>
            <Select onBlur={handleBlur} {...SelectProps} />
        </div>
    );
}