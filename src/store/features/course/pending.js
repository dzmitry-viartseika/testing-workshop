export function fetchTodayCoursePending(state) {
    return {
        ...state,
        status: 'loading'
    }
}