import { LabelType,TagType } from "types/label";
const urlReg=/^((https|http)?:\/\/)[^\s]+/;

export const queryBaidunewsHotList = async () => {
  const result = await fetch("http://api.5cv.top/getnewsHotList");
  return result;
};
export const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const uniqueTags=(data:Array<LabelType>)=>{
  
    return data.map((item:LabelType)=>{
      return {
        ...item,
        tags:uniqueKey(item.tags,'id')
      }
    })
}



export const uniqueKey=(arr:any[],key:string)=> {
  let map = new Map()
  arr.forEach((item)=>{
    if (!map.has(item[key])){
      map.set(item[key],item)
    }
  })
  return Array.from(map.values())
}


export const validateIsSite =(tag:TagType)=>{
  return urlReg.test(tag.link)&&tag.name
}
