import CardShoes from '../components/CardShoes/CardShoes';
import Header from '../components/Header/Header';
import SubTitleBody from '../components/SubTitleBody/SubTitleBody';
import SubTitleTopBody from '../components/SubTitleTopBody/SubTitleTopBody';
import TitleBody from '../components/TitleBody/TitleBody';
import TitleTopBody from '../components/TitleTopBody/TitleTopBody';
import Footer from '../components/Footer/Footer';
import { WrapperCardsShoes, WrapperContentMain, TitleBodyContent } from '../global/Styles';
import './main.css';

function Main() {
  return (
    <div className="container">
      <SubTitleTopBody />
      <TitleTopBody />
      <Header />
      <WrapperContentMain>
        <TitleBodyContent>
          <TitleBody />
          <SubTitleBody />
        </TitleBodyContent>
        <WrapperCardsShoes>
          <CardShoes />
        </WrapperCardsShoes>
      </WrapperContentMain>
      <Footer />
    </div>
  );
}

export default Main;
