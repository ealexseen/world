(function(w, d){

    var world = d.getElementById('world');
    var context, canvas;
    var options = {
        w: 10,
        h: 10,
        wCount: 1000,
        hCount: 500
    };

    if (world && world.getContext){
        context = world.getContext('2d');
        canvas = world || context.canvas;
    }

})(window, document);