import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Provider } from "@/components/ui/provider";
import { ApolloWrapper } from "./ApolloWrapper";

export const metadata: Metadata = {
  title: "Pickle Rick",
  description: "All things Rick and Mortey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ApolloWrapper>
          <Provider>
            <Header />
            {children}
          </Provider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
