import Blogs from "@/components/Home/Blogs";
import Clients from "@/components/Home/Clients";
import FAQComponent from "@/components/Home/FAQs";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Testimonial from "@/components/Home/Testimonial";
import Newsletter from "@/components/Universal/Newsletter";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Blogs />
      <Clients />
      <Newsletter />
      <Testimonial />
      <FAQComponent />
    </div>
  );
}
