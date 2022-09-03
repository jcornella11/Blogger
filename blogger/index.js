const { BlogModel } = require('./lib/app/models/BlogModel')
const { UserModel } = require('./lib/app/models/UserModel')
const { BlogDAO } = require('./lib/app/database/BlogDAO')
const bodyParser = require('body-parser')

//Create Express Application
const express = require('express')
const app = express()
const port = 3000

//Database Configuration
const dbHost = "localhost"
const dbPort = 3306;
const dbUsername = "root"
const dbPassword = "root"
const schema = "cst391"

// Set location of static resources and use the JSON body parser
app.use(bodyParser.json());

// CORS Middleware

app.use(function (req, res, next) {

    // Enabling CORS

    res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    next();

});


// GET Route at Root '/' that returns a Test Text message
app.get('/', function (_req, res)
{
    // Return Test Text
    console.log('In GET / Route');
    res.send('This is the default root Route.');
})

//Get Route that returns all blogs from the Database
app.get('/getAllBlogs', function (_req, res)
{
    console.log('In Get /blogs Route');

    let dao = new BlogDAO(dbHost, dbPort, dbUsername, dbPassword, schema);

    dao.findAllBlogs(function (blogs)
    {
        res.json(blogs);
    });
})

//Post Route to add a blog to the Database
app.post('/newBlog', function (req, res)
{
    console.log('In POST /albums Route with Post of ' + JSON.stringify(req.body));

    if(!req.body.authorName)
    {
        // Check for valid POST Body, note this should validate EVERY field of the POST
        res.status(400).json({error: "Invalid Blog Posted"});
    }
    else
    {
        let blog = new BlogModel(-1, req.body.authorName,
                req.body.title, req.body.introduction, req.body.body,
                req.body.conclusion);

        let dao = new BlogDAO(dbHost, dbPort, dbUsername, dbPassword, schema);
        dao.create(blog, function (blogId)
        {
            if (blogId == -1)
            {
                res.status(200).json({"error": "Creating Blog Failed"})
            }
            else
            {
                res.status(200).json({"success": "Creating Blog Passed with Blog ID of " + blogId});
            }
        });
    }
})

//Get Route that returns a Blog given a Blog ID
app.get('/getBlog/:id', function (req, res)
{
    console.log('In the Get /blogs Route with an ID of ' + req.params.id);

    let blogId = Number(req.params.id);
    let dao = new BlogDAO(dbHost, dbPort, dbUsername, dbPassword, schema);
    dao.findBlog(blogId, function (blog)
    {
        if(blog ==  null)
        {
            res.status(200).json({"error": "Invalid Blog ID"})
        }
        else
        {
            res.status(200).json(blog)
        }
    });
})

//PUT Route to Update a Blog in the Database
app.put('/updateBlog', function (req, res)
{
    console.log('In PUT /updateBlog Route with Post of ' + JSON.stringify(req.body));

    if (!req.body.authorName)
    {
        res.status(400).json({error: "Invalid Blog Posted"})
    }
    else
    {
        let blog = new BlogModel(req.body.id, req.body.authorName, req.body.title, req.body.body,
            req.body.conclusion);
        let dao = new BlogDAO(dbHost, dbPort, dbUsername, dbPassword, schema);
        dao.update(blog, function (changes)
        {
            if (changes == 0)
            {
                res.status(200).json({"error" : "Updating Blog passed but nothing was changed"})
            }
            else
            {
                res.status(200).json({"success" : "Updating Blog passed and data was changed"});
            }
        });
    }
})

//DELETE Route to delete an Album given an Album ID from the Database
app.delete('/deleteBlog/:id', function (req, res)
{
    console.log('In /deleteBlog Route with an ID of' + req.params.id);

    let blogId = Number(req.params.id);

    let dao = new BlogDAO(dbHost, dbPort, dbUsername, dbPassword, schema);

    dao.delete(blogId, function (changes)
    {
        if (changes == 0)
        {
            res.status(200).json({"error" : "Delete Blog failed"})
        }
        else
        {
            res.status(200).json({"success" : "Delete Blog  passed"})
        }
    });
})


// Start the Server

app.listen(port, () =>

{
    console.log(`Example app listening on port ${port}!`);

});

