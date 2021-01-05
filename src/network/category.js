import {request} from "./request";

export function getCategorydata() {
  return request({
    url:'/category'
  })
}


export function getMoreCategory(maitKey) {
  return request({
    url:'/subcategory',
    params:{
      maitKey
    }
  })
}
