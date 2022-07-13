import {
  MENTIONLYTICS_API_START,
  MENTIONLYTICS_API_SUCCESS,
  MENTIONLYTICS_API_FAILURE,
  GET_MENTIONLYTICS_API
} from '../actions';
import { getMentionlyticsApi } from '../api';

interface socialMedia {
  mentions: string;
  reach: string;
  engagment: string;
}

const mentionlyticsApiStart = () => ({
  type: MENTIONLYTICS_API_START
});

const mentionlyticsApiSuccess = ({
  mentions,
  reach,
  engagment
}: socialMedia) => ({
  type: MENTIONLYTICS_API_SUCCESS,
  mentions,
  reach,
  engagment
});

const mentionlyticsApiFailure = () => ({
  type: MENTIONLYTICS_API_FAILURE
});

export const mentionlyticsApi =
  (commtracks: string) => async (dispatch: any) => {
    dispatch(mentionlyticsApiStart());

    try {
      const res = await getMentionlyticsApi(commtracks);

      if (res) {
        // @ts-ignore
        const mentions = res.mentions; // @ts-ignore
        const reach = res.unique_reach; // @ts-ignore
        const engagment = res.engagment;

        const data = {
          mentions,
          reach,
          engagment
        };

        dispatch(mentionlyticsApiSuccess(data));
      } else {
        dispatch(mentionlyticsApiFailure());
      }
    } catch (e) {
      dispatch(mentionlyticsApiFailure());
    }
  };
