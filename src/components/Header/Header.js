import { WrapperContentHeader } from '../../global/Styles';
import SubTitleHeader from '../SubTitleHeader/SubTitleHeader';
import TitleHeader from '../TitleHeader/TitleHeader';
import { BackGround, WrapperHeader } from './Header.styles';

export default function Header() {

    return (
        <WrapperHeader>
            <BackGround>
                <WrapperContentHeader>
                    <TitleHeader />
                    <SubTitleHeader />
                </WrapperContentHeader>
            </BackGround>
        </WrapperHeader>
    )
};