const Usermodel = require('../Userschema/User')
const created_User =  async(req,res)=>{
    const { Id,Username,Password,ConfirmPassword,Balance, Deposit, Withdrawal} = req.body;
    
    const olduser = await Usermodel.find({Username:Username})

    console.log(olduser)
// let t= olduser.filter(v => v.Username === Username)

//     if(t.length > 0){
//         res.json("user name already regitered!")
//         return
//     }

    
if(olduser.length > 0){
    res.json("User name is alresdy regitered...!")
    return
}
    
    const user = new Usermodel({
        Id,
    Username,
    Password,
    ConfirmPassword,
    Balance,
    Deposit,
    Withdrawal
    })

    const a= await user.save()
  
    
   res.json({
    success:true,
    
    
    
   })
    
}




const Get_Users = async(req,res)=>{
        const user = await  Usermodel.find({})
        res.json({
            success:true,
            user
        })
}
module.exports = {created_User,Get_Users};