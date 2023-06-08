export function fetchTodayCourseRejected(state, action) {
    return {
        ...state,
        error: action.payload,
        status: 'rejected'
    }
}