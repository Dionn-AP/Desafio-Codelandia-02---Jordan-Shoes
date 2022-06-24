import { CardShoe, ImageShoe } from './CardShoees.styles';
import allImagesShoes from '../../assests/images';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

export default function CardShoes() {

    useEffect(() => {
        const srTop = ScrollReveal({
            distance: '100px',
            duration: 1500,
            reset: true
        });
        const srBottom = ScrollReveal({
            scale: 0.75,
            distance: '30px',
            duration: 1500,
            reset: true
        });
        srTop.reveal('#cards-shoe', { interval: 180, origin: 'top' });
        srBottom.reveal('#img-shoe',  { interval: 200 });
    }, [])

    return (
        <>
            {
                allImagesShoes.map((image) => (
                    <CardShoe key={image.id} id='cards-shoe'>
                        <ImageShoe
                            id='img-shoe'
                            src={image.image}
                            alt='shoes' />
                    </CardShoe>
                ))
            }
        </>
    )
};