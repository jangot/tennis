Drawable.Abstract('Drawable.Ball', {

    init : function (options) {
        this._super(options);

        this
            .size({
                width: 3,
                height: 3
            })
            .position({
                x: 50,
                y: 70
            })
        ;
    },

    move : function () {
        var pos = this.position();
        var canvas = this.canvas();
        var vector = this.vector();

        if (pos.x >= canvas.width - (2*CONST.AREA_PADDING)) {
            this.vector({
                x : (0 - vector.x)
            });
        }
        if (pos.x <= CONST.AREA_PADDING) {
            this.vector({
                x : (0 - vector.x)
            });
        }
        if (pos.y >= canvas.height - (2*CONST.AREA_PADDING)) {
            this.vector({
                y : (0 - vector.y)
            });
        }
        if (pos.y <= CONST.AREA_PADDING) {
            this.vector({
                y : (0 - vector.y)
            });
        }
        this._super();
    },

    draw : function () {
        var pos = this.position();
        var size = this.size();

        var context = this._getContext();

        context.fillRect(pos.x, pos.y, size.width, size.height);
    }

});
