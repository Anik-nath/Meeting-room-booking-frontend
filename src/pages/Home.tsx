import CustomerReview from "../Components/CustomerReview/CustomerReview";
import Hero from "../Components/Hero/Hero";
import HowItWorks from "../Components/HowItWorks/HowItWorks";
import Services from "../Components/Services/Services";
import Whyus from "../Components/Whyus/Whyus";

export default function Home() {
  return (
    <div className="mx-auto">
      <Hero></Hero>
      <Services></Services>
      <Whyus></Whyus>
      <HowItWorks></HowItWorks>
      <CustomerReview></CustomerReview>
    </div>
  )
}
