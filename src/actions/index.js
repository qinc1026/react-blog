import issues from '../apis/issues';
import { FETCH_ISSUES, REPO_OWNER, REPO_NAME, ISSUE_CREATOR, PAGE_ARTICLES } from './const';
import history from '../utils/history';

export const getIssues = () => async dispatch => {
    const response = await issues.get(
        (`/repos/${REPO_OWNER}/${REPO_NAME}/issues`),
        { creator: ISSUE_CREATOR });
    console.log(response.data);
    dispatch({ type: FETCH_ISSUES, payload: response.data });
}

export const getIssuesByLabel = (label) => async dispatch => {
    const response = await issues.get(
        ('/repos/%s/%s/issues', REPO_OWNER, REPO_NAME),
        {   creator: ISSUE_CREATOR, label: label });
    dispatch({ type: FETCH_ISSUES, payload: response.data });
    history.push('/');
}

export const articlesPaging = (start, end) => {
    return {
        type: PAGE_ARTICLES,
        payload: {
            start: start,
            end: end
        }
    }
}
