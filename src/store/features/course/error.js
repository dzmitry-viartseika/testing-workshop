export function fetchTodayCourseError(state, action) {
    return {
        ...state,
        value: action.payload,
        error: 'rejected'
    }
}