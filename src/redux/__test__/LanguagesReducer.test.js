import { getLanguagesFailed, getLanguagesSuccess } from "../actions/LanguagesAction";
import LanguagesReducer, { initialState } from "../reducers/LanguagesReducer"

const language  = {
    "id": "64df35f0c5c5aa54dd5fa656",
    "created_at": "2023-08-18T09:12:16.927Z",
    "updated_at": "2023-08-18T09:12:16.927Z",
    "title": "C",
    "icon_url": "https://dg8krxphbh767.cloudfront.net/tracks/c.svg",
    "slug": "c",
    "num_exercises": 8
};


describe("Languages reducer", () => {

    it('return initial state', () => {
        const actual  = LanguagesReducer(undefined, {});
        const expected = initialState;
        expect(actual).toEqual(expected);
    });

    it('get Languages failed', () => { 
        const actual  = LanguagesReducer(initialState, getLanguagesFailed('an error occurred'));
        const expected = {...initialState, error : "an error occurred"};
        expect(actual).toEqual(expected);
    });

    it('get Languages success', () => { 
        const actual  = LanguagesReducer(initialState, getLanguagesSuccess(language));
        const expected = {...initialState, languages : language};
        expect(actual).toEqual(expected);
    });


})