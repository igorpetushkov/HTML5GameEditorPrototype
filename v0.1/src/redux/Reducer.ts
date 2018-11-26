import * as _ from 'lodash';
import { handleActions } from 'redux-actions';

import * as Actions  from 'redux/Actions';
import { parseTopics } from 'lib/redux';
import { IUiData, IReduxAction } from 'interfaces';

export default (data: IUiData) => {
    const topics = _.map(_.values(Actions), (action: IReduxAction) => {
        return parseTopics(action, action.topics);
    });

    return handleActions<IUiData, any>(_.assign({}, ...topics) as any, data);
};