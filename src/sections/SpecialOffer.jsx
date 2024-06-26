import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="" width={773} height={687} className="object-contain" />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            
          <span className="text-coral-red"> Special </span> 
           Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Elevate your game with incredible savings on our top-rated gear. For a limited time, enjoy up to 50% off select items across our entire collection. Whether you're gearing up for a marathon, hitting the gym, or simply looking for stylish activewear, now is the perfect time to upgrade your performance wardrobe.</p>
      <p className="mt-6 lg:max-w-lg info-text">Don’t miss out on our exclusive, limited-edition items. Once they're gone, they’re gone for good. Shop now to secure your piece of Peak Performance history.</p>
      <div className="mt-11 flex flex-wrap gap-4">
      < Button label="Shop now" iconUrl={arrowRight} />
      <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
      </div>
      
        </div>
    </section>
  )
}

export default SpecialOffer