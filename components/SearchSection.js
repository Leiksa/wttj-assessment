import { Box } from "@welcome-ui/box";
import { Field } from "@welcome-ui/field";
import { Form } from "react-final-form";
import { InputText } from "@welcome-ui/input-text";
import { Select } from "@welcome-ui/select";
import { SearchIcon, MapIcon, SuitcaseIcon } from "@welcome-ui/icons";

export default function SearchSection() {
  const arr = ["hey", "lol"];
  return (
    <Box padding="3xl" display="flex" flexWrap="wrap">
      <Box flex="1 0" minWidth={0.6}>
        <Form
          onSubmit={() => alert("lol")}
          initialValues={{}}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                icon={<SearchIcon label="Social networks" color="light.100" />}
                component={InputText}
                isClearable
                name="searchBar"
                label="Search"
                placeholder="Your dream job?"
              />
            </form>
          )}
        ></Form>
      </Box>
      <Box
        flex="1 0"
        display="flex"
        mt={{ xs: 10, lg: 0 }}
        flexWrap={{ xs: "wrap", sm: "nowrap" }}
      >
        <Box w="100%" mx={{ xs: 0, sm: 6 }}>
          <Form
            onSubmit={() => alert("youhou")}
            initialValues={{ welcome3: ["github", "twitter"] }}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  icon={
                    <SuitcaseIcon label="Social networks" color="light.100" />
                  }
                  component={Select}
                  isMultiple
                  options={arr}
                  name="welcome3"
                  label="Department"
                />
              </form>
            )}
          ></Form>
        </Box>
        <Box w="100%" mt={{ xs: 10, sm: "0" }}>
          <Form
            onSubmit={() => alert("youhou")}
            initialValues={{ welcome3: ["github", "twitter"] }}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  icon={<MapIcon label="Social networks" color="light.100" />}
                  component={Select}
                  isMultiple
                  options={["github", "twitter"]}
                  name="welcome3"
                  label="City"
                />
              </form>
            )}
          ></Form>
        </Box>
      </Box>
    </Box>
  );
}
