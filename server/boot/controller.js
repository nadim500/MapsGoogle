
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
		var place = req.body.autocompletado;
		console.log(typeof(place));
		console.log("place: ",place);
		return res.render('mostrarData',{
			place : place
		});
	});

	router.get('/mostrarData',function(req,res){
		return res.render('mostrarData');
	});

	app.use(router);	
}