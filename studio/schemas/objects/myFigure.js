export default {
    name: 'myFigure',
    type: 'object',
    title: 'My Figure',
    fields: [
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'alt',
            type: 'string',
            title: 'Alt Text'
        },
        {
            name: 'caption',
            type: 'string',
            title: 'Caption'
        }
    ]
}