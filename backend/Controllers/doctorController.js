import Doctor from '../models/DoctorSchema.js'
export const updateDoctor = async (req,res)=>{
    const id=req.params.id
    try {
        const updatedDoctor=await Doctor.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.status(200).json({succses:'true',message:'succsesfully updated',data:updatedDoctor})
        } catch (error) {
            res.status(500).json({succses:'false',message:'failed to update'})
        
    }
}
export const deleteDoctor = async (req,res)=>{
    const id=req.params.id
    try {
        await Doctor.findByIdAndDelete(id)
        res.status(200).json({succses:'true',message:'succsesfully Deleated'})
        } catch (error) {
            res.status(500).json({succses:'false',message:'failed to Delete'})
        
    }
}
export const getSingleDoctor = async (req,res)=>{
    const id=req.params.id
    try {
        const getSingleDoctor=await Doctor.findById(id).populate("reviews").select('-password')
        res.status(200).json({succses:'true',message:'succsesfully doctor found ',data:getSingleDoctor})
        } catch (error) {
            res.status(404).json({succses:'false',message:'failed to find doctor'})
        
    }
}
export const getAllDoctors = async (req,res)=>{
    try {
        const {query}=req.query
        let doctors;
        if(query){
            doctors=await Doctor.find({isApproved:'Approved',$or:[{name:{$regex:query,$options:'i'}},{specialization:{$regex:query,$options:'i'}}]}).select("-password")
        }else{
            doctors=await Doctor.find({isApproved:'Approved'}).select("-password")
        }
        res.status(200).json({succses:'true',message:'succsesfully found doctors ',doctors})
        } catch (error) {
            res.status(404).json({succses:'false',message:'failed to find doctors'})
        
    }
}