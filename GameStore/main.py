from fastapi import FastAPI , Request
import mysql.connector
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware import Middleware


import mysql.connector
import json


middleware = [ Middleware(CORSMiddleware, allow_origins=['*'], allow_credentials=True, allow_methods=['*'], allow_headers=['*'])]
app = FastAPI(middleware=middleware)
origins = [
    "http://localhost",
    "http://localhost:4200"
]



app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)




@app.post("/test")
async def API1(r:Request ):
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="game_store")
    mycursor = mydb.cursor() 
    resultat= json.loads( await r.body() )
    mycursor.execute(f"SELECT * FROM gamer where nom ='{resultat['email']}'")
    myresult = mycursor.fetchall()
    y=json.dumps(myresult, default=str)
    return y    





@app.post("/signin")
async def SignIn( r:Request ):
        mydb = mysql.connector.connect(host="localhost",user="root",password="",database="game_store")
        mycursor = mydb.cursor()
        rsult= json.loads( await r.body() )
        mycursor.execute(f"SELECT * FROM gamer where email='{rsult['email']}' and password='{rsult['psw']}' ")
        myresult = mycursor.fetchall()
        y=json.dumps(myresult, default=str)
        return y
        
        





@app.post("/signup")
async def SignUp( r:Request ):
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="game_store")
    mycursor = mydb.cursor()
    rsult= json.loads( await r.body() )
    try:
       mycursor.execute(f"INSERT INTO gamer (email, password, nom, prenom, tel, photo) VALUES ('{rsult['email']}','{rsult['password']}','{rsult['nom']}','{rsult['prenom']}','{rsult['tel']}','{rsult['photo']}')")
       mydb.commit()
       return [True]                                                           
    except:
       mydb.rollback()
       return [False]  


@app.post("/get_games_prifil")
async def API5(r:Request):
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="game_store")
    mycursor = mydb.cursor() 
    res= json.loads( await r.body() )
    mycursor.execute(f"SELECT DISTINCT j.nom , j.catégorie ,j.description ,j.nb_charg , j.logo FROM profil_gamer p , jeu j where p.nom=j.nom and p.email ='{res['email']}'") #SELECT CLI_NOM, TEL_NUMERO FROM T_CLIENT C, T_TELEPHONE T
    myresult = mycursor.fetchall()
    y=json.dumps(myresult, default=str)
    return y    


@app.get("/all_games_db")
async def api_all_games():
     mydb = mysql.connector.connect(host="localhost",user="root",password="",database="game_store")
     mycursor = mydb.cursor() 
     mycursor.execute(f"SELECT nom , catégorie ,description ,nb_charg , logo FROM jeu ") #SELECT CLI_NOM, TEL_NUMERO FROM T_CLIENT C, T_TELEPHONE T
     myresult = mycursor.fetchall()
     y=json.dumps(myresult, default=str)
     return y    
 


@app.post("/info_game_card")
async def API_info_games (r:Request):
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="game_store")
    mycursor = mydb.cursor() 
    res= json.loads( await r.body() )
    mycursor.execute(f"SELECT nom,description,catégorie,nb_charg FROM jeu where nom='{res['nom']}'") #SELECT CLI_NOM, TEL_NUMERO FROM T_CLIENT C, T_TELEPHONE T
    myresult = mycursor.fetchall()
    y=json.dumps(myresult, default=str)
    return y   





@app.post("/supp_from_profil")
async def api_xcxw(r: Request):
     mydb = mysql.connector.connect(host="localhost",user="root",password="",database="game_store")
     mycursor = mydb.cursor() 
     res= json.loads( await r.body() )
     try :
        mycursor.execute(f"DELETE FROM `profil_gamer` WHERE `email`='{res['email']}' AND `nom`='{res['nom']}' ") # DELETE FROM `profil_gamer` WHERE `email`='rayen' AND `nom`='pong'
        mydb.commit()
        return {"rep" : " supp ok"}
     except :
        mydb.rollback()
        return {"rep" : "supp no"}    



@app.post("/add_to_profil")
async def api_add(r: Request):
     mydb = mysql.connector.connect(host="localhost",user="root",password="",database="game_store")
     mycursor = mydb.cursor() 
     res= json.loads( await r.body() )
     try :
        mycursor.execute(f"INSERT INTO profil_gamer (email, nom) VALUES ('{res['email']}','{res['nom']}') ") # DELETE FROM `profil_gamer` WHERE `email`='rayen' AND `nom`='pong'
        mydb.commit()
        return {"rep" : " add ok"}
     except :
        
        return {"rep" : "add no"} 












 
