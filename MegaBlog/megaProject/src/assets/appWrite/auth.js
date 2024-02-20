import conf from "../../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setEndpoint(conf.appWriteProjectId)
    this.account = new Account(this.client)
    }

    async createAccount({email, passwrod, name}){
        try{
           const userAccount = await this.account.create(ID.unique(), email, passwrod, name)
           if(userAccount){
                return this.login({email, passwrod});
           }else{
            return userAccount;
           }

        }catch(e){
            throw e;
        }
    }

    async login({email, passwrod}){
        return await this.account.createEmailSession(email,passwrod)
    }

    async getCurrentUser() {
        try{
            return await this.account.get();
        }catch(e){
            throw e;
        }
        return null;
    }

    async logOut(){
        try{
            await this.account.deleteSession();
        }catch(e){
            throw e;
        }
    }

}

const AuthService = new AuthService();

export default AuthService