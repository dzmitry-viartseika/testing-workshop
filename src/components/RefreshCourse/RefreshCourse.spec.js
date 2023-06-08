import { screen } from "@testing-library/react";
import { renderWithStore } from "../../testUtils";
import { RefreshCourse } from "./RefreshCourse";
import {errorCourseState, loadingCourseState} from "../../testUtils/store";

describe("when the button is in initial state", () => {
    it("should contain the default text", () => {
        renderWithStore(<RefreshCourse />);
        expect(screen.getByTestId('refresh-course__button')).toBeInTheDocument();
    });
});

describe("when the button is in the loading state", () => {
    it("should contain the corresponding text", () => {
        renderWithStore(<RefreshCourse />, {
            state: {
                course: loadingCourseState,
            }
        });
        expect(screen.getByText(/Обновляем курс.../)).toBeInTheDocument();
    });
});

describe("when the button is in an error state", () => {
    it("should contain the error message", () => {
        renderWithStore(<RefreshCourse />, {
            state: {
                course: errorCourseState,
            }
        });
        expect(screen.getByText(/Something went wrong./)).toBeInTheDocument();
    });
});

describe("when the button is clicked", () => {
    it("should call the required action", () => {

    });
});