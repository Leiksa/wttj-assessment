import { Box } from "@welcome-ui/box";
import { Field } from "@welcome-ui/field";
import { InputText } from "@welcome-ui/input-text";
import { Select } from "@welcome-ui/select";
import { SearchIcon, MapIcon, SuitcaseIcon } from "@welcome-ui/icons";

export default function SearchSection(props) {
  const { jobs, setSearch, setDepartment, setOffice, department, office } =
    props;

  const departments = jobs
    .reduce(
      (acc, job) =>
        acc.includes(job.department.name)
          ? acc
          : acc.concat(job.department.name),
      []
    )
    .map((elem) => ({ label: elem, value: elem }));

  departments.unshift({ label: "None", value: "None" });

  const offices = jobs
    .reduce(
      (acc, job) =>
        acc.includes(job.office.name) ? acc : acc.concat(job.office.name),
      []
    )
    .map((elem) => ({ label: elem, value: elem }));

  offices.unshift({ label: "None", value: "None" });

  return (
    <Box padding="3xl" display="flex" flexWrap="wrap">
      <Box flex="1 0" minWidth={0.6}>
        <Field
          icon={<SearchIcon label="SearchBar" color="light.100" />}
          component={InputText}
          isClearable
          name="searchBar"
          label="Search"
          throttle={1000}
          placeholder="Your dream job?"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <Box
        flex="1 0"
        display="flex"
        mt={{ xs: 10, lg: 0 }}
        flexWrap={{ xs: "wrap", sm: "nowrap" }}
      >
        <Box w="100%" mx={{ xs: 0, sm: 6 }}>
          <Field
            icon={<SuitcaseIcon label="suitcaseIcon" color="light.100" />}
            component={Select}
            value={department === "None" ? "" : department}
            onChange={(e) => setDepartment(e)}
            options={departments}
            label="Department"
          />
        </Box>
        <Box w="100%" mt={{ xs: 10, sm: "0" }}>
          <Field
            icon={<MapIcon label="mapIcon" color="light.100" />}
            component={Select}
            value={office === "None" ? "" : office}
            onChange={(e) => setOffice(e)}
            options={offices}
            label="City"
          />
        </Box>
      </Box>
    </Box>
  );
}
