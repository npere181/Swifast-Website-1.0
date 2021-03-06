var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');


//for cloud connection(mlab) with credentials
var db = mongojs('mongodb://admin:admin123@ds139959.mlab.com:39959/driverlesscar', ['blogs'])

router.get('/blog/newblog', function(req, res) {
    res.render('index.html');
});


//save blog
router.post('/blog/newblog', function (req, res) {
    console.log(req.body);
    var newblog = req.body;

    //display data of blog added
    console.log("title: " + newblog.title);
    console.log("content: " + newblog.content);
    console.log("imageURL: " + newblog.imageURL);
    

    if (!newblog.title || !(newblog.content + '')) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.blogs.save(newblog, function(err, newblog) {
            if (err) {
                res.send(err);
            }
            res.json(newblog);
        });
    }
});
module.exports = router;