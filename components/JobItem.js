import { Card } from "@welcome-ui/card";
import { Text } from "@welcome-ui/text";
import { Button } from "@welcome-ui/button";
import { Box } from "@welcome-ui/box";
import { Modal, useModalState } from "@welcome-ui/modal";
import {
  DateIcon,
  LocationIcon,
  ContractIcon,
  ActionsIcon,
  CrossIcon,
  TargetIcon,
} from "@welcome-ui/icons";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import styled from "styled-components";

// Modal no overflow if max-height is not 100vh but auto
const StyledModal = styled(Modal)`
  max-height: 100vh;
`;

function JobModal(props) {
  const { job } = props;
  // client side only to fix aria-control not same on Client & Server
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const modal = useModalState();
  const website = job.websites_urls.find(
    (websites_url) => websites_url.website_reference === "wttj_fr"
  );

  return (
    mounted && (
      <>
        <Modal.Trigger
          as={Button}
          {...modal}
          borderRadius="0px"
          color="dark.900"
          display="flex"
          mx="auto"
        >
          <ActionsIcon />
          <span>See more</span>
        </Modal.Trigger>
        <StyledModal {...modal} ariaLabel="job-modal">
          <Modal.Title>{job.name}</Modal.Title>
          <Modal.Content
            overflow="auto"
            as="div"
            p="xxl"
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
          <Modal.Footer>
            <Box w={1} display="flex" justifyContent="space-between">
              <Button
                as="a"
                href={website.url}
                target="_blank"
                rel="noopener nofollow"
                borderRadius="0px"
                variant="secondary"
              >
                <TargetIcon />
                <span>Apply</span>
              </Button>
              <Button
                borderRadius="0px"
                color="dark.900"
                onClick={() => modal.hide()}
              >
                <CrossIcon />
                <span>Close</span>
              </Button>
            </Box>
          </Modal.Footer>
        </StyledModal>
      </>
    )
  );
}

export default function JobItem(props) {
  const { job, organization } = props;

  return (
    <Box margin="0.75rem">
      <Card w={{ xs: 350, sm: 400 }} h="100%">
        <Card.Cover
          w={1}
          h={200}
          src="https://cdn-images.welcometothejungle.com/j_bEc6SGPtcJ5XX-USxSFB94f2-X-ee1CcoGyMVXGr8/w:640/q:85/czM6Ly93dHRqLXBy/b2R1Y3Rpb24vdXBs/b2Fkcy93ZWJzaXRl/X29yZ2FuaXphdGlv/bi9jb3Zlcl9pbWFn/ZS93dHRqX2ZyL2Zy/LXd0dGouanBn"
        />
        <Card.Body padding={20}>
          <Text variant="body3" as="h2" mt={0}>
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

          <Box display="flex" justifyContent="" gap={8} mb={4}>
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
          <Box display="flex" mb={20}>
            <DateIcon my="auto" mr={6} />
            <Text variant="body3" my={2}>
              {dayjs(job.published_at).format("MMMM DD, YYYY")}
            </Text>
          </Box>

          <JobModal job={job} />
        </Card.Body>
      </Card>
    </Box>
  );
}
