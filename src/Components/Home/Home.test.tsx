import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./Home";

describe("<Home />", () => {
  it("should render correctly", async () => {
    render(<Home />);
    await waitFor(() => {
      expect(screen.getByTestId("home-btn")).toHaveTextContent("Home");
    });
  });

  // it("should handle clicks correctly", async () => {
  //   render(<Home />);
  //   await waitFor(() => {
  //     expect(screen.getByTestId("home-btn")).toHaveTextContent("Home");
  //   });

  //   fireEvent.click(screen.getByTestId("home-btn"));
  //   await waitFor(() => {
  //     expect(screen.getByTestId("secret-btn")).toHaveTextContent(
  //       "The secret is..."
  //     );
  //   });

  //   fireEvent.click(screen.getByTestId("secret-btn"));
  //   await waitFor(() => {
  //     expect(screen.getByTestId("home-btn")).toHaveTextContent("Home");
  //   });
  // });
});
