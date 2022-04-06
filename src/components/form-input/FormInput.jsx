import React from 'react'
import { FormInputLabel, Input, Group } from './formInput.styles';



const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group className='group'>
            <Input className='form-input' {...otherProps} />
            {
                label && (
                    <FormInputLabel shrink={otherProps.value.length}
                    >
                        {label}
                    </FormInputLabel>
                )
            }
        </Group>
    )
}

export default FormInput