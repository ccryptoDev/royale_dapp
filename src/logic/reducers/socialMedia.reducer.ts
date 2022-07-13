import {
  MENTIONLYTICS_API_START,
  MENTIONLYTICS_API_SUCCESS,
  MENTIONLYTICS_API_FAILURE
} from '../actions';

const initialState = {
  successMsgType: false,
  mentions: null,
  reach: null,
  engagment: null
};

const socialMediaReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case MENTIONLYTICS_API_START:
      return {
        ...state,
        successMsgType: false,
        mentions: null,
        reach: null,
        engagment: null
      };

    case MENTIONLYTICS_API_SUCCESS:
      return {
        ...state,
        successMsgType: true,
        mentions: action.mentions,
        reach: action.reach,
        engagment: action.engagment
      };

    case MENTIONLYTICS_API_FAILURE:
      return {
        ...state,
        successMsgType: false,
        mentions: null,
        reach: null,
        engagment: null
      };

    default:
      return state;
  }
};

export default socialMediaReducer;
