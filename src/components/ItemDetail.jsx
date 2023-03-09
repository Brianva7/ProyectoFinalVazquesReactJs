import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import sofa from "../assets/sofa.png";
import { useEffect } from "react";

const ItemDetail = ({ products }) => {
  const { id } = useParams();

  /*   const [product, setProduct] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const element = doc(db, "sillones", `${id}`);
    getDoc(element).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct(snapshot.data());
      } else {
        console.log("Document is empty");
      }
    });
  }, []); */

  const prodFilter = products.filter((prod) => prod.id == id);
  return (
    <>
      {prodFilter.map((prod) => (
        <div key={prod.id} className="itemContainer">
          <Card maxW="sm">
            <Center padding={3}>
              <Link to={"/catalogue"}>
                <ArrowBackIcon boxSize={6} color="teal" />
              </Link>
            </Center>
            <CardBody>
              <Image src={sofa} alt="Sofa" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{prod.name}</Heading>
                <Text>{prod.description}</Text>
                <Text color="blue.600" fontSize="2xl">
                  ${prod.price}
                </Text>
                <Text>Stock: {prod.stock}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2" className="footerButtons">
                <ItemCount
                  id={prod.id}
                  name={prod.name}
                  price={prod.price}
                  stock={prod.stock}
                />
              </ButtonGroup>
            </CardFooter>
          </Card>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
