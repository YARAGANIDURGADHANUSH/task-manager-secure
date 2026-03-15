import CryptoJS from "crypto-js"

const secret = process.env.ENCRYPT_SECRET

export const encrypt = (data)=>{
 return CryptoJS.AES.encrypt(
  JSON.stringify(data),
  secret
 ).toString()
}

export const decrypt = (cipher)=>{
 const bytes = CryptoJS.AES.decrypt(cipher,secret)
 return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
}