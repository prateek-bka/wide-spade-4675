import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
// import jsonData from "../../data.json";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
  Stack,
  Heading,
  Divider,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

const Products = () => {
  const [data, setData] = useState([]);
  // const [jsonData, setJsonData] = useState([]);
  const myStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    margin: "2%",
  };

  async function getData() {
    axios
      .get(
        "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush"
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div style={myStyles}>
        {data.map((e) => (
          <Card maxW="sm" m={1} p={1}>
            <CardBody>
              <Image src={e.image_link} alt={e.name} w={"full"}></Image>
              <Stack mt="6" spacing="3">
                <Heading size="md">{e.name}</Heading>
                <Text color={"blue.600"}>{`USD ${e.price}`}</Text>
              </Stack>
              <Divider />
              <CardFooter>
                <ButtonGroup>
                  <Button variant="solid" colorScheme="blue">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Products;
