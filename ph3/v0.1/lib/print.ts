import * as _ from 'lodash';

import { InfoService } from '../info/InfoService';

/* tslint:disable */
export class PrintService {
    public static print(...data: InfoService.Model[]): void {
        _.each(data, model => PrintService._print(model));
    }

    private static _print(model: InfoService.Model, indent = ''): void {
        const linkFlag = !_.isEmpty(indent) ? _.fill(_.range(indent.length / 2), '>').join('') : '';
        
        console.log(`${indent}%c${linkFlag} ${model.typeclass} :: ${model.key}`, 'color: brown; font-weight: bold');

        _.forIn(model, (value, key) => {
            if (key !== 'typeclass' && key !== 'key') {
                if (key === 'dirty') {
                    const color = value === true ? 'color: #455B85; font-weight: bold;' : 'color: green';
                    console.log(` ${indent}%c[${key}]:`, color, `${value}`);
                } else if (key === 'links') {
                    _.each(value, val => PrintService._print(val, indent + '  '));
                } else {
                    if (_.isObject(value)) {
                        let _values = [];

                        _.forIn(value, (value, key) => {
                            _values.push(`${key}:${value}`);
                        });

                        console.log(` ${indent}%c[${key}]:`, 'color: green', `[${_values.join(',')}]`);
                    } else {
                        console.log(` ${indent}%c[${key}]:`, 'color: green', `${value}`);
                    }
                }
            }
        });

        if (_.isEmpty(indent)) {
            console.log(`%c. . . ${model.key} . . ^`, 'color: #80899C; font-weight: bold;');
        }
    }
}

/* tslint:enable */