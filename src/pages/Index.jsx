import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone XYZ",
    price: "$799",
    image: "path/to/smartphone.jpg",
  },
  {
    id: 2,
    name: "Laptop ABC",
    price: "$1299",
    image: "path/to/laptop.jpg",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: "$199",
    image: "path/to/headphones.jpg",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/products">Products</Link>
          <Link as={RouterLink} to="/about">About Us</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </HStack>
      </Flex>

      <Box as="main" mt={8}>
        <Heading as="h1" size="xl" mb={4} textAlign="center">Welcome to ElectroShop</Heading>
        <Text fontSize="lg" textAlign="center" mb={8}>Your one-stop shop for the latest electronics</Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {sampleProducts.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={4}>
                <Heading as="h3" size="md">{product.name}</Heading>
                <Text mt={2}>{product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;