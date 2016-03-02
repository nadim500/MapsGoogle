module.exports = function(app) {

    var router = app.loopback.Router();

    router.get('/principal',function(req,res){
        res.render('principal');
    });

    router.get('/motorizado',function(req,res){
        res.render('motorizado');
    });

    router.get('/motorizado/crear',function(req,res){
        res.render('motorizadoCrear');
    });

    router.get('/motorizado/listar',function(req,res){
        res.render('motorizadoListar');
    });

    app.use(router);
};