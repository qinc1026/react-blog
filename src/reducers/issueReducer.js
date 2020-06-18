import {
    FETCH_ISSUES,
    PAGE_ARTICLES
} from '../actions/const';

const INITIAL_STATE = {
    articles: null,
    articlesToShow: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_ISSUES:
            console.log(action.payload);
            return { ...state, articles: action.payload };
        case PAGE_ARTICLES:
            let start = action.payload.start;
            let end = Math.min(state.articles.length, action.payload.end);
            return {...state, articlesToShow: state.articles.slice(start, end)};
        default:
            return state
    }
}