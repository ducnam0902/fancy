import {render, screen} from '@testing-library/react'
import FancyButton from 'src/components/FancyButton'

describe('Render Fancy button successfully', () => {
    test('should show button with title Fancy', () =>{
        render(<FancyButton children='Fancy'/>);
        expect(screen.getByText('Fancy')).toBeInTheDocument();
    })
});
