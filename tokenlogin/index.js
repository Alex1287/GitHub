var express=require("express");
var bodyParser=require('body-parser');
var jwt= require("jsonwebtoken");
var app = express();
var router=express.Router();
var authenticateController=require('./controllers/authenticate-controller');
process.env.SECRET_KEY="thisismysecretkey";
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.post('/api/authenticate',authenticateController.authenticate);
app.use('/secure-api',router);
// validation middleware
router.use(function(req,res,next){
    var token=req.body.token || req.headers['token'];
    if(token){
        jwt.verify(token,process.env.SECRET_KEY,function(err,ress){
            if(err){
                res.status(500).send('Token Invalid');
            }else{
                next();
            }
        })
    }else{
        res.send('Please send a token')
    }
})
router.get('/home',function(req,res){
    res.send('Token Verified')
})
app.listen(8012);
