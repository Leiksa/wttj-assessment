import { Stack } from "@welcome-ui/stack";
import { JobItem } from ".";

export default function JobList(props) {
  const { organization, jobs } = props;
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing="0px"
      justifyContent="center"
    >
      {jobs.map((job) => {
        return (
          <JobItem key={job.id} job={job} organization={organization.name} />
        );
      })}
    </Stack>
  );
}
