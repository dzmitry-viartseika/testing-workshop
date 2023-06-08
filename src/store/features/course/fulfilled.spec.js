import {initialCourseState} from "./slice";
import {fetchTodayCourseFulfilled} from "./fulfilled";

const LOADING_STATE = {
    ...initialCourseState,
    status: 'loading'
}

const IDLE = 'idle';

const TEST_ACTION = {payload: 42}
describe('when called with payload', () => {
    it('should return a state with the updated course', () => {
        const result = fetchTodayCourseFulfilled(LOADING_STATE, TEST_ACTION);
        expect(result.value).toEqual(TEST_ACTION.payload)
    });

    it('should return a state with the loading status', () => {
        const result = fetchTodayCourseFulfilled(LOADING_STATE, TEST_ACTION);
        expect(result.status).toEqual(IDLE);
    });
})