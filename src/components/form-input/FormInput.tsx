import {FC, InputHTMLAttributes} from 'react'
import { FormInputLabel, Input, Group } from './formInput.styles';

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
}

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
    return (
        <Group className='group'>
            <Input className='form-input' {...otherProps} />
            {
                label && (
                    <FormInputLabel shrink={Boolean(
                        otherProps.value && 
                        typeof otherProps.value === 'string' && 
                        otherProps.value.length
                        )}
                    >
                        {label}
                    </FormInputLabel>
                )
            }
        </Group>
    )
}

export default FormInput