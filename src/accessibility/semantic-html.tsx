import React, {Fragment} from 'react';

function ListItem({item}) {
    return (
        <Fragment>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
        </Fragment>
    );
}

function Glossary(props) {
    return (
        <dl>
            {props.items.map(item => (
                <ListItem item={item} key={item.id}/>
            ))}
        </dl>
    );
}

function GlossaryOfListItems(props) {
    return (
        <dl>
            {props.items.map(item => (
                // Fragments should also have a `key` prop when mapping collections
                <Fragment key={item.id}>
                    <dt>{item.term}</dt>
                    <dd>{item.description}</dd>
                </Fragment>
            ))}
        </dl>
    );
}

function ListItemShortSyntax({item}) {
    return (
        <>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
        </>
    );
}