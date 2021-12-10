import { Box } from "@welcome-ui/box";
import { Text } from "@welcome-ui/text";

export default function Header() {
  return (
    <Box w="100%" bg="white" padding="4xl">
      <Text variant="h3" as="h1">
        Welcome to the Leiksa Universe
      </Text>
    </Box>
  );
}
