import { createSlice } from '@redux/toolkit'
export const initialCourseState = {
    value: 42,
}

const courseSlice = createSlice({
    name: 'course',
    initialState: initialCourseState,
})

export const selectorCourse = (state) => state.course.value;
export default courseSlice.reducer