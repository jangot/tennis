$(function () {

    var width = CONST.AREA_WIDTH + 2*CONST.AREA_PADDING;
    var height = CONST.AREA_HEIGHT + 2*CONST.AREA_PADDING;

    var canvas = $('<canvas width="' + width + '" height="' + height + '"></canvas>')[0];

    $('body').append(canvas);

    var animator = new Animation();

    var lines = new Drawable.Lines({canvas:canvas});
    animator.add(lines);

    var ball = new Drawable.Ball({canvas:canvas});
    ball.vector({
        x:10,
        y:20,
        speed:1
    });
    animator.add(ball);

    animator
        .start()
        .onTik(function () {
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, width, height);
            ball.move()
        })
    ;



});
