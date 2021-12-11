import { Stack } from "@welcome-ui/stack";
import { JobItem } from ".";

export default function JobList(props) {
  const { organization } = props;
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing="0px"
      justifyContent="center"
    >
      {organization.jobs.map((job) => {
        return (
          <JobItem key={job.id} job={job} organization={organization.name} />
        );
      })}
    </Stack>
  );
}
