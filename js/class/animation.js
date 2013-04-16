$.Class('Animation', {

    _items : null,
    _interval : null,
    _delay : null,

    init : function () {
        this._items = [];
        this._delay = 100;
    },

    add : function (item) {
        contract(arguments).params('object').end();
        if ($.type(item.draw) !== 'function') {
            return;
        }
        this.remove(item);
        this._items.push(item);
        return this;
    },

    remove : function (item) {
        contract(arguments).params('object').end();
        for (var i in this._items) {
            if (item == this._items[i]) {
                this._items.splice(i, 1);
            }
        }
        return this;
    },

    start : function () {
        if (this._interval) {
            this.stop();
        }
        this._interval = setInterval(function () {
            for (var i in this._items) {
                this._items[i].draw();
            }
        }.bind(this), this._delay);
        return this;
    },

    stop : function () {
        clearInterval(this._interval);
        return this;
    }

})
