import { Box } from "@welcome-ui/box";
import { Text } from "@welcome-ui/text";

export default function Footer() {
  return (
    <Box bg="white" padding={10} position="absolute" bottom="0" w="100%">
      <Text variant="h6" as="p" textAlign="center">
        Made with 💛 by Leiksa aka Diane
      </Text>
    </Box>
  );
}
