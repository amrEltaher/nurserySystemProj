const data = require('../Data/data');

exports.getAllClasses = (req,res)=> {
  res.json(data.classes);
}

exports.getClassById = (req,res)=> {
  const classId = +req.params.id;
  const classObj = data.classes.find((classObj)=>classObj._id === classId);
  if(!classObj){
    res.status(404).json({message:"class not found"});
  }
  res.json(classObj);
}
exports.addClass = (req,res)=> {
  const newclass = req.body;
  console.log(newclass);
  data.classes.push(newclass);
  res.status(201).json({message:'class added successfully',newclass});
}

exports.updateClass = (req,res)=> {
  const classId = +req.params.id;
  data.classes = data.classes.map((classObj)=>{
    if(classObj._id === classId){
      return req.body;
    }
    return classObj;
  })
  res.json(data.classes);
}

exports.deleteClass = (req,res)=> {
  const classId = +req.params.id;
  data.classes = data.classes.filter((classObj)=>{
    return classObj._id!== classId;
  })
  res.json(data.classes);
}

exports.changePassword = (req,res)=> {
  const userType = req.params.userType;
  if(userType === 'teacher'){
    res.json({message:"teacher password changed successfully"});
  }else{
    res.json({message:"child password changed successfully"});
  }
}









