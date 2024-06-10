const { createStudent } = require("../model/data")

let studentController = (req,res)=>{

    let data = createStudent(req.query)
    data.save().then(d=>{
        res.status(200).json({
            msg:'student successfully created',
            data:d
        })
    }).catch(e=>{
        res.status(400).json({
            msg:'student not created',e
        })
    })
   
}
    // find the student

    let studentFind = async(req,res)=>{
      try
      {
        const {id}= req.params;
        const data = await createStudent.findById(id);
        res.status(200).json({
            msg:'student successfully find',
            data:data
        })

      }
      catch{
        res.status(400).json({
            msg:'please fill valid id',e
        })
      }
    }

    // update the student

    let studentUpdate = async(req,res)=>{
        try{
  const {id} = req.params;
  let result = await createStudent.findByIdAndUpdate(id,req.query)
  if(!result)
    {
        res.status(400).json({msg:'student not found'})
    }
    else
    {
        res.status(200).json({
            msg : 'updated successfully',
            data:result
           })
    }
         }
        catch
        {
            res.status(400).json({
                msg:'please fill valid id',e
            })
        }
    }

    // Delete the student

    let studentDelete = async(req,res)=>{
        try
        {
  const {id} = req.params;
  const result = await createStudent.findByIdAndDelete(id);
        if(!result)
            {
                res.status(400).json({msg:'student not found'})
            }
            else
            {
                res.status(200).json({
                    msg : 'student Deleted successfully',
                   })
            }
    
        }
        catch
    {
        res.status(400).json({
            msg:'please fill valid id',e
        })
    }
    }
module.exports ={studentController,studentFind,studentUpdate,studentDelete}