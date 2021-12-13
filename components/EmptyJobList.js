import { Box } from "@welcome-ui/box";
import { Text } from "@welcome-ui/text";
import { Shape } from "@welcome-ui/shape";
import dianeSad from "../assets/dianeSad.png";
import Image from "next/image";
import styled from "styled-components";

const ShapeStyled = styled(Shape)`
  cursor: pointer;
`;

export default function EmptyJobList() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" px="3xl">
      <Text variant="h4" as="p" textAlign="center">
        Oh no ! There are no jobs matching your search.
      </Text>
      <ShapeStyled w="86px" h="86px">
        <Image alt="" src={dianeSad} />
      </ShapeStyled>
    </Box>
  );
}
