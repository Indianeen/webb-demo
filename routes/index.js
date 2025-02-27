const { response } = require('express');
const express = require('express');
const pool = require('../utils/database');
const router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {

    try {
        const [rows] = await pool
        .promise()
        .query(`SELECT * from demo`);
    
        console.log(rows);

        res.render('index.njk', {
            title: 'Kursdemo',
            intro: 'En demosida för att ge ett litet smakprov på tekniken och vad den kan göra.',
            rows: rows
        });
    } catch (error) {
        console.log(error);
        next();
    }
});

router.get('/test', function(request, response, next){
    response.render('test.njk', {
        title: 'Tesst',
        segment: '' //,
        //rows: rows
    });

})

router.get('/nav', function(req, res, next){
    res.render('_nav.njk', {
        title:'',
        intro:''
    })
})

router.get('/footer', function(req, res, next){
    res.render('_footer.njk', {
        title:'',
        intro:''
    })
})

module.exports = router;