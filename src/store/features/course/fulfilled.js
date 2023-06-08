export function fetchTodayCourseFulfilled(state, action) {
    return {
        ...state,
        error: action.payload,
        status: 'idle'
    }
}