import { createSelector } from 'reselect';

const selectNews = state => state.news;

export const getHeadlines = () =>
  createSelector(selectNews, (headlines) =>
    headlines.get('headlines').toJS()
);
