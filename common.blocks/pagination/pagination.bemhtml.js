block('pagination')(
    tag()('ul'),
    attrs()({
        role: 'navigation',
        'aria-label': 'Pagination',
    }),
    content()(function () {
        var link = function (item) {
            return {
                tag: 'li',
                content: {
                    tag: 'a',
                    attrs: { href: '#', 'aria-label': 'Page ' + item, },
                    content: item
                },
            }
        };
        return [
            {
                tag: 'li',
                cls: 'disabled',
                content: 'Previous',
            },
            {
                tag: 'li',
                cls: 'current',
                content: [
                    {
                        tag: 'span',
                        cls: 'show-for-sr',
                        content: 'You\'re on page',
                    },
                    ' 1'
                ],
            },
            ['2', '3', '4'].map(link),
            { tag: 'li', cls: 'ellipsis' },
            ['12', '13'].map(link),
            {
                tag: 'li',
                content: {
                    tag: 'a',
                    attrs: { href: '#', 'aria-label': 'Next page', },
                    content: 'Next'
                },
            }
        ]
    })
);
