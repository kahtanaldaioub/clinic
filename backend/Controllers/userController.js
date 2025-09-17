import User from '../models/UserSchema.js'
export const updateUser = async (req,res)=>{
    const id=req.params.id
    try {
        const updatedUser=await User.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.status(200).json({succses:'true',message:'succsesfully updated',data:updatedUser})
        } catch (error) {
            res.status(500).json({succses:'false',message:'failed to update'})
        
    }
}
export const deleteUser = async (req,res)=>{
    const id=req.params.id
    try {
        await User.findByIdAndDelete(id)
        res.status(200).json({succses:'true',message:'succsesfully Deleated'})
        } catch (error) {
            res.status(500).json({succses:'false',message:'failed to Delete'})
        
    }
}
export const getSingleUser = async (req,res)=>{
    const id=req.params.id
    try {
        const getSingleUser=await User.findById(id).select('-password')
        res.status(200).json({succses:'true',message:'succsesfully user found ',data:getSingleUser})
        } catch (error) {
            res.status(404).json({succses:'false',message:'failed to find user'})
        
    }
}
export const getAllUsers = async (req,res)=>{
    try {
        const getAllUsers=await User.find({}).select('-password')
        res.status(200).json({succses:'true',message:'succsesfully found users ',data:getAllUsers})
        } catch (error) {
            res.status(404).json({succses:'false',message:'failed to find users'})
        
    }
}