const data = require('../Data/data');


exports.getAllChilds = (req,res)=>{
  res.json(data.childs);
}

exports.getChildById = (req,res)=>{
  const childId = +req.params.id;
  const child = data.childs.find((child)=>child._id === childId);
  if(!child){
    res.status(404).json({message:"child not found"});
  }
  res.json(child);
}
exports.deleteChildById = (req,res)=>{
const childId = +req.params.id;
const child = data.childs.filter((child)=>child.id != childId);
if(!child){
  res.status(404).json({message:"child not found"});
}
  res.json({message:"child deleted", child});
}
exports.addChild = (req,res)=>{
  data.childs.push(req.body);
  res.json(data.childs);
}
exports.updateChild = (req,res)=>{
  const childId = +req.params.id;
  let child = data.childs.find((childId)=> child.id == childId);
  if(!child){
    res.status(404).json({message:"child not found"});
  }
  child = (req.body);
  res.json({child});
}