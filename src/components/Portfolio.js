import React, {useState} from 'react'
import "../styles/Portfolio.css";
import Weather from "../assets/weatherPortfolio.jpg";
import Japansushi from "../assets/japansushiPortfolio.jpg";
import Sonicsoul from "../assets/sonicsoulPortfolio.jpg";
import Pizza from "../assets/pizzaPortfolio.jpg";
import Portfolio4 from "../assets/portfolio-4.png";
import RockPaper from "../assets/rockpaperscissorPortfolio.png";
import Currency from "../assets/currencyPortfolio.jpg";
import Quote from "../assets/quotePortfolio.jpg";
import Jewellery from "../assets/jewelleryPortfolio.jpg";
import Yumplatter from "../assets/yumplatterPortfolio.jpg";
import TicTacToe from "../assets/tictactoePortfolio.jpg";
import EasyDrive from "../assets/easydrive.jpg";
import AlphaStay from "../assets/alphastay.jpg";
function Portfolio() {
  const [showMore, setShowMore] = useState(false);
  return (
   <section id='works'>
    <h2 className='worksTitle'>My Portfolio</h2>
    <span className='worksDesc'>I have made these projects with the help of the skills that I have accomplished.I am learning and working on MERN projects.<br/> Click on the images to view the project . </span>
    <div className='worksImgs'>
    <a href="https://github.com/ratipriya212003/MajorP" target="_blank" >
        <img src={  EasyDrive} alt='Not Avail' className='worksImg'/>
        <p>Car Rental Website-Made by using MERN</p>
        </a>
        <a href="#" target="_blank" >
        <img src={AlphaStay} alt='Not Avail' className='worksImg'/>
        <p>Hotel Booking Website-Made by using MERN</p>
        </a>
    <a href=" https://jewellerywebsite-75eea.web.app" target="_blank" >
        <img src={Jewellery} alt='Not Avail' className='worksImg'/>
        <p>Jewellery Website-Made by using React</p>
        </a>
        <a href="https://pizzamania-ac0da.web.app" target="_blank" >
          <img src={Pizza} alt='Not Avail' className='worksImg' />
          <p>Pizza Mania-Made by using React</p>
        </a>
        <a href=" https://ratipriya212003.github.io/Sushi-Palace/" target="_blank" >
        <img src={Japansushi} alt='Not Avail' className='worksImg'/>
        <p>Sushi Palace-JS</p>
        </a>
        <a href="https://ratipriya212003.github.io/SonicSoul/" target="_blank" >
          <img src={Sonicsoul} alt='Not Avail' className='worksImg' />
          <p>Sonic Soul-JS</p>
        </a>
        <a href=" https://ratipriya212003.github.io/WeatherApi/" target="_blank" >
        <img src={Weather} alt='Not Avail' className='worksImg'/>
        <p>Weather Forecaste-API</p>
        </a>
        <a href="  https://ratipriya212003.github.io/QuoteApi/" target="_blank" >
        <img src={Quote} alt='Not Avail' className='worksImg'/>
        <p>Quote Generator-API</p>
        </a>
    
    {showMore && (
      <>
     
        {/* <a href=" https://ratipriya212003.github.io/Sushi-Palace/" target="_blank" >
        <img src={Currency} alt='Not Avail' className='worksImg'/>
        <p>Made by using React</p>
        </a> */}
        <a href="  https://ratipriya212003.github.io/Rock-Paper-Scissors/" target="_blank" >
        <img src={RockPaper} alt='Not Avail' className='worksImg'/>
        <p>Rock Paper Scissors-JS</p>
        </a>
        <a href="  https://ratipriya212003.github.io/SearchApi/" target="_blank" >
        <img src={Portfolio4} alt='Not Avail' className='worksImg'/>
        <p>Search Images-API</p>
        </a>
        <a href="  https://ratipriya212003.github.io/Yumplatter/" target="_blank" >
        <img src={Yumplatter} alt='Not Avail' className='worksImg'/>
        <p>Yumplatter-Html Css</p>
        </a>
{/*        
        <a href="  https://ratipriya212003.github.io/Rock-Paper-Scissors/" target="_blank" >
        <img src={TicTacToe} alt='Not Avail' className='worksImg'/>
        <p>Made by using React</p>
        </a> */}
      </>
    )}
    <button className='workBtn' onClick={() => setShowMore(!showMore)}>
          {showMore ? "See Less" : "See More"}
          </button>
          </div>
   </section>
  )
}

export default Portfolio