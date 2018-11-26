import * as _ from 'lodash';
import { wrapAction as wrap, formatTopics } from 'lib/redux';
import { IUiData } from 'interfaces';

const TOPICS: any = formatTopics('UI/TIMELINE', {
    CHANGE_PLAY_TIME: 'CHANGE_PLAY_TIME',
});

export class TimelineActions {
    static topics = TOPICS;

    @wrap(TOPICS.CHANGE_PLAY_TIME)
    static changePlayTime(playTime: number) {
        return (state: IUiData, payload: any) => {
            return _.set(state, 'timeline.playTime', payload.playTime);
        };
    }
}