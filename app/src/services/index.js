import {fetchStatus,getErrors,setHJson} from '../utils'
// let API = 'http://localhost:3015/api/v1'
let API = 'https://www.n12.mx/api/v1'
// if(process.env.NODE_ENV==='production'){
//   API = process.env.PROD_URL
// }

export const local = {
  setLocalToken(token){
    return sessionStorage.setItem('',token)
  }
}
// export const api = {
//     postArticle(dataPost){
//         let init
//         init = setHJson(init,'POST',dataPost)
//         return fetch(`${API}/articles`,init)
//         .then(fetchStatus)
//         .catch(getErrors)
//     }
// }

export const api_public = {
  getOneBeslides(beslidesURL){
    let init
    init = setHJson(init,'GET')
    return fetch(`${API}/public/beslides${beslidesURL}`,init)
    .then(fetchStatus)
    .catch(getErrors)
  },
  postOffer(dataOffer){
    let init
    init = setHJson(init,'POST',dataOffer)
    return fetch(`${API}/public/coupon`,init)
    .then(fetchStatus)
    .catch(getErrors)
  },
  verifyOffer(couponURL){
    let init
    init = setHJson(init,'GET')
    return fetch(`${API}/public/coupon_verify${couponURL}`,init)
    .then(fetchStatus)
    .catch(getErrors)
  },
  postOrder(dataOrder){
    let init
    init = setHJson(init,'POST',dataOrder)
    return fetch(`${API}/public/order`,init)
    .then(fetchStatus)
    .catch(getErrors)
  },
  postPurchase(dataBuy){
    let init
    init = setHJson(init,'POST',dataBuy)
    return fetch(`${API}/public/transaction-complete`,init)
    .then(fetchStatus)
    .catch(getErrors)
  },
  postStripePaymentIntent(intentData){
    let init
    init = setHJson(init,'POST',intentData)
    return fetch(`${API}/public/payment-intent`,init)
    .then(fetchStatus)
    .catch(getErrors)
  },
  putStripePaymentIntent(updateData){
    let init
    init = setHJson(init,'PUT',updateData)
    return fetch(`${API}/public/payment-intent`,init)
    .then(fetchStatus)
    .catch(getErrors)
  },
  postStripeConfirmPayment(intentData){
    let init
    init = setHJson(init,'POST',intentData)
    return fetch(`${API}/public/confirm-payment`,init)
    .then(fetchStatus)
    .catch(getErrors)
  },
  postStripeSession(order_id){
    let init
    init = setHJson(init,'POST')
    return fetch(`${API}/public/checkout-session/${order_id}`,init)
    .then(fetchStatus)
    .catch(getErrors)
  },
  postSubscribe(dataSubs){
    let init
    init = setHJson(init,'POST',dataSubs)
    return fetch(`${API}/public/subscriber`,init)
    .then(fetchStatus)
    .catch(getErrors)
  },
  postDataLead(dataLead){
    let init
    init = setHJson(init,'POST',dataLead)
    return fetch(`${API}/public/lead`,init)
    .then(fetchStatus)
    .catch(getErrors)
  },
  postDataRegistry(dataRegistry){
    let init
    init = setHJson(init,'POST',dataRegistry)
    return fetch(`${API}/public/assistance`,init)
    .then(fetchStatus)
    .catch(getErrors)
  },
  getProducts(productQueries){
    return fetch(`${API}/public/product${productQueries}`)
    .then(fetchStatus)
    .catch(getErrors)
  },
  postQRcode(url){
    let init
    init = setHJson(init,'POST',url)
    return fetch(`${API}/public/codeqr`,init)
    .then(fetchStatus)
    .catch(getErrors)
  },
  verifyAssistance(assistance_id,body){
    let init
    init = setHJson(init,'POST',body)
    return fetch(`${API}/assistances/${assistance_id}`,init)
    .then(fetchStatus)
    .catch(getErrors)
  }
}
