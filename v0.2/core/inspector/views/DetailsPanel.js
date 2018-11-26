import React from 'react';

import { KiLabelElementsField } from 'kroppli-ui/fields';
import { KiTextInput, KiNumberInput } from 'kroppli-ui/inputs';
import { KiSelect } from 'kroppli-ui/selects';

import { connect } from '../../../helpers';
import styles from '../styles';

const DetailsPanel = ({ actions = {}, styles = {}, classes, ...store }) => {
    return (
        <div className={classes.root}>
            <KiLabelElementsField
                label={'Label1'}
                elements={[
                    {
                        component: KiTextInput,
                        props: {
                            value: store.name,
                            leftEl: 'X',
                            rightEl: '%',
                            actions: {
                                handleInputChange: ({ value }) => {
                                    console.log('###: ', value);
                                },
                            },
                            classes: {
                                root: classes.input,
                                inkbar: classes.inkbarInTwo,
                            },
                        },
                    },
                    {
                        component: KiTextInput,
                        props: {
                            value: store.name,
                            leftEl: 'X',
                            actions: {
                                handleInputChange: ({ value }) => {
                                    console.log('###: ', value);
                                },
                            },
                            classes: {
                                root: classes.input,
                                inkbar: classes.inkbarInTwo,
                            },
                            styles: {
                                root: { marginLeft: 4 }
                            }
                        },
                    },
                ]}
                classes={{
                    root: classes.field,
                }}
            />
            <KiLabelElementsField
                label={'Label3'}
                elements={[
                    {
                        component: KiNumberInput,
                        props: {
                            value: store.name,
                            leftEl: 'X',
                            rightEl: '%',
                            actions: {
                                handleInputChange: ({ value }) => {
                                    console.log('##333#: ', value);
                                },
                            },
                            classes: {
                                root: classes.input,
                            },
                        },
                    },
                ]}
                classes={{
                    root: classes.field,
                }}
            />

            <KiLabelElementsField
                label={'Label2'}
                elements={[
                    {
                        component: KiSelect,
                        props: {
                            multiple: true,
                            actions: {
                                handleChange: ({ value }) => {
                                    console.log('##333#: ', value);
                                },
                            },
                            classes: {
                                root: classes.dropdown,
                            },
                        },
                    },
                ]}
                classes={{
                    root: classes.field,
                }}
            />
        </div>
    );
};

export default connect('inspector.details', styles.details, DetailsPanel);
