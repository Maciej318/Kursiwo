import CourseSection from "./Components/CourseSection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import InformationSection from "./Components/InformationSection";
import LeftHeader from "./Components/LeftHeader";
import SearchSection from "./Components/SearchSection";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f6f4ee] font-sans antialiased text-stone-800">
      {/* Sidebar (na mobile: pasek na górze, który spycha treść w dół) */}
      <LeftHeader />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <SearchSection />
        <main className="flex-1">
          <HeroSection />
          <CourseSection />
          <InformationSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}