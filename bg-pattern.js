registerPaint('bg-pattern', class {
    static get inputProperties() { return ['--mainColor']; }
    static get contextOptions() { return { alpha: true }; }


    paint(ctx, size, props) {
            //ctx.fillStyle = 'hsla(175, 75%, 21%, 100%)'
            ctx.fillStyle = props.get('--mainColor');
            console.log(props.get('--mainColor'));
            ctx.fillRect(0, 0, size.width, size.height);     /* order: x, y, w, h */
    }
})
