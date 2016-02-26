
module.exports = function(app){

	var router = app.loopback.Router();

	router.get('/',function(req,res){
		return res.render('mapgoogle');
	});

	router.get('/1',function(req,res){
		return res.render('address');
	});

	router.get('/2',function(req,res){
		return res.render('formulario');
	});

	router.get('/3',function(req,res){
		return res.render('formulario')
	});

	router.post('/dataGoogle',function(req,res){
		var data = req.body.autocompletado;
		data = JSON.parse(data);
		console.log(typeof(data));
		console.log('recibido en controller : ', data);
		var location = data.geometry.location;
		var pruebaString = JSON.stringify(location)
		console.log("location : ",location);
		console.log("pruebaString : ",pruebaString);
		return res.render('mostrarData',{
			location : pruebaString
		});
	});

	router.get('/mostrarData',function(req,res){
		return res.render('mostrarData');
	});

	app.use(router);	
}