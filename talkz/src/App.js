import { Box, chakra, ChakraProvider, extendTheme, Link, Stack, useColorModeValue } from '@chakra-ui/react';
import { Link as ReachLink, Router } from '@reach/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import DisplaySpecificNews from './DisplaySpecificNew';
import './index.css';
import ShowNews from './ShowNews';
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    400: "#0070f3",
    600: "#1a365d",
     900: "#1a365d",
     800: "#153e75",
     700: "#2a69ac",
   },
 }
 const theme = extendTheme({ colors })


const queryClient = new QueryClient();



function App() {  
  return (
    <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <div className="App">
      <header class="flex-none relative z-50 text-sm leading-6 font-medium ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-5 bg-white">
            <Nav />
      </header>
      <Router>
        <KuttyHero path="/"/>
        <ShowNews exact path="/news" />
        <DisplaySpecificNews path="/show-news"/>
      </Router>
      </div>
    </QueryClientProvider>
    </ChakraProvider>
  )
}

const KuttyHero = () => {
  return (
    <Box pos="relative" overflow="hidden">
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          w="full"
          border="solid 1px transparent"
        >
          <Box
            mx="auto"
            maxW={{ base: "7xl" }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt={{ base: 12, md: 16, lg: 20, xl: 28 }}
          >
            <Box
              textAlign="center"
              w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
              mx="auto"
            >
              <chakra.h1
                fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color={useColorModeValue("gray.900", "white")}
              >
                <chakra.span display={{ base: "block", xl: "inline" }}>
                  Quick News ⚡️{" "}
                </chakra.span>
                <chakra.span
                  display={{ base: "block", xl: "inline" }}
                  color={useColorModeValue("brand.600", "brand.400")}
                >
                  by Gabriel
                </chakra.span>
              </chakra.h1>
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                mx={{ sm: "auto", lg: 0 }}
                mb={6}
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.500"
                lineHeight="base"
              >
                Quickly read news around the world ranging from politics, business, sports, entertainment, science, technology, health, and more.
              </chakra.p>
              <Stack
                direction={{ base: "column", sm: "column", md: "row" }}
                mb={{ base: 4, md: 8 }}
                spacing={{ base: 4, md: 2 }}
                justifyContent="center"
              >
                <Box rounded="full" shadow="md">
                  <Link
                  as={ReachLink}
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="solid 1px transparent"
                    fontSize={{ base: "md", md: "lg" }}
                    rounded="md"
                    color="white"
                    bg="brand.600"
                    _hover={{ bg: "brand.700" }}
                    px={{ base: 8, md: 10 }}
                    py={{ base: 3, md: 4 }}
                    cursor="pointer"
                    to="/news"
                  >
                    Get started
                  </Link>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

function Hello() {
  return <div>Hello</div>;
}

function Nav() {
  return (
    <div>
    <nav aria-label="Global" class="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center  flex-wrap sm:flex-nowrap  ">
      <Link as={ReachLink} to="/" class="flex-none text-gray-900">
        <span class="sr-only">Tailwind UI</span>
        <p>Talkz</p>
      </Link>
              <p class="hidden lg:block text-sm text-gray-500 font-normal xl:border-l xl:border-gray-200 ml-3 xl:ml-4 xl:pl-4 xl:py-0.5">
          <span class="hidden xl:inline">Read quick ⚡️ news now</span>
          <span class="xl:hidden">by the creators of Tailwind CSS</span>
        </p>
                                    <div class="w-full flex-none mt-4 sm:mt-0 sm:w-auto sm:ml-auto flex items-center">
        <Link as={ReachLink} to="/login" class="group border-l pl-6 border-gray-200 hover:text-teal-600 flex items-center">
          Sign in
          <svg aria-hidden="true" width="11" height="10" fill="none" class="flex-none ml-1.5 text-gray-400 group-hover:text-teal-600">
            <path d="M5.593 9.638L10.232 5 5.593.36l-.895.89 3.107 3.103H0v1.292h7.805L4.698 8.754l.895.884z" fill="currentColor"></path>
          </svg>
        </Link>
      </div>
          </div>
  </nav>
  </div>
  );
}
export default App;