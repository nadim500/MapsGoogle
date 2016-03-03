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
    
    router.get('/recojo',function(req,res){
        res.render('recojo');
    });

    router.get('/recojo/crear',function(req,res){
        res.render('recojoCrear');
    });

    router.get('/recojo/listar',function(req,res){
        res.render('recojoListar');
    });

    router.get('/destino',function(req,res){
        res.render('destino');
    });

    router.get('/destino/crear',function(req,res){
        res.render('destinoCrear');
    });

    router.get('/destino/listar',function(req,res){
        res.render('destinoListar');
    });
    
    router.get('/resumen/motorizado',function(req,res){
        res.render('resumenMotorizado');
    });
    
    router.get('/resumen/recojo',function(req,res){
        res.render('resumenRecojo');
    });
    
    app.use(router);
};