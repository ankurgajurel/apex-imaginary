"use client";

import Blogs from "@/components/Home/Blogs";
import Clients from "@/components/Home/Clients";
import FAQComponent from "@/components/Home/FAQs";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Testimonial from "@/components/Home/Testimonial";
import Newsletter from "@/components/Universal/Newsletter";
import client from "@/lib/client";
import { ApolloProvider } from "@apollo/client";

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Hero />
        <Services />
        <Blogs />
        <Clients />
        <Newsletter />
        <Testimonial />
        <FAQComponent />
      </div>
    </ApolloProvider>
  );
}
