export const selectCampers = (state) => state.campers?.data ?? [];
export const selectIsNextPage = (state) => state.campers?.nextPage ?? false;
export const selectIsFetching = (state) => state.campers?.isLoading ?? false;
export const selectError = (state) => state.campers?.error ?? null;
