import '../../styles/Banner.scss';
import Button from '../Button'
import Title from './Title'
import SubTitle from './SubTitle'
import backgroundVideo from '../../assets/videos/space-video.mp4';

function Banner ( { titleName, subTitleName, buttonName, secondButtonName }) {
  return (
    <div className='banner'>
      <video autoPlay loop muted src={backgroundVideo} id='video'></video>
      <div className='banner-content'>
        <div className="banner-titles">
          <Title titleName={titleName}/>
          <SubTitle subTitleName={subTitleName}/>
        </div>
        <div className="banner-buttons">
          <Button children={secondButtonName}/>
          <Button children={buttonName} buttonClass="white-button"/>
        </div>
      </div>
    </div>
  )
}

export default Banner;
