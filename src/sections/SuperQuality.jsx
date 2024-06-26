import Button from "../components/Button";
import { shoe8 } from "../assets/images"; 

const SuperQuality = () => {
  return (
    <section id="about us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
        <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            We Provide You
          <span className="text-coral-red"> Super </span> 
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">At Peak Performance, we believe in pushing boundaries and redefining what's possible. Our mission is to empower athletes of all levels with innovative, high-performance gear designed to elevate your game. Whether you're hitting the track, the gym, or the streets, our apparel and footwear are engineered to meet the demands of your sport and lifestyle.</p>
      <p className="mt-6 lg:max-w-lg info-text">Discover our latest arrivals and get ready to elevate your performance.</p>
      <div className="mt-11">
      < Button label="View details"  />
      </div>
      
        </div>

        <div className="flex-1 flex justify-center items-center">
          <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
        </div>
    </section>
  )
}

export default SuperQuality