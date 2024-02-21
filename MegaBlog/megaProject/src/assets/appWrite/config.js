import conf from "../../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setEndpoint(conf.appWriteProjectId)
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client)
    };

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        }catch(e){
            console.log(e," white creating post :");
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        }catch(e){
            console.log(e, " while updating post");
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.app.appWriteCollectionId,
                slug,
            )
            return true
        }catch(e){
            console.log(e, "while Deleting post")
            return false
        }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
        }catch(e){
            console.log(e, "in getPost")
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try{

            return await this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                queries,
            )

        }catch(e){
            console.log(e, " while get posts :");
            return false;
        }
    }

    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file,
            )
        }catch(e){
            console.log(e, " while upload File :");
            return false
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileId,
            )
            return ture
        }catch(e){
            console.log(e, "while deleteFile");
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId,
        )
    }


}

const service = new Service();
export default service;