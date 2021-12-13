import React, { useState } from "react";
import { createTheme, WuiProvider } from "@welcome-ui/core";
import { Header, JobList, SearchSection } from "../components";
import axios from "axios";

const theme = createTheme({
  colors: {
    primary: {
      100: "#FFF8D9",
      200: "#FFE166",
      500: "#FFCD00",
      700: "#E5B800",
      800: "#735C00",
      900: "#4C3D00",
    },
    light: {
      100: "#737373",
      200: "#8C8C8C",
      500: "#999999",
      700: "#B3B3B3",
      800: "#E5E5E5",
      900: "#FFFFFF",
    },
    dark: {
      100: "#666666",
      200: "#4C4C4C",
      500: "#2B2B2B",
      700: "#1A1A1A",
      800: "#151515",
      900: "#000000",
    },
    nudes: {
      100: "#F6F3EF",
      200: "#EFEAE4",
      500: "#D6D2CC",
      700: "#8F8C88",
      800: "#6B6966",
      900: "#474543",
    },
    success: {
      100: "#E3F0EC",
      200: "#00A772",
      500: "#00875C",
    },
    danger: {
      100: "#FFE7E7",
      200: "#D87C6E",
      500: "#CE5947",
      700: "#AF4636",
    },
    info: {
      100: "#EDF3FE",
      200: "#4B9BF1",
      500: "#106DD1",
    },
    warning: {
      100: "#FFF2DC",
      200: "#EBC484",
      500: "#E4AE56",
      700: "#B97F22",
    },
  },
});

export default function Root(props) {
  const [organization, setOrganization] = useState(props.organization);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("None");
  const [office, setOffice] = useState("None");

  function filteredJobs() {
    return organization.jobs.filter(
      (job) =>
        job.name.toLowerCase().includes(search.toLowerCase()) &&
        (department === "None" || job.department.name === department) &&
        (office === "None" || job.office.name === office)
    );
  }

  return (
    <WuiProvider theme={theme}>
      <Header />
      <SearchSection
        jobs={organization.jobs}
        filteredJobs={filteredJobs()}
        department={department}
        office={office}
        setSearch={setSearch}
        setDepartment={setDepartment}
        setOffice={setOffice}
      />
      <JobList organization={organization} jobs={filteredJobs()} />
    </WuiProvider>
  );
}

export async function getServerSideProps() {
  try {
    const { data } = await axios.get(
      `https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k`
    );

    return {
      props: { organization: data },
    };
  } catch (error) {
    console.error(error);
    return { props: { organization: { name: null, jobs: [] } } };
  }
}
