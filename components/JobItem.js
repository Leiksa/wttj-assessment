import { Card } from "@welcome-ui/card";
import { Text } from "@welcome-ui/text";
import { Button } from "@welcome-ui/button";
import { Box } from "@welcome-ui/box";
import { x } from "@xstyled/styled-components";
import {
  DateIcon,
  LocationIcon,
  ContractIcon,
  ActionsIcon,
} from "@welcome-ui/icons";
import dayjs from "dayjs";

export default function JobItem(props) {
  const { job, organization } = props;
  return (
    <Box margin="0.75rem">
      <Card w={{ xs: 350, sm: 400 }} h="100%">
        <Card.Body>
          <Text variant="body3" as="h2">
            {organization}
          </Text>
          <Text
            variant="h4"
            as="h1"
            fontWeight="bold"
            mt={0}
            mb="lg"
            color="dark.900"
            mx="auto"
          >
            {job.name}
          </Text>

          <Box display="flex" justifyContent="">
            <Box display="flex">
              <ContractIcon my="auto" mr={6} />
              <Text variant="body3" my={2}>
                {job.contract_type.en}
              </Text>
            </Box>
            <Box display="flex">
              <LocationIcon my="auto" mr={6} />
              <Text variant="body3" my={2}>
                {job.office.name}, {job.office.country.en}
              </Text>
            </Box>
          </Box>

          <Text
            variant="body2"
            as="div"
            lines={3}
            mb={8}
            dangerouslySetInnerHTML={{ __html: job.description }}
          />

          <Box display="flex">
            <DateIcon my="auto" mr={6} />
            <Text variant="body3" my={2}>
              {dayjs(job.published_at).format("MMMM DD, YYYY")}
            </Text>
          </Box>
          <Button borderRadius="0px" color="dark.900">
            <ActionsIcon />
            <x.span>See more</x.span>
          </Button>
        </Card.Body>
      </Card>
    </Box>
  );
}
