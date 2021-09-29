import './index.css';
import {ChakraProvider, chakra,Image,Flex,useColorModeValue, Link, Box, Text} from '@chakra-ui/react';
import axios from 'axios';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';
const queryClient = new QueryClient();


function News() {
  const {isLoading, isError, data, error} = useQuery('movies', fetchMovies);

  if (error) return 'An error has occured: ' + error.message;

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      {data.articles.map((article) => (
        <div className="card">
          <div className="card-content">
            <Cards article={article} />
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {  
  return (
    <ChakraProvider>
    <QueryClientProvider client={queryClient}>
      <div className="App">
      <header class="flex-none relative z-50 text-sm leading-6 font-medium ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-5 bg-white">
            <Nav />
      </header>
      <body class="grid-flow-row">
        <section>
        <Text color="gray.500" class="text-xl text-center">
          Recent posts
        </Text>
          <News />
        </section>
      </body>
    </div>
    </QueryClientProvider>
    </ChakraProvider>
  )
}

function Nav() {
  return (
    <nav aria-label="Global" class="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center  flex-wrap sm:flex-nowrap  ">
      <a href="/components" class="flex-none text-gray-900">
        <span class="sr-only">Tailwind UI</span>
        <p>Talkz</p>
      </a>
              <p class="hidden lg:block text-sm text-gray-500 font-normal xl:border-l xl:border-gray-200 ml-3 xl:ml-4 xl:pl-4 xl:py-0.5">
          <span class="hidden xl:inline">Read quick ⚡️ news now</span>
          <span class="xl:hidden">by the creators of Tailwind CSS</span>
        </p>
                                    <div class="w-full flex-none mt-4 sm:mt-0 sm:w-auto sm:ml-auto flex items-center">
        <a href="/login" class="group border-l pl-6 border-gray-200 hover:text-teal-600 flex items-center">
          Sign in
          <svg aria-hidden="true" width="11" height="10" fill="none" class="flex-none ml-1.5 text-gray-400 group-hover:text-teal-600">
            <path d="M5.593 9.638L10.232 5 5.593.36l-.895.89 3.107 3.103H0v1.292h7.805L4.698 8.754l.895.884z" fill="currentColor"></path>
          </svg>
        </a>
      </div>
          </div>
  </nav>
  );
}

function fetchMovies({ pageParam=1 }) {
  return axios(`https://newsapi.org/v2/top-headlines?country=us&apiKey=b88aa75a680d4e95b7ce077e98b28704`).then(
    (result) => result.data,
  );
}

function Cards(props){
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={10}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue("white", "gray.800")}
        maxW="2xl"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {new Date(props.article.publishedAt).toLocaleDateString()}
          </chakra.span>
          <Link
            px={3}
            py={1}
            bg="gray.600"
            color="gray.100"
            fontSize="sm"
            fontWeight="700"
            rounded="md"
            _hover={{ bg: "gray.500" }}
          >
            Design
          </Link>
        </Flex>

        <Box mt={2}>
          <Link
            isExternal
            fontSize="2xl"
            color={useColorModeValue("gray.700", "white")}
            fontWeight="700"
            href={props.article.url}
            _hover={{
              color: useColorModeValue("gray.600", "gray.200"),
              textDecor: "underline",
            }}
          >
            {props.article.title}
          </Link>
          <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
            {props.article.description}
          </chakra.p>
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <Link
            color={useColorModeValue("brand.600", "brand.400")}
            _hover={{ textDecor: "underline" }}
          >
            Read more
          </Link>

          <Flex alignItems="center">
            <Link
              color={useColorModeValue("gray.700", "gray.200")}
              fontWeight="700"
              cursor="pointer"
            >
              {props.article.source.name}
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default App;