(function(w, d){

    var world = d.getElementById('world');
    var context, canvas;

    if (world && world.getContext){
        context = world.getContext('2d');
        canvas = world || context.canvas;
    }

})(window, document);