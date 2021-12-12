import { Box } from "@welcome-ui/box";
import { Text } from "@welcome-ui/text";
import { Shape } from "@welcome-ui/shape";
import Image from "next/image";
import dianeAvatar from "../assets/dianeAvatar.png";
import fingercrossedDiane from "../assets/fingercrossedDiane.png";
import happyDiane from "../assets/happyDiane.png";
import oopsDiane from "../assets/oopsDiane.png";
import { useState } from "react";
import styled from "styled-components";

const ShapeStyled = styled(Shape)`
  cursor: pointer;
`;

export default function Header() {
  const [easterEgg, setEasterEgg] = useState(false);
  const [avatars, setAvatars] = useState([
    dianeAvatar,
    fingercrossedDiane,
    happyDiane,
    oopsDiane,
  ]);
  const [index, setIndex] = useState(0);

  function checkIndex() {
    if (index === avatars.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <Box w="100%" bg="white" padding="4xl" display="flex">
      <Text variant="h3" as="h1">
        Welcome to the Leiksa Universe
      </Text>
      <ShapeStyled w="48px" h="48px">
        <Image alt="" src={avatars[index]} onClick={() => checkIndex()} />
      </ShapeStyled>
    </Box>
  );
}
