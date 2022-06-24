import { SubTitleHeaderContent } from './SubTitleHeader.styles';
import Typed from 'react-typed';

export default function SubTitleHeader() {

    return (
        <SubTitleHeaderContent>
            <Typed
                className='montserrat-medium-600-18'
                strings={['O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.']}
                typeSpeed={35}
                backSpeed={20}
                loop
            />
        </SubTitleHeaderContent>

    )
}