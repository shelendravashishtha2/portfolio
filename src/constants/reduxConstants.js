/**
 * Constants for Redux actions related to fetching data:
 *
 * - Fetch init/complete/error actions for projects, education, experience,
 *   awards, playlist, books, and poetry
 * - Using consistent naming scheme for each data type
 * - Allows tracking status of async data fetches in Redux state
 */
export const fetchInit = "FETCH_PROJECT_INIT";
export const fetchCompleted = "GOT_PROJECTS";
export const fetchErr = "ERR_FETCH_PROJECT";
export const fetchEducationInit = "FETCH_EDUCATION_INIT";
export const fetchEducationCompleted = "GOT_EDUCATION";
export const fetchEducationErr = "ERR_FETCH_EDUCATION";
export const fetchExperienceInit = "FETCH_EXPERIENCE_INIT";
export const fetchExperienceCompleted = "FETCH_EXPERIENCE_COMPLETED";
export const fetchExperienceErr = "FETCH_EXPERIENCE_ERR";
export const fetchAwardsInit = "FETCH_AWARDS_INIT";
export const fetchAwardsCompleted = "GOT_AWARDS";
export const fetchAwardsErr = "FETCH_AWARDS_ERR";
export const fetchPlaylistInit = "FETCH_PLAYLIST_INIT";
export const fetchPlaylistCompleted = "FETCH_PLAYLIST_COMPLETED";
export const fetchPlaylistErr = "FETCH_PLAYLIST_ERR";

export const fetchBooksInit = "FETCH_BOOK_INIT";
export const fetchBooksCompleted = "FETCH_BOOK_COMPLETED";
export const fetchBooksErr = "FETCH_BOOK_ERR";

export const fetchPoetryInit = "FETCH_POETRY_INIT";
export const fetchPoetryCompleted = "FETCH_POETRY_COMPLETED";
export const fetchPoetryErr = "FETCH_POETRY_ERR";


export const fetchBookReviewsInit = "FETCH_BOOK_REVIEWS_INIT";
export const fetchBookReviewsCompleted = "FETCH_BOOK_REVIEWS_COMPLETED";
export const fetchBookReviewsErr = "FETCH_BOOK_REVIEWS_ERR";