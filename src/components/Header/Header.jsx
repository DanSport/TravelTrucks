import { Img } from '../Img/Img';
import { Navigation } from '../Navigation/Navigation';
import css from './Header.module.css';
import logo1x from '../../assets/logo/logo1x.png';
import logo2x from '../../assets/logo/logo2x.png';
import logo3x from '../../assets/logo/logo3x.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={css.headerBackground}>
      <div className='wrapper'>
        <div className={css.header}>
          <Link to='/'>
            <Img src={logo1x} sizes={'136px'} className={css.logo} srcSet={`${logo1x} 136w, ${logo2x} 272w, ${logo3x} 408w`} />
          </Link>
          <Navigation />
          <div className={css.spacer}> </div>
        </div>
      </div>
    </header>
  );
};
