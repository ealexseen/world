(function(w, d){

    function addObject(options){
        for (var prop in options){
            if (options.hasOwnProperty(prop)){
                this[prop] = options[prop];
            }
        }
    }

    var random = function(min, max){
        return Math.round(Math.random() * (max - min)) + min;
    };

    var percent = function(value, percent){
        return (value * percent) / 100;
    };

    var world = d.getElementById('world');
    var context, canvas, clazz = [];
    var options = {
        size: {
            w: 10,
            h: 10,
            wCount: 100,
            hCount: 40
        }
    };

    if (world && world.getContext){
        context = world.getContext('2d');
        canvas = world || context.canvas;

        (function(size){
            var w = size.w,
                h = size.h,
                wCount = size.wCount,
                hCount = size.hCount;

            var block, meter = percent(hCount, random(60, 70)), positionX, positionY;

            for (var x = 0; x < wCount; x+=1){
                for (var y = 0; y < hCount; y+=1){
                    positionX = x * size.w;
                    positionY = y * size.h;

                    block = new addObject({
                        x: positionX,
                        y: positionY,
                        w: w,
                        h: h
                    });

                    clazz.push(block);
                }
            }

            console.log(clazz);
        })(options.size);

    }

})(window, document);