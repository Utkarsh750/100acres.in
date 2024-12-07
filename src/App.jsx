import "./App.css";
import AboutSignatureGlobal from "./components/AboutSignatureGlobal";
import ContactPage from "./components/ContactPage";
import { Header } from "./components/Header/Header";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SiteplanLegends from "./components/SiteplanLegends";
import Slider from "./components/Slider";
import Footer from "./Footer";
import FooterSlider from "./FooterSlider";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Component */}
      <header className="w-full">
        <Header />
      </header>

      {/* Slider Component */}
      <section className="w-full">
        <Slider />
      </section>

      {/* Contact Page 1 */}
      <section className="w-full">
        <ContactPage />
      </section>

      <div className="flex w-full h-94">
        {/* Left Image */}
        <div className="w-1/2">
          <img
            src="https://www.signatureprojects.co.in/signature-deluxe-dxp/assets/images/signature-deluxe-dxp.webp"
            alt="Left"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="w-1/2">
          <img
            src="https://www.signatureprojects.co.in/signature-deluxe-dxp/assets/images/signature-deluxe-dxp-37d.webp"
            alt="Right"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Text Section */}
      <div className="w-full bg-blue-950 text-white border-t-5 border-t-blue-900 py-6 px-0 min-h-48 flex justify-center items-center">
        <div className="text-center">
          <h4 className="text-base text-red-400 font-semibold mb-2">
            Signature Deluxe DXP - Signature Global New Project in Sector 37D
            Gurgaon
          </h4>
          <p className="text-sm">
            Signature Deluxe DXP Sector 37D Gurgaon is an upcoming luxurious
            residential project. Signature Global 37D offers extensive amenities
            with marvellous location benefits. Their prime location bang on
            Dwarka Expressway is in Gurgaon, India, which is rapidly growing in
            the upper stages of real estate.
          </p>
        </div>
      </div>

      <section className="w-full">
        <FooterSlider />
      </section>

      <div className="bg-gray-300	 min-h-screen flex flex-col items-center justify-center">
        <span className="text-neutral-400	 text-sm font-bold">
          SIGNATURE DELUXE DXP
        </span>
        <span className="text-sm font-bold mb-6">Floor Plans trmp</span>
        <ImageGallery />
      </div>

      {/* Site plan Legends one */}
      <div className="w-full bg-blue-950 mb-2 min-h-screen flex flex-col items-center justify-center">
        <SiteplanLegends imgSrc="https://www.signatureprojects.co.in/signature-deluxe-dxp/assets/images/plans/master-plan.webp" />
      </div>

      {/* Site plan Legends two */}
      <div className="w-full bg-blue-950 min-h-screen flex flex-col items-center justify-center">
        <SiteplanLegends imgSrc="https://www.signatureprojects.co.in/signature-deluxe-dxp/assets/images/plans/master-plan-dxp.webp" />
      </div>

      <AboutSignatureGlobal />
      <Footer />
    </div>
  );
}

export default App;
