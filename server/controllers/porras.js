'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Porra = mongoose.model('Porra');


exports.create = function(req,res){
    /*console.log("GUARDAMOS PORRA DE " + req.user.name);
    console.log(req.body.campeonato);
    console.log(req.user.id);*/

    var porra = new Porra(false);
    porra.set('year',req.body.campeonato.year);
    porra.set('host',req.body.campeonato.host);
    porra.set('groups',req.body.campeonato.groups);
    porra.set('matches',req.body.campeonato.matches);
    porra.set('user',req.user.name);

    porra.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("porra guardada");
        }
    });

    //article.user = req.user;
    //console.log(req.data);
    //res.jsonp(article);


/*    var article = new Article(req.body);
    article.user = req.user;

    article.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                article: article
            });
        } else {
            res.jsonp(article);
        }
    });*/

};



exports.porra = function(req, res) {
    //console.log("BUSCANDO PORRA DE " + req.user.name);

    Porra.find({ 'user': req.user.name },{ '_id': 0}).exec(function(err, porra) {
        if (err) {
            //console.log("TENEMOS ERROR");
        }
        if (!porra.length){
            //console.log("CERO ENcONTRADAS " + porra);
            Porra.find({'user': 'porrabase'},'year host matches groups',{ '_id': 0}).exec(function(err, porra) {
                if (err) {
                    res.render('error', {status: 500});
                }
                else {
                    console.log("DEVOLVEMOS PORRA BASE");
                    res.jsonp(porra);
                }
            }) 
        }
        else {
            //console.log("TENEMOS ACIERTO " + porra);
            res.jsonp(porra);
        }
    });
};
