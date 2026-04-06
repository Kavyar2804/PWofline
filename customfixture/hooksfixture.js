import {pomtest} from '../customfixture/pomfixture'




 export const hookstest = pomtest.extend({
    loginfixture: async({regstrpg},use)=>{
        // const loginfixture = undefined

            console.log('login');
    
        await regstrpg.navigate('https://demoapps.qspiders.com/ui?scenario=1')

            await use()

    },


    logoutfixture:async({page}, use)=>{
        // const logoutfixture =undefined

        await use()
        
        console.log('logout');

        
    }




})

