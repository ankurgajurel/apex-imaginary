"use client";

import TeamComponent from "@/components/Team/Team";
import client from "@/lib/client";
import { ApolloProvider } from "@apollo/client";

export default function TeamPage() {
  return (
    <ApolloProvider client={client}>
      <TeamComponent />
    </ApolloProvider>
  );
}
