import {FC} from 'react'
import { SpinnerContainer, SpinnerOverlay } from './spinner.styles'

const Spinner:FC = ():JSX.Element => {
    return (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    )
}

export default Spinner