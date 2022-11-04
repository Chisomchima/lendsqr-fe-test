import React from "react";
import { useEffect, useState } from "react";
import {db, getUserFromApi, saveUserToDb} from '../../config/indexedDbService';


const Dashboard = () => {
    const [userArray, setUserArray] = useState([])
    
    useEffect(()=>{
        const fetchUsers = async () => {
            try{
                const res = await getUserFromApi()
                // console.log(res)
                setUserArray(res)
            } catch(err){
                console.log(err)
            }
         
        }
        fetchUsers()
    }, [])

    useEffect(()=>{
        const addUserInIndexedDb = async (userArray) => {
            try{
                await saveUserToDb(userArray)
            } catch(err) {
                console.log(err)
            }
        }
        addUserInIndexedDb(userArray)
    }, [userArray])

    useEffect(()=>{
        const getUserInIndexedDb = async () => {
            // console.log(id)
            try{
                const res = await db.users.bulkGet(userArray.map((el) => el.id ));
                console.log(res)
            } catch(err) {
                console.log(err)
            }
        }
        getUserInIndexedDb()
    }, [])

 return (
    <div>hi there</div>
 )

}

export default Dashboard;