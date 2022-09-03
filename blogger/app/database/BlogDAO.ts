import { BlogModel } from "../models/BlogModel";
import { UserModel } from "../models/UserModel";
import * as mysql from "mysql";
import * as util from "util";

export class BlogDAO
{
    private host: string = "localhost";
    private port: number = 3306;
    private username: string = "root"
    private password: string = "root"
    private schema: string = "cst391"
    private pool = this.initDbConnection();

    constructor(host:string, port:number, username: string, password: string, schema: string)
    {
        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;
        this.schema = schema;
        this.pool = this.initDbConnection();
    }

    //Crud Method to find & return all Existing Blog Models

    public findAllBlogs(callback: any)
    {
        let blogs:BlogModel[] = [];

        this.pool.getConnection(function (err: any, connection: any)
        {
            if (err) throw err

            //Run Query
            connection.query('SELECT * FROM blogs', function (err:any, rows:any, fields:any)
            {
                connection.release();

                if (err) throw err;

                for (let x=0; x < rows.length; ++x)
                {
                    blogs.push(new BlogModel(rows[x].ID, rows[x].AUTHOR_NAME, rows[x].TITLE,
                        rows[x].INTRODUCTION, rows[x].BODY, rows[x].CONCLUSION));
                }

                console.log(blogs);

                callback(blogs);
            });
        });
    }

    //Crud Method to Create a Blog

    public create(blog: BlogModel, callback: any)
    {
        this.pool.getConnection(async function (err: any, connection: any)
        {
            connection.release();

            if (err) throw err;

            //Run Query
            connection.query = util.promisify(connection.query);

            let result1 = await connection.query('INSERT INTO blogs (AUTHOR_NAME, TITLE, INTRODUCTION, BODY, CONCLUSION) VALUES (?,?,?,?,?)',
                [blog.authorName, blog.title, blog.introduction, blog.body, blog.conclusion]);
            if(result1.affectedRows !=1)
            {
                callback(-1);
            }

            let blogId = result1.insertId;

            callback(blogId);
        });
    }

    //Crud Method to Get a Blog when Given a Specific ID
    public findBlog(blogId: number, callback: any)
    {
        this.pool.getConnection(async function(err: any, connection: any)
        {
            connection.release();

            if (err) throw err;

            connection.query = util.promisify(connection.query);

            let result1 = await connection.query('SELECT * FROM blogs WHERE ID=?', [blogId]);

            if(result1.length !=1)
            {
                callback(null);
            }

            let blog = new BlogModel(result1[0].ID, result1[0].AUTHOR_NAME, result1[0].TITLE, result1[0].INTRODUCTION,
              result1[0].BODY, result1[0].CONCLUSION);

            callback(blog);
        });
    }

    //CRUD Method to Update a Blog when Given a Specific ID
    public update(blog: BlogModel, callback: any)
    {
        this.pool.getConnection(async function(err: any, connection: any)
        {
            connection.release();

            if (err) throw err;

            let changes = 0;
            connection.query = util.promisify(connection.query);

            let result1 = await connection.query('UPDATE blogs SET AUTHOR_NAME=?, TITLE=?, INTRODUCTION=?, BODY=?, CONCLUSION=? WHERE ID=?',
                [blog.authorName, blog.title, blog.introduction, blog.body, blog.conclusion, blog.id]);
            if (result1.changedRows !=0)
            {
                ++changes;
            }
            callback(changes);
        });
    }

    //CRUD Method to Delete a Blog when Given a Specific ID
    public delete(blogId: number, callback: any)
    {
        this.pool.getConnection(async function(err: any, connection: any)
        {
            connection.release();

            if (err) throw err;

            let changes = 0;

            connection.query = util.promisify(connection.query);

            let result1 = await connection.query('DELETE FROM blogs WHERE ID=?', [blogId]);

            changes = changes + result1.affectedRows;

            callback(changes);
        });
    }


    private initDbConnection():any
    {
        return mysql.createPool({host: this.host,
        port: this.port, user: this.username, password: this.password,
        database: this.schema, connectionLimit: 10});
    }

}