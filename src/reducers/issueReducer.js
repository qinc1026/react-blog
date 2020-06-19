import {
    FETCH_ISSUES,
    PAGE_ARTICLES,
    FETCH_ISSUE
} from '../actions/const';

const INITIAL_STATE = {
    articles: null,
    articlesToShow: [],
    articleToShow: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_ISSUES:
            return { ...state, articles: action.payload };
        case PAGE_ARTICLES:
            let start = action.payload.start;
            let end = Math.min(state.articles.length, action.payload.end);
            return {...state, articlesToShow: state.articles.slice(start, end)};
        case FETCH_ISSUE:
            return {...state, articleToShow: action.payload};
        default:
            return state
    }
}