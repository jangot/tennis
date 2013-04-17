Drawable.Abstract('Drawable.Racket', {

    _speed : null,

    init : function (options) {
        this._super(options);

        this
            .size({
                width: 3,
                height: 30
            })
            .position({
                x: 50,
                y: 70
            })
        ;
        this._speed = 10;
    },

    draw : function () {
        var pos = this.position();
        var size = this.size();

        var context = this._getContext();

        context.fillRect(pos.x, pos.y, size.width, size.height);
    },

    moveTop : function () {
        var y = this.position().y;

        y -= this._speed;
        if (y < 1) {
            y = 1;
        }
        this.position({y:y});
        return this;
    },

    moveBottom : function () {
        var y = this.position().y;
        var canvas = this.canvas();
        var size = this.size();

        y += this._speed;

        var maxPosition = canvas.height - size.height;
        if (y > maxPosition) {
            y = maxPosition;
        }
        this.position({y:y});
        return this;
    }

})
