import image from '../images/header-image.jpg';
import DevCardList from '../DevCardList';
import CustCardList from '../CustCardList';
import '../App.css';
import Newsletter from '../Newsletter';

function HomePage() {
  return (
    <div className="App">
      <img src={image} className='container-fluid' alt='Header image'/>
      <br />
      <DevCardList />
      <br />
      <CustCardList />
      <br />
      <Newsletter />
      <br />
    </div>
  );
}

export default HomePage;
