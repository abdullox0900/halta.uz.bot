import { TelegramIcon } from '../../assets/svg/icons';
import Container from '../Container/Container';
import './Hero.scss';

function Hero() {

    console.log('Helloo there');

    return(
        <Container>
            <section className='hero'>
                <a href="https://t.me/halta_uz" target='_blank' className='hero__social'>
                    <TelegramIcon />
                    <span>halta</span> telegram
                </a>
                <h1 className='hero__title'>Xush qelibsiz 🙂<br /><span>Halta botda savdo qiling</span></h1>
                <p className='hero__paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, magnam iste nobis eos minima aliquam maiores deleniti voluptas eaque quasi.</p>
                <div className='hero__links-wrap'>
                    <a href="#" className='hero__link-1'>Halta.uz</a>
                    <a href="#" className='hero__link-2'>Harid qilish</a>
                </div>
            </section>
        </Container>
    )
}

export default Hero