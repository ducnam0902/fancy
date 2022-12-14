import {render, screen } from '@testing-library/react';
import BannerFashion from 'src/components/BannerFashion';

describe('Render BannerFashion successfully', () =>{
    test('Should render banner fashion with 3 categories: Men, women and accessories', () =>{
        render(<BannerFashion/>);
        expect(screen.queryByText(/Men's Fashion/)).toBeInTheDocument();
        expect(screen.queryByText(/Accessories/)).toBeInTheDocument();
        expect(screen.queryByText(/Women's Fashion/)).toBeInTheDocument();
    });
})
