var express     =       require("express"),
    app         =       express(),
    bodyParser  =       require("body-parser"),
    Campground  =       require("./models/campground"),
    seedDb      =       require("./seeds"),
    Comment     =       require("./models/comment"),
    passport    =       require("passport"),
    User        =       require("./models/user"),
    flash       =       require("connect-flash"),
    mongoose    =       require('mongoose'),
    LocalStrategy =     require("passport-local"),
    methodOverride =     require("method-override");

//requiring Routes
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    authRoutes       = require("./routes/index");

mongoose.connect('mongodb+srv://Guy:Gunner@cluster0.gf5yn.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());


// seedDb();

//PASSPORT CONFIG
app.use(require("express-session")({
    secret: "Guy Spriggs",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
})

app.use("/", authRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);


app.listen(3000, process.env.IP , function(){
    console.log("CampSites server has started!");
});

