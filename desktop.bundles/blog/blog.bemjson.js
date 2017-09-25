module.exports = {
    block: 'page',
    lang: 'en',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1.0' } },
        { elem: 'css', url: 'http://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.min.css' }
    ],
    scripts: [
        { elem: 'js', url: 'https://code.jquery.com/jquery-2.1.4.min.js' },
        { elem: 'js', url: 'http://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.js' }
    ],
    content: [
        {
            block: 'top-bar',
            content: [
                {
                    elem: 'left',
                    content: {
                        block: 'menu',
                        content: { elem: 'text', content: 'Yeti Agency' }
                    }
                },
                {
                    elem: 'right',
                    content: {
                        block: 'menu',
                        content: ['One', 'Two', 'Three', 'Four'].map(function (page) {
                            return { elem: 'link', attrs: { href: '#' }, content: page };
                        })
                    }
                }
            ]
        },
        {
            block: 'callout',
            mix: ['large', 'primary'],
            content: {
                block: 'row',
                mix: ['column', 'text-center'],
                content: {
                    tag: 'h1',
                    content: 'Our Blog'
                }
            }
        },
        {
            block: 'row',
            attrs: { id: 'content' },
            content: [
                {
                    block: 'medium-8',
                    mix: ['columns'],
                    content: ['', '', ''].map(function () {
                        return {
                            block: 'blog-post',
                            content: [
                                {
                                    tag: 'h3',
                                    content: 'Awesome blog post title <small>3/6/2015</small>'
                                },
                                {
                                    block: 'thumbnail',
                                    attrs: { src: 'http://placehold.it/850x350' },
                                    content: 'Awesome blog post title <small>3/6/2015</small>'
                                },
                                {
                                    tag: 'p',
                                    content: 'Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.'
                                },
                                {
                                    block: 'callout',
                                    content: {
                                        block: 'menu',
                                        mix: ['simple'],
                                        content: [
                                            { elem: 'link', attrs: { href: '#' }, content: 'Author: Mike Mikers' },
                                            { elem: 'link', attrs: { href: '#' }, content: 'Comments: 3' }
                                        ]
                                    }
                                },
                            ]
                        }
                    })
                },
                {
                    block: 'medium-3',
                    mix: ['columns'],
                    attrs: { 'data-sticky-container': '' },
                    content: [
                        ['Categories', 'Authors'].map(function (cat) {
                            return [
                                {
                                    tag: 'h4',
                                    content: cat
                                },
                                {
                                    tag: 'ul',
                                    content: ['Skyler', 'Jesse', 'Mike', 'Holly'].map(function (item) {
                                        return { tag: 'li', content: { tag: 'a', attrs: { href: '#' }, content: item } }
                                    })
                                }
                            ]
                        })
                    ]
                }
            ]
        },
        {
            block: 'row',
            mix: ['column'],
            content: {
                block: 'pagination',
                total: 39,
                perPage: 3
            }
        }
    ]
};
