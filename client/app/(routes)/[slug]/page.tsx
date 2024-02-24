"use client";

import BlogComponent from "@/components/Blog/Blog";
import client from "@/lib/client";
import { ApolloProvider } from "@apollo/client";

export default function Blog({ params }: { params: { slug: string } }) {
  return (
    <div>
      <ApolloProvider client={client}>
        <BlogComponent slug={params.slug} />
      </ApolloProvider>
    </div>
  );
}
