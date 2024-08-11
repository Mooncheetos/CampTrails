export const selectCampers = (state) => state.campers.data;
export const selectIsNextPage = (state) => state.campers.nextPage;
export const selectIsFetching = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;