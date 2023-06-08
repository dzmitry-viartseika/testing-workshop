import { render, screen } from "@testing-library/react";
import { CurrentCourse } from "./CurrentCourse";
import { renderWithStore } from "../../testUtils";

describe("when rendered with a course value", () => {
    it("should contain the value in the body", () => {
        renderWithStore(<CurrentCourse />);
        expect(screen.getByTestId('current-course__value')).toBeInTheDocument()
    });
});