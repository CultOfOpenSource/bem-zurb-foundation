block('menu').elem('link')(
    wrap()(function() {
        return {
            tag: 'li',
            content: this.ctx
        };
    }),
    tag()('a')
);
