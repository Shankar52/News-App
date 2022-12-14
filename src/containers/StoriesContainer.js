import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/newsApi';
import { Story } from '../components/Story';
import {
    GlobalStyle,
    StoriesContainerWrapper,
} from '../styles/StoriesContainerStyles';

const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
    }, []);

    return (
        <>
            <GlobalStyle />
            <StoriesContainerWrapper data-test-id="stories-container">
                <h1>Latest News</h1>
                {storyIds.map(storyId => (
                    <Story key={storyId} storyId={storyId} />
                ))}
            </StoriesContainerWrapper>
        </>
    );
};

export default StoriesContainer