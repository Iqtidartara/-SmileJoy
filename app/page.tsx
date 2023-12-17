import About from "@/components/About";
import NewComponent from "@/components/Carousel";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq's";
import HomeSection from "@/components/HomeSection";
import Services from "@/components/Services";
import Smile from "@/components/Smile";
import Testemonial from "@/components/Testemonial";
import Footer from "@/components/footer";

export default function Home() {
  return (
  <main>
<HomeSection/>
<About />
<NewComponent />
<Services/>
<Contact/>
<Smile />
<Testemonial />
<Faq />
<Footer />
  </main>
  )
}
