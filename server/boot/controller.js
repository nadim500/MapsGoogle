module.exports = function(app) {

    var Stop = app.models.Stop;
    var router = app.loopback.Router();

    router.get('/',function(req,res){
        res.redirect('/destino');
    });

    router.get('/rapido',function(req,res){
        Stop.find({},function(err,objResult_Stop){
            if(err) return res.sendStatus(404);
            var string = JSON.stringify(objResult_Stop);
            return res.render('marcarRapido',{
                string : string
            });
        });
    });

    router.get('/destino', function(req, res) {
        Stop.find({}, function(err, objResult_Stop) {
            if (err) return res.sendStatus(404);
            console.log("objResult_Stop: ", objResult_Stop);
            var string = JSON.stringify(objResult_Stop);
            return res.render('destinoPrincipal', {
                objResult_Stop: objResult_Stop,
                string: string
            });
        });
    });
    
    router.get('/destino/subir',function(req,res){
        Stop.find({},function(err,objResult_Stop){
            if(err) return res.sendStatus(404);
            var string = JSON.stringify(objResult_Stop);
            return res.render('destinoSubir',{
                string : string
            });
        });
    });

    router.get('/destino/nuevo',function(req,res){
        Stop.find({},function(err,objResult_Stop){
            if(err) return res.sendStatus(404);
            var string = JSON.stringify(objResult_Stop);
            return res.render('destinoNuevo',{
                string : string
            });
        });
    });

    router.get('/vehiculo',function(req,res){
        return res.render('vehiculoPrincipal');
    });

    router.get('/vehiculo/nuevo',function(req,res){
        return res.render('vehiculoNuevo');
    });
    router.post('/principalPost', function(req, res) {
        var place = req.body.autocompletado;
        var nombre = req.body.nombre;
        place = JSON.parse(place);
        console.log(typeof(place));
        console.log("place: ", place);

        Stop.findOne({
            where: {
                place_id: place.place_id
            }
        }, function(err, objResult) {
            console.log("objResult en findOne: ", objResult);
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
                        return res.render('destinoPrincipal', {
                            objResult_Stop: objResult_Stop,
                            string: string
                        });
                    });
                });
            } else {
                return res.render('destino');
            }
        });
    });

    router.post('/rapidoPost',function(req,res){
        var place = req.body.autocompletado;
        var nombre = req.body.nombre;
        var tipo = req.body.tipo;
        place = JSON.parse(place);
        console.log("tipo: ",tipo);
        console.log(typeof(place));
        console.log("place: ", place);

        Stop.findOne({
            where: {
                place_id: place.place_id
            }
        }, function(err, objResult) {
            console.log("objResult en findOne: ", objResult);
            if (err) return res.sendStatus(404);
            else if (objResult == null) {
                var newStop = {
                    direccion: place.name,
                    coordenada: place.geometry.location,
                    nombre: nombre,
                    place_id: place.place_id,
                    tipo : tipo
                };
                Stop.create(newStop, function(err, objStop) {
                    if (err) return res.sendStatus(404);
                    Stop.find({}, function(err, objResult_Stop) {
                        if (err) return res.sendStatus(404);
                        console.log("objResult_Stop: ", objResult_Stop);
                        var string = JSON.stringify(objResult_Stop);
                        return res.render('marcarRapido', {
                            objResult_Stop: objResult_Stop,
                            string: string
                        });
                    });
                });
            } else {
                return res.render('destino');
            }
        });
    })

    app.use(router);
};