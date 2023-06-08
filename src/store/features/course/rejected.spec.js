import {initialCourseState} from "./slice";
import {fetchTodayCourseFulfilled} from "./fulfilled";
import {fetchTodayCourseRejected} from "./rejected";

const LOADING_STATE = {
    ...initialCourseState,
    status: 'loading'
}

const REJECTED = 'rejected';

const TEST_ACTION = {payload: 'Went something wrong'}
describe('when called with error', () => {
    it('should return a state with the updated course', () => {
        const result = fetchTodayCourseRejected(LOADING_STATE, TEST_ACTION);
        expect(result.error).toEqual(TEST_ACTION.payload)
    });

    it('should return a state with the rejected status', () => {
        const result = fetchTodayCourseRejected(LOADING_STATE, TEST_ACTION);
        expect(result.status).toEqual(REJECTED);
    });
})