import React, {useEffect} from "react";
import "./Anim.css"

function Anim() {
    useEffect(() => {
        const handleScroll = () => {
            const strategies = document.querySelectorAll('.strategy');
            const arrows = document.querySelectorAll('.arrow');
      
            strategies.forEach((strategy) => {
              if (isInViewport(strategy)) {
                strategy.classList.add('animate');
              }
            });
      
            arrows.forEach((arrow) => {
              if (isInViewport(arrow)) {
                arrow.classList.add('animate');
              }
            });
          };
      
          const isInViewport = (element) => {
            const rect = element.getBoundingClientRect();
            return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
          };
          window.addEventListener('scroll', handleScroll);
            handleScroll();

            return () => {
            window.removeEventListener('scroll', handleScroll);
            };
    },[])
    return (
        <section id="think-section">
        <h2>How we think</h2>
        <div className="strategy" data-animation="fade-in">
            <h3>Strategy 1</h3>
            <p>How do you give the world’s safest car seat a priceless personality?</p>
            <span className="client">Client: babyark / consumer</span>
            <span className="arrow"></span>
        </div>
        <div className="strategy" data-animation="fade-in">
            <h3>Strategy 1</h3>
            <p>How do you give the world’s safest car seat a priceless personality?</p>
            <span className="client">Client: babyark / consumer</span>
            <span className="arrow"></span>
        </div>
        <div className="strategy" data-animation="fade-in">
            <h3>Strategy 1</h3>
            <p>How do you give the world’s safest car seat a priceless personality?</p>
            <span className="client">Client: babyark / consumer</span>
            <span className="arrow"></span>
        </div>
        <div className="strategy" data-animation="fade-in">
            <h3>Strategy 1</h3>
            <p>How do you give the world’s safest car seat a priceless personality?</p>
            <span className="client">Client: babyark / consumer</span>
            <span className="arrow"></span>
        </div>
        <div className="strategy" data-animation="fade-in">
            <h3>Strategy 1</h3>
            <p>How do you give the world’s safest car seat a priceless personality?</p>
            <span className="client">Client: babyark / consumer</span>
            <span className="arrow"></span>
        </div>
        <div className="strategy" data-animation="fade-in">
            <h3>Strategy 1</h3>
            <p>How do you give the world’s safest car seat a priceless personality?</p>
            <span className="client">Client: babyark / consumer</span>
            <span className="arrow"></span>
        </div>
        {/* Repeat the above structure for other strategies */}
        </section>
    );
}

export default Anim;