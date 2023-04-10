import "@/styles/globals.css";
import * as React from "react";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
        <GridItem
          as="aside"
          colSpan={{ base: 6, lg: 2, xl: 1 }}
          bg="purple.400"
          minHeight={{ base: "10vh", lg: "100vh" }}
          p={{ base: "20px", lg: "30px" }}
        >
          <Sidebar />
        </GridItem>
        <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} p="40px">
          <Navbar />
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}
