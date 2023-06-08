import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {fetchCourse} from "../../../api";
export const initialCourseState = {
    value: 42,
    status: 'idle',
    error: null,
}

export const fetchTodayCourse = createAsyncThunk(
    "course/fetchCourse",
    async () => {
        const response = await fetchCourse();
        return response.course;
    }
);

const courseSlice = createSlice({
    name: 'course',
    initialState: initialCourseState,
    extraReducers: {
        [fetchTodayCourse.pending]: (state, action) => state,
        [fetchTodayCourse.fulfilled]: (state, action) => state,
        [fetchTodayCourse.rejected]: (state, action) => state,
    }
});

export const selectCourse = (state) => state.course.value;
export const selectStatus = (state) => state.course.status;
export const selectError = (state) => state.course.error;
export default courseSlice.reducer;