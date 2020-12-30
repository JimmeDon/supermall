import {request} from "./request";

export function getDetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

export class Comments {
  constructor(rate){
    this.cRate = rate.cRate;
    this.content = rate.list[0].content;
    this.create = rate.list[0].created;
    this.image = rate.list[0].images ? rate.list[0].images[0] : '';
    this.avatar = rate.list[0].user.avatar ? rate.list[0].user.avatar : '';
    this.name = rate.list[0].user.uname;
 /*   this.style = rate.list[0].*/
  }
}
