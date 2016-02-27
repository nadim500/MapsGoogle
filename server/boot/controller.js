module.exports = function(app) {

    var Stop = app.models.Stop;
    var router = app.loopback.Router();

    router.get('/', function(req, res) {
        return res.render('mapgoogle');
    });

    router.get('/1', function(req, res) {
        return res.render('address');
    });

    router.get('/2', function(req, res) {
        return res.render('formulario');
    });

    router.get('/3', function(req, res) {
        return res.render('formulario')
    });

    router.post('/dataGoogle', function(req, res) {
        var place = req.body.autocompletado;
        var nombre = req.body.nombre
        place = JSON.parse(place);
        console.log(typeof(place));
        console.log("place: ", place);

        Stop.findOne({
            where: {
                place_id: place.place_id
            }
        }, function(err, objResult) {
        	console.log("objResult en findOne: ",objResult);
            if (err) return res.sendStatus(404);
            else if (objResult == null) {
                var newStop = {
                    direccion: place.name,
                    coordenada: place.geometry.location,
                    nombre: nombre,
                    place_id: place.place_id
                };
                Stop.create(newStop, function(err, objStop) {
                    if (err) return res.sendStatus(404);
                    Stop.find({}, function(err, objResult_Stop) {
                        if (err) return res.sendStatus(404);
                        console.log("objResult_Stop: ", objResult_Stop);
                        var string = JSON.stringify(objResult_Stop);
                        return res.render('mostrarData', {
                            objResult_Stop: objResult_Stop,
                            string: string
                        });
                    });
                });
            } else {
            	return res.render('formulario');
            }
        });
    });

    router.get('/mostrarData', function(req, res) {
        Stop.find({},function(err,objResult_Stop){
            if(err) return res.sendStatus(404);
            var string = JSON.stringify(objResult_Stop);
            return res.render('mostrarData',{
                objResult_Stop : objResult_Stop,
                string : string
            });
        });
    });

    app.use(router);
}