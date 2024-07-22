import React, { useEffect, useState } from 'react';
import cartIcon from '../Images/cart.jpg';
import logo from '../Images/logo.jpg';
import './Home.css';
import img1 from '../Images/1.webp.webp';
import img2 from '../Images/2.webp.webp';
import img3 from '../Images/3.webp.webp';
import img4 from '../Images/img1.png';

import './BestSeller.css'

function Home() {
  const [myIndex, setMyIndex] = useState(0);
  const [showCategory,setShowCategory] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setMyIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const showSlide = (index) => {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
  };

  useEffect(() => {
    showSlide(myIndex);
  }, [myIndex]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDialogue = () => {
    setIsOpen(!isOpen);
  };
  const toggleCategory = () => {
    setShowCategory(!showCategory);
  };

  return (
    <div>


<a href="#" className="desktop-item" onClick={toggleCategory}><b>SHOP BY CATEGORY</b></a>
        {showCategory && (
          <div className="mega-box">
            <div className="content">
              <div className="row">
                <ul className="mega-links">
                  <h2> Electronics </h2>
                  <li><a href="#"><b>Samsung</b></a></li>
                  <li><a href="#"><b>Nokia</b></a></li>
                  <li><a href="#"><b>Vivo</b></a></li>
                  <li><a href="#"><b>Oppo</b></a></li>
                </ul>
              </div>
              <div className="row">
                <ul className="mega-links">
                  <h2> T-Shirts </h2>
                  <li><a href="#"><b>Full Hand</b></a></li>
                  <li><a href="#"><b>Over Siezed</b></a></li>
                  <li><a href="#"><b>Sleeves</b></a></li>
                  <li><a href="#"><b>Half Seized</b></a></li>
                </ul>
              </div>
              <div className="row">
                <ul className="mega-links">
                  <h2> Bags </h2>
                  <li><a href="#"><b>Hand Bag</b></a></li>
                  <li><a href="#"><b>School Bag</b></a></li>
                  <li><a href="#"><b>Shoulder Bag</b></a></li>
                  <li><a href="#"><b>Travel Bag</b></a></li>
                </ul>
              </div>
              
            </div>
          </div>
        )}
      
     
      <div>
        <br></br><br></br><br></br>
        <img className="mySlides" src={img1} style={{ width: '1500px', height: '500px' }} alt="" />
        <img className="mySlides" src={img2} style={{ width: '1500px', height: '500px' }} alt="" />
        <img className="mySlides" src={img3} style={{ width: '1500px', height: '500px' }} alt="" />
      </div>

      <div className="recent-searches">
        <h2>Recently Searched</h2>
        <div className="search-items">
          <div className="search-item">
            <img
              src="https://freepngimg.com/thumb/apple/94072-technology-airpods-earbuds-apple-headset-free-transparent-image-hd.png" alt="Product 1" className="product-image" />
            <div className="product-details">
              <p className="change">Mivi DuoPods K2 TWS,AI-ENC,40Hr Playtime,13mm Bass,Made in India</p>
              <p><b>₹1,199</b></p>
              <div className="dialogue-container">
       <div className="dialogue-container">
      {/* <button className=' learnmore' onClick={toggleDialogue}>learn more</button><br></br> */}
      {isOpen && (
        <div className="dialogue-overlay" onClick={toggleDialogue}>
          <div className="dialogue" onClick={(e) => e.stopPropagation()}>
            <div className="dialogue-content">
              <h2>iPhone 13</h2>
              <p>The iPhone 13 series, including the iPhone 13, iPhone 13 mini, iPhone 13 Pro, and iPhone 13 Pro Max,
              features improved cameras.</p>
              
              <button onClick={toggleDialogue}>Close</button>
            
            </div>
          </div>
        </div>
      )}
    </div>
    
    </div>
              <button>Buy Now</button>
            </div>
          </div>
          <div className="search-item">
            <img src="https://static1.industrybuying.com/products/it-electronics/smart-watch/ITE.SMA.88673817_1681467871760.webp " alt="Product 2" className="product-image" />
            <div className="product-details">
              <p className="change">PunnkFunnk 8 Ultra 1.99 Inch Display Android Force Bluetooth Calling Smart Watch</p>
              <p><b>₹1,180</b></p>
              <div className="dialogue-container">
       <div className="dialogue-container">
      {/* <button className=' learnmore' onClick={toggleDialogue}>learn more</button><br></br> */}
      {isOpen && (
        <div className="dialogue-overlay" onClick={toggleDialogue}>
          <div className="dialogue" onClick={(e) => e.stopPropagation()}>
            <div className="dialogue-content">
              <h2>iPhone 13</h2>
              <p>The iPhone 13 series, including the iPhone 13, iPhone 13 mini, iPhone 13 Pro, and iPhone 13 Pro Max,
              features improved cameras.</p>
              
              <button onClick={toggleDialogue}>Close</button>
            
            </div>
          </div>
        </div>
      )}
    </div>
    
    </div>
              <a href='/Watch'>
              <button>Buy Now</button></a>
            </div>
          </div>
          <div className="search-item">
            <img src="https://th.bing.com/th/id/OIP.RnIr2dxEwz54iL2_5ldZowHaHa?w=183&h=183&c=7&r=0&o=5&pid=1.7 " alt="Product 3" className="product-image" />
            <div className="product-details">
              <p className="change">Shop for your Lionel Messi Jersey </p>
              <p><b>₹1,20,490</b></p>
              <div className="dialogue-container">
       <div className="dialogue-container">
      {/* <button className=' learnmore' onClick={toggleDialogue}>learn more</button><br></br> */}
      {isOpen && (
        <div className="dialogue-overlay" onClick={toggleDialogue}>
          <div className="dialogue" onClick={(e) => e.stopPropagation()}>
            <div className="dialogue-content">
              <h2>iPhone 13</h2>
              <p>The iPhone 13 series, including the iPhone 13, iPhone 13 mini, iPhone 13 Pro, and iPhone 13 Pro Max,
              features improved cameras.</p>
              
              <button onClick={toggleDialogue}>Close</button>
            
            </div>
          </div>
        </div>
      )}
    </div>
    
    </div>
              <button>Buy Now</button>
            </div>
          </div>
          <div className="search-item">
            <img src="https://th.bing.com/th/id/OIP.6YG-l4ysjx0zFMLNqprGFAHaJa?pid=ImgDet&w=184&h=233&c=7" alt="Product 4" className="product-image" />
            <div className="product-details">
              <p className="change">Wireless Bluetooth Headphone with noise cancellation HIFI Stero Sound... </p>
              <p><b>₹58,900</b></p>
              <div className="dialogue-container">
       <div className="dialogue-container">
      {/* <button className=' learnmore' onClick={toggleDialogue}>learn more</button><br></br> */}
      {isOpen && (
        <div className="dialogue-overlay" onClick={toggleDialogue}>
          <div className="dialogue" onClick={(e) => e.stopPropagation()}>
            <div className="dialogue-content">
              <h2>iPhone 13</h2>
              <p>The iPhone 13 series, including the iPhone 13, iPhone 13 mini, iPhone 13 Pro, and iPhone 13 Pro Max,
              features improved cameras.</p>
              
              <button onClick={toggleDialogue}>Close</button>
            
            </div>
          </div>
        </div>
      )}
    </div>
    
    </div>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="recent-searches">
        <h2> Best Sellers</h2>
        <div className="search-items">
          <div className="search-item">
            <img
              src="https://orebishopping.vercel.app/static/media/bestSellerTwo.c2641a76c189fcc71670.webp" alt="Product 1" className="product-image" />
            <div className="product-details">
              <p className="change">Carhartt Classic Mini Backpack</p>
              <p><b>₹1,199</b></p>
              <div className="dialogue-container">
       <div className="dialogue-container">
      {/* <button className=' learnmore' onClick={toggleDialogue}>learn more</button><br></br> */}
      {isOpen && (
        <div className="dialogue-overlay" onClick={toggleDialogue}>
          <div className="dialogue" onClick={(e) => e.stopPropagation()}>
            <div className="dialogue-content">
              <h2>iPhone 13</h2>
              <p>The iPhone 13 series, including the iPhone 13, iPhone 13 mini, iPhone 13 Pro, and iPhone 13 Pro Max,
              features improved cameras.</p>
              
              <button onClick={toggleDialogue}>Close</button>
            
            </div>
          </div>
        </div>
      )}
    </div>
    
    </div>
              <button>Buy Now</button>
            </div>
          </div>
          <div className="search-item">
            <img src="https://www.ayr.com/cdn/shop/files/OriginalTJaipur_PDP0.jpg?v=1707341102&width=640" alt="Product 2" className="product-image" />
            <div className="product-details">
              <p className="change">Selected Homme Light Blue stipped poplin shirt  </p>
              <p><b>₹1,180</b></p>
              <div className="dialogue-container">
       <div className="dialogue-container">
      {/* <button className=' learnmore' onClick={toggleDialogue}>learn more</button><br></br> */}
      {isOpen && (
        <div className="dialogue-overlay" onClick={toggleDialogue}>
          <div className="dialogue" onClick={(e) => e.stopPropagation()}>
            <div className="dialogue-content">
              <h2>iPhone 13</h2>
              <p>The iPhone 13 series, including the iPhone 13, iPhone 13 mini, iPhone 13 Pro, and iPhone 13 Pro Max,
              features improved cameras.</p>
              
              <button onClick={toggleDialogue}>Close</button>
            
            </div>
          </div>
        </div>
      )}
    </div>
    
    </div>
              <button>Buy Now</button>
            </div>
          </div>
          <div className="search-item">
            <img src="https://b.scdn.gr/images/sku_main_images/031106/31106857/20211126163859_apple_iphone_13_5g_4gb_128gb_blue.jpeg " alt="Product 3" className="product-image" />
            <div className="product-details">
              <p className="change">APPLE iPhone 13 (Blue, 128 GB)</p>
              <p><b>₹1,20,490</b></p>
              <div className="dialogue-container">
       <div className="dialogue-container">
      {/* <button className=' learnmore' onClick={toggleDialogue}>learn more</button><br></br> */}
      {isOpen && (
        <div className="dialogue-overlay" onClick={toggleDialogue}>
          <div className="dialogue" onClick={(e) => e.stopPropagation()}>
            <div className="dialogue-content">
              <h2>iPhone 13</h2>
              <p>            The iPhone 13 series, including the iPhone 13, iPhone 13 mini, iPhone 13 Pro, and iPhone 13 Pro Max, features improved cameras, the powerful A15 Bionic chip, 5G connectivity, longer battery life, ProMotion displays in Pro models, and Cinematic mode for videos. With refined design elements and iOS 15's enhancements, the iPhone 13 lineup delivers a compelling upgrade in performance and user experience.
.</p>
              
              <button onClick={toggleDialogue}>Close</button>
            
            </div>
          </div>
        </div>
      )}
    </div>
    
    </div>
            <a href='/Sip'><br></br>
              <button>Buy Now</button>
              </a>
            </div>
          </div>
          <div className="search-item">
            <img src="https://www.wepc.com/wp-content/uploads/2020/01/iBUYPOWER-Element-9260-957x1200.jpg " alt="Product 4" className="product-image" />
            <div className="product-details">
              <p className="change">NXTGN Core i9 Gaming PC (Core i9 11th Gen Processor, 32GB RAM, 1TB SSD, 4TB Hard Drive, Windows 11 Pro)</p>
              <p><b>₹58,900</b></p>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="recent-searches">
        <h2>New Arrivals</h2>
        <div className="search-items">
          <div className="search-item">
            <img
              src="https://th.bing.com/th/id/OIP.Ebv6R8wCj8CefKmyZzO5igHaEK?w=331&h=186&c=7&r=0&o=5&pid=1.7" alt="Product 1" className="product-image" />
            <div className="product-details">
              <p className="change">Lenovo yoga notebook laptop adds better spaces and new tricks</p>
              <p><b>₹79,199</b></p>
              <div className="dialogue-container">
       <div className="dialogue-container">
      {/* <button className=' learnmore' onClick={toggleDialogue}>learn more</button><br></br> */}
      {isOpen && (
        <div className="dialogue-overlay" onClick={toggleDialogue}>
          <div className="dialogue" onClick={(e) => e.stopPropagation()}>
            <div className="dialogue-content">
              <h2>iPhone 13</h2>
              <p>The iPhone 13 series, including the iPhone 13, iPhone 13 mini, iPhone 13 Pro, and iPhone 13 Pro Max,
              features improved cameras.</p>
              
              <button onClick={toggleDialogue}>Close</button>
            
            </div>
          </div>
        </div>
      )}
    </div>
    
    </div>
              <a href='/Laptop'>
              <button>Buy Now</button></a>
            </div>
          </div>
          <div className="search-item">
            <img src="https://th.bing.com/th/id/OIP.3Q6rFPundtHq0SDL5Jwh7gHaHa?pid=ImgDet&w=182&h=182&c=7" alt="Product 2" className="product-image" />
            <div className="product-details">
              <p className="change">Vintage Leather Handbag Cross Body Shoulder Bag </p>
              <p><b>₹1,180</b></p>
              <button>Buy Now</button>
            </div>
          </div>
          <div className="search-item">
            <img src="https://orebishopping.vercel.app/static/media/spfFour.d005441cba54d7214bf7.webp" alt="Product 3" className="product-image" />
            <div className="product-details">
              <p className="change">Sun glasses  </p>
              <p><b>₹500</b></p>
              <div className="dialogue-container">
       <div className="dialogue-container">
      {/* <button className=' learnmore' onClick={toggleDialogue}>learn more</button><br></br> */}
      {isOpen && (
        <div className="dialogue-overlay" onClick={toggleDialogue}>
          <div className="dialogue" onClick={(e) => e.stopPropagation()}>
            <div className="dialogue-content">
              <h2>iPhone 13</h2>
              <p>The iPhone 13 series, including the iPhone 13, iPhone 13 mini, iPhone 13 Pro, and iPhone 13 Pro Max,
              features improved cameras.</p>
              
              <button onClick={toggleDialogue}>Close</button>
            
            </div>
          </div>
        </div>
      )}
    </div>
    
    </div>
              <button>Buy Now</button>
            </div>
          </div>
          <div className="search-item">
            <img src="https://orebishopping.vercel.app/static/media/newArrOne.5982a995e5c312914fe6.webp" alt="Product 4" className="product-image" />
            <div className="product-details">
              <p className="change">Round Table Clock With European Pedestal</p>
              <p><b>₹58,900</b></p>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
<div className="banner">
<img src={img4} alt="Banner" className="banner-image" />
</div>
<br></br><br></br>

<footer>
  <div class="footer-content">
    <div class="footer-left">
      <h3> Drift </h3>
      <p>Welcome to Drift, your premier destination for all things online shopping! Explore our vast selection of products ranging from electronics, fashion, beauty, home essentials, and more. With user-friendly navigation and secure payment options, we make your shopping experience seamless and enjoyable. Whether you're searching for the latest gadgets, trendy fashion pieces, or unique gifts, we've got you covered. Shop with confidence and convenience at Drift today!"</p>
    </div>
    <div class="footer-center">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
    <div class="footer-right">
      <h3>Contact Us</h3>
      <p>Email: drift@gmail.com</p>
      <p>Phone: 123-456-7890</p>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 Drift . All rights reserved.</p>
  </div>
</footer>


</div>

  );
}

export default Home;