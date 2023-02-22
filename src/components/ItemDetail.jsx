import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
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
} from "@chakra-ui/react";
import sofa from "../assets/sofa.png";

const ItemDetail = ({ products }) => {
  const { id } = useParams();

  const prodFilter = products.filter((prod) => prod.id == id);
  return (
    <>
      {prodFilter.map((prod) => (
        <div key={prod.id} className="itemContainer">
          <Card maxW="sm">
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
                <ItemCount stock={prod.stock} />
              </ButtonGroup>
            </CardFooter>
          </Card>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
