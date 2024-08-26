import Hero from "../Components/Hero/Hero";
import HowItWorks from "../Components/HowItWorks/HowItWorks";
import Services from "../Components/Services/Services";

export default function Home() {
  return (
    <div className="mx-auto">
      <Hero></Hero>
      <Services></Services>
      <HowItWorks></HowItWorks>
    </div>
  )
}
