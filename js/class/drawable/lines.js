Drawable.Abstract('Drawable.Lines', {

    draw : function () {
        var canvas = this.canvas();
        var context = this._getContext();


        context.moveTo(0, 5);
        context.lineTo(canvas.width, 5);

        context.moveTo(0, canvas.height - CONST.AREA_PADDING - 5);
        context.lineTo(canvas.width, canvas.height - CONST.AREA_PADDING - 5);

        context.moveTo(canvas.height - CONST.AREA_PADDING - 12, 0);
        context.lineTo(canvas.height - CONST.AREA_PADDING - 12, canvas.height);

//        for (var y = 0.5; y < canvas.height; y += 20) {
//            context.moveTo(0, y);
//            context.lineTo(canvas.width, y);
//        }

        context.strokeStyle = "fffd68";
        context.stroke();
        return this;
    }

});
