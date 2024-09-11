import { Img } from "../../components/Img/Img"
import css from './HomePage.module.css'
import hero1x from '../../assets/hero/hero1x.png';
import hero2x from '../../assets/hero/hero2x.png';
import hero3x from '../../assets/hero/hero3x.png';
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className={css.hero}>
      <Img src={hero1x} sizes={'1440px'} className={css.heroImage} srcSet={`${hero1x} 1440w, ${hero2x} 2880w, ${hero3x} 4320w`} />
      <p className={css.heroText}>Campers of your dreams</p>
      <p className={css.heroSubText}>You can find everything you want in our catalog</p>
      <Button title="View Now" variant="primary" onClick={() => {navigate('/catalog')}} className={css.heroButton} />
    </div>
  )
}

export default HomePage