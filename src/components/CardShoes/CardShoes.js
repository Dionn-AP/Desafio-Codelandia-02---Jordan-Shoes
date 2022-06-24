import { CardShoe, ImageShoe } from './CardShoees.styles';
import allImagesShoes from '../../assests/images';

export default function CardShoes() {

    return (
        <>
            {
                allImagesShoes.map((image) => (
                    <CardShoe key={image.id}>
                        <ImageShoe 
                        className='images-shoes'
                        src={image.image} 
                        alt='shoes' />
                    </CardShoe>
                ))
            }
        </>
    )
};