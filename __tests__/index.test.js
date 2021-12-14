/**
 * @jest-environment jsdom
 */

import Header from "../components/Header";
import { render, screen, fireEvent } from "@testing-library/react";
import { createTheme, WuiProvider } from "@welcome-ui/core";
import { JobItem } from "../components";
import { job } from "../mocks";

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

describe("Check page load", () => {
  test("Should render without crash", async () => {
    render(<Header />);
  });
});

describe("Check JobItem", () => {
  test("Should render JobItem", async () => {
    render(
      <WuiProvider theme={theme}>
        <JobItem job={job} organization="" />
      </WuiProvider>
    );

    const modalButton = screen.getByRole("button");
    expect(modalButton.textContent).toBe("See more");
  });

  test("Should render modal", async () => {
    render(
      <WuiProvider theme={theme}>
        <JobItem job={job} organization="" />
      </WuiProvider>
    );

    const modalButton = screen.getByRole("button");
    expect(modalButton.textContent).toBe("See more");
    fireEvent.click(modalButton);
    const modal = screen.getByLabelText("job-modal");
    expect(modal).not.toBeNull();
  });
});
