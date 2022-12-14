import {screen, render} from '@testing-library/react';
import Home from './index'

describe('Render Homepage successfully', () =>{
    test('Should render Slide and BannerFashion successfully', () =>{
        render(<Home/>);
    })
})
