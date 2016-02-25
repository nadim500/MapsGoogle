
module.exports = function(app){

	var router = app.loopback.Router();

	router.get('/',function(req,res){
		res.render('mapgoogle');
	});
	router.get('/1',function(req,res){
		res.render('address');
	});
	router.get('/2',function(req,res){
		res.render('formulario');
	});

	app.use(router);
	
}