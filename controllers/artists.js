let artistModel = require('../models/loginData');


exports.getAllArtists = (req, res, next) => { //good
    let Peoples = artistModel.getall();
    Peoples.then(([rows, fieldData]) => {
        res.render('artistDirectory', { artist: rows, pageTitle: "Artist Directory" });
    });
}


exports.searchArtist = (req, res, next) => { //good
    str = req.query.name;
    let Peoples = artistModel.search(str);
    Peoples.then(([rows, fieldData]) => {
        res.render('artistDirectory', { artist: rows, pageTitle: "Artist Directory" });
    });



}

exports.delArtist = (req, res, next) => { //good
    let id = req.query.id;
    artistModel.delete(id);
    // let Peoples = artistModel.getall();
    // Peoples.then(([rows, fieldData]) => {
    //     res.render('artistDirectory', { artist: rows, pageTitle: "Artist Directory" });

    // });

    setTimeout(function () {
        res.redirect('/allArtists');
    }, 2000);
    //res.redirect(301, '/');

    // res.redirect(req.get('referer')); 

}



exports.postAddPeople = (req, res, next) => {//good
    let p_name = req.body.name;
    let p_about = req.body.about;
    let p_imageURL = req.body.url;

    let Peoples = artistModel.getall();
    Peoples.then(([rows, fieldData]) => {
        if (rows.length == 0) {
            p_id = 0;
            let pOject = {
                name: p_name,
                about: p_about,
                url: p_imageURL,
                id: p_id
            }
            artistModel.add(pOject);
            res.redirect(301, "/allArtists");
        } else {
            p_id = rows[rows.length - 1].id + Math.floor(Math.random() * Math.floor(100000));
            // console.log(p_id);
            let pOject = {
                name: p_name,
                about: p_about,
                url: p_imageURL,
                id: p_id
            }
            artistModel.add(pOject);
            setTimeout(function () {
                res.redirect('/allArtists');
            }, 2000);
            // res.redirect(301, "/");
        }


    });

}

//login page controllers------------------------------
exports.loginPage = (req, res, next) => {//good
    res.render('login', { pageTitle: 'Login Page' });
}


exports.postLogin = (req, res, next) => {//good
    let p_userName = req.body.userName;
    let p_password = req.body.password;

    if (p_userName == "A00885386" && p_password == "password") {
        res.redirect(301, "/allArtists");
    } else {
        res.redirect(301, "/");
    }

}