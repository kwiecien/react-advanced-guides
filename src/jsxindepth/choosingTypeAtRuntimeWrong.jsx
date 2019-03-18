import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
    photo: PhotoStory,
    video: VideoStory
};

function Story(props) {
    // Wrong! JSX type can't be an expression.
    return <components[props.storyType] story={props.story} />;
}