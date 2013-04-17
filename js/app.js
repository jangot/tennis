$(function () {

    var width = CONST.AREA_WIDTH + 2*CONST.AREA_PADDING;
    var height = CONST.AREA_HEIGHT + 2*CONST.AREA_PADDING;

    var canvas = $('<canvas width="' + width + '" height="' + height + '"></canvas>')[0];

    $('body').append(canvas);

    var animator = new Animation();
    var keyboard = new Keyboard();

    var lines = new Drawable.Lines({canvas:canvas});
    animator.add(lines);
    var ball = new Drawable.Ball({canvas:canvas});
    ball.vector({
        x:10,
        y:5,
        speed:1
    });
    animator.add(ball);
    var racket = new Drawable.Racket({canvas:canvas});
    animator.add(racket);

    keyboard.onPress(CONST.KEY_TOP,  function () {
        racket.moveTop();
    });
    keyboard.onPress(CONST.KEY_BOTTOM,  function () {
        racket.moveBottom();
    });

    animator
        .start()
        .onTik(function () {
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, width, height);
            ball.move()

            if (ball.position().x <= CONST.AREA_PADDING) {
                animator.stop();
            }

            if (racket.isCross(ball)) {
                var bVector = ball.vector();
                ball.vector({
                    x: 0 - bVector.x
                });
            }

        })
    ;



});
