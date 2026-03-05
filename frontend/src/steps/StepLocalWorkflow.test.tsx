import { render, screen, fireEvent } from "@testing-library/react";
import StepLocalWorkflow from "./StepLocalWorkflow";

describe("<StepLocalWorkflow />", () => {
  it("renders with correct title", () => {
    render(<StepLocalWorkflow isDisabled={false} />);
    expect(
      screen.getByText("2. Set up your local workflow"),
    ).toBeInTheDocument();
  });

  it("is active (not disabled) when isDisabled=false", () => {
    render(<StepLocalWorkflow isDisabled={false} />);
    expect(screen.getByTestId("step-local-workflow")).not.toHaveClass(
      "is-disabled",
    );
  });

  it("applies disabled state when isDisabled=true", () => {
    render(<StepLocalWorkflow isDisabled={true} />);
    expect(screen.getByTestId("step-local-workflow")).toHaveClass(
      "is-disabled",
    );
  });

  it("shows Shell install tab by default", () => {
    render(<StepLocalWorkflow isDisabled={false} />);
    expect(screen.getByText(/installer\.sh/)).toBeInTheDocument();
  });

  it("switches to Homebrew install command when Homebrew tab is clicked", () => {
    render(<StepLocalWorkflow isDisabled={false} />);
    fireEvent.click(screen.getByText("Homebrew"));
    expect(
      screen.getByText("brew install platformsh/tap/upsun-cli"),
    ).toBeInTheDocument();
  });

  it("switches to Scoop install command when Scoop tab is clicked", () => {
    render(<StepLocalWorkflow isDisabled={false} />);
    fireEvent.click(screen.getByText("Scoop"));
    expect(screen.getByText(/scoop install upsun/)).toBeInTheDocument();
  });

  it("renders the link project command", () => {
    render(<StepLocalWorkflow isDisabled={false} />);
    expect(screen.getByText("upsun project:get")).toBeInTheDocument();
  });
});
