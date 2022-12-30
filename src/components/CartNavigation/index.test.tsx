import {screen, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartNavigation from 'src/components/CartNavigation';

describe('Should render Cart Navigation successfully', () =>{
  test('Should show the Box after click Shopping Cart icon', () =>{
    render(<CartNavigation/>)
    expect(screen.queryByText(/Check out/)).toBeNull();
    const listItem = screen.queryByRole('listitem');
    userEvent.click(screen.queryByRole('listitem') as Element);
    expect(screen.queryByText(/Check out/)).toBeInTheDocument();

  });
})
