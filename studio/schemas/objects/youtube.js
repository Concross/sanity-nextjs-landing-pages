import React from 'react';
import getYouTubeId from 'get-youtube-id';

const YouTubePreview = ({value}) => {
    const id = getYouTubeId(value.url);
    const url = `https://www.youtube.com/embed/${id}`;

    if (!id) {
        return <div>Missing YouTube Url</div>
    }
    return (
        <iframe title="YouTube Preview" width="560" height="315" src={url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    )
}
export default {
    name: 'youtube',
    type: 'object',
    title: 'YouTube Embed',
    fields: [
        {
            name: 'url',
            type: 'url',
            title: 'Url'
        }
    ],
    preview: {
        select: {
            url: 'url'
        },
        component: YouTubePreview
    }
}