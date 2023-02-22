import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  CardFooter,
} from "@chakra-ui/react";
import sofa from "../assets/sofa.png";

const Item = ({ id, name, stock, category }) => {
  return (
    <>
      <div key={id} className="itemContainer">
        <Card maxW="sm">
          <CardBody>
            <Image src={sofa} alt="Sofa" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{name}</Heading>
              <Text>Category : {category}</Text>
              <Text color="teal.600" fontSize="2xl">
                Stock: {stock}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link to={`/item/${id}`}>
              <Button variant="solid" colorScheme="teal">
                Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Item;
