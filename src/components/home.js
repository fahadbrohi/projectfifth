import React from 'react';
import './home.css'
import techno from './../images/Technology.png';
import useWebAnimations, {bounceInLeft, pulse, heartBeat }from "@wellyshen/use-web-animations";
import pic from './../images/image.svg';

function Home(){
    const { Keyframes, timings } = heartBeat;
const { ref: ref2} = useWebAnimations({
  Keyframes,
  timing: {
    ...timings,
    delay: 1000, // Delay 1s
    //duration: timing.duration * 0.75, // Speed up the animation
    iterations: Infinity
  },
});

    const { keyframes, timing } = pulse;
const { ref: morning } = useWebAnimations({
  keyframes,
  timing: {
    ...timing,
    delay: 1000, // Delay 1s
    //duration: timing.duration * 0.75, // Speed up the animation
    iterations: Infinity
  },
});
    const { ref } = useWebAnimations({
        keyframes: [
            {transform: "translate(20px, 10px)"},
            {transform: "translateX(40px, 10px)"},
        ],
        timing: {
          delay: 500, 
          duration: 1000, 
          iterations: Infinity, 
          direction: "alternate", 
          easing: "ease-in-out", 
        },
      });
      const {ref: text}= useWebAnimations({...bounceInLeft

      })

return(
    <>

<section className="secone">

<div>
    <h1 className='h1' ref={text} >
        "The Brain is wider than the sky & your brain works just like a computer so make sure you're the only one programming it"
    </h1>
    <img ref={ref} src={techno} className="imgone" alt="img"/>
    
</div>

</section>

<section className="sectwo">

    <div>
    <p className="para" ref={morning}>
           "Early morning walk is blessing for the whole day"
        </p>
        <img ref={ref2} src={pic} className="image2" alt="pic" />
    </div>
    <footer className="footer">
        Made By: Fahad Brohi
    </footer>
    
</section>
</>
)
}
export default Home;