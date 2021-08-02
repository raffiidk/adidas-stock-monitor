const fetch = require('node-fetch');
const axios = require("axios");
const opn = require('opn');


const fetchData = {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    "content-type": "application/json",
    "glassversion": "978d842",
    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-instana-l": "1,correlationType=web;correlationId=557d0923d7859acf",
    "x-instana-s": "557d0923d7859acf",
    "x-instana-t": "557d0923d7859acf",
    "cookie": "gl-feat-enable=CHECKOUT_PAGES_ENABLED; geo_ip=86.163.131.241; geo_country=GB; onesite_country=GB; akacd_generic_prod_grayling_adidas=3804778770~rv=62~id=7f73834992c4956d8490b921ce108d9e; akacd_plp_prod_adidas_grayling=3804778770~rv=83~id=86abbf74ef04685acc681abb1e89f99c; default_searchTerms_CustomizeSearch=%5B%5D; geoRedirectionAlreadySuggested=false; wishlist=%5B%5D; mt.v=5.1366742023.1627325973272; pagecontext_cookies=; pagecontext_secure_cookies=; ab_decibel=a; utm_source=Adwords; channelcloser=any other; AMCVS_7ADA401053CCF9130A490D4C%40AdobeOrg=1; s_cc=true; AKA_A2=A; bm_sz=B0D6CE9022EB52586793D36BF280E327~YAAQwcNQaFCu28x6AQAAGDgk8wz73xfvud6a5OWLW3btUjMxUAuszVpkLWkCnAUhGK1Rdf4aiLgKAWtHACIBwAbdOc4UVdi5+l4zPJFFy5YZ+ZwvwVnW2fh4TAyzqVelK/bBBT25iEhfXCLw9W3mQh9sZbBvTdGAXNe7zvI4VZb1NtEm8CbmhRez0DZ6pYjopY6p0G2BI6dxRM8+BOxTrgXCcngqdKK/5XSZvqSJd+xzmN6BjO4fXFzxlyITM4f5W9qZmTTLfIw9ILOrAf+RHaMkgOivcYwuyr/+h0B5af3f3zmdZqG11LbakTwe8a28EEQ/X59eli4AEuCWSHlZUr889hSLWPMyt/ilfOeU9Mq3XqdM/bk0JtoRV7/7Elad4TjV4v5PXIZXB89qwqpdsBL9~3163440~3228724; isHomePageStartCurtainOpened=false; dwsid=y77I39TjDXH-nGvtaz-UArIwQ2EgBTZot2gkhl-HRm-sNZrrNPDVS5hcRAw8rO01FWh_eI62Zmok9Gp80zKZTA==; fallback_dwsid=y77I39TjDXH-nGvtaz-UArIwQ2EgBTZot2gkhl-HRm-sNZrrNPDVS5hcRAw8rO01FWh_eI62Zmok9Gp80zKZTA==; dwanonymous_d6ba5aaa95d9e677ab103d74c76dc070=acoejeguEaGpHVmnXl7KYHXMsL; fallback_dwanonymous_d6ba5aaa95d9e677ab103d74c76dc070=acoejeguEaGpHVmnXl7KYHXMsL; AMCV_7ADA401053CCF9130A490D4C%40AdobeOrg=-227196251%7CMCIDTS%7C18838%7CMCMID%7C66408849066408274754371535387706051793%7CMCAAMLH-1627930777%7C6%7CMCAAMB-1628181677%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1627584077s%7CNONE%7CMCAID%7CNONE; notice_preferences=2; _gid=GA1.3.2034228673.1627576881; _gat_tealium_0=1; _gcl_au=1.1.477994986.1627576881; _scid=b87f0cf3-3dc7-4529-a693-3528c6ab7caa; _ga=GA1.1.1027308315.1627576881; _fbp=fb.2.1627576881354.693581673; _pin_unauth=dWlkPVlqWmpPR000TnpRdE0yVmxZUzAwWTJOaUxXRXlPV0V0WVRjeE5UTTBaRFptWWpGaQ; da_sid=D5AC77438E32AE833B05AA134EA55C46D0.0|3|0|3; da_intState=; da_lid=E69F44709A72EA18AE54BB990CA7164D63|0|0|0; QSI_HistorySession=https%3A%2F%2Fwww.adidas.co.uk%2F~1627576881585; RES_TRACKINGID=221755741004834; RES_SESSIONID=445537187008135; ResonanceSegment=1; s_sess=%5B%5BB%5D%5D; UserSignUpAndSave=4; RT=\"z=1&dm=www.adidas.co.uk&si=94d5be97-71de-4f78-8558-bd69bc5db72a&ss=krp58xah&sl=4&tt=1kw&bcn=%2F%2F364bf5fa.akstat.io%2F&nu=4eigwq7u&cl=i33&ld=ij7\"; ak_bmsc=F226424A6FDD7E609875D229C776DEF2~000000000000000000000000000000~YAAQwcNQaLqv28x6AQAAjJck8wwMDMbRZrO2q+G5u+92PHLcOu7VhEEOtoyYCD/sMO+BX7NcaIuUY9Pi6aPsnLDx7OF1LRin37RNn9jiDsiM7AUNp5IPlGVpDrI7x3urxe38g0lHgjNtAOLBxAPmDUGVUaCCpSVDawhDFyO05Jpl0TtyjScUaLQOwH58PnTrMIMZkgyhN+5mVZ5j58B13Q7wYqTaREPzJMOdjXc3Kx9LIuOVS57+Z8cQJ3DNjHTlIEWUeVnwixOPbzoWWqsHu+XJgbktilb4TG0qFriMmeTPH2Vr6VE40faPpCiz9PCWDp8kfzehClwvrgr9sd+nWXrsXCySsYiOrsPIeDHeZ8BhisxGSRSNtHrexDVC3rGPB6NdPsS9p63LL8yQ9mSpAKznEn/hM5CWTC5ct7GdsUTOGfkJLVV7WnKAvUzN02Uuwb57tn9KD+U1AywoCPwKrsovSBRSAzeZn80gVL24e9PP4sTBqULDnNTK3Big; _uetsid=ce029c10f08b11eba9d44b9a2e0e173c; _uetvid=ce02acd0f08b11ebbc4f27b2034fe89b; _ga_4DGGV4HV95=GS1.1.1627576881.1.1.1627576898.43; BVBRANDID=cccda767-6435-463e-94e3-ee1406b31ee5; BVBRANDSID=bb571d20-b856-4936-990a-0efad541a9c2; utag_main=v_id:017ae42fd0f2001fce95e35da9a903073020006b00bd0$_sn:2$_se:13$_ss:0$_st:1627578708921$ab_dc:CONTROL%3Bexp-1632760877450$ses_id:1627576877436%3Bexp-session$_pn:1%3Bexp-session$_vpn:4%3Bexp-session$_prevpage:PRODUCT%7CX%20SPEEDFLOW%2B%20ARTIFICIAL%20GRASS%20BOOTS%20(FY6872)%3Bexp-1627580498740$dc_visit:1$dc_event:6%3Bexp-session$dc_region:eu-west-1%3Bexp-session; _abck=2E59D502110CF10D2F4BB8E194786880~-1~YAAQwcNQaCCx28x6AQAAKQgl8wZv5G+ud3b/d5WL2yTm1pQZpfqJsg8JWKMm02jNavwE3T5IxgEQVzwgxTzmxfh0H3f7L2o1cVkJCyRTtZjjPx9i8gDmzwhXFrH3UfZ8at90WVRB3dKyzrVOLOpisE2I8SkMS/gzCEyhWb1FFMolB0nyw3hEhamUavs2wGQEjjCTKHzyqMLEVZKpZ3RnJ22NMmm/BxrDsR2XjgE/4W1dmllL4N2R/uXXFEpP7hIy60CnZf1/6ruTmy4ElqBBjZr2dEjqwUxoZuQHM+7D5sh8Dxm2Rg9ep0LF6+lBS75IeyuVPzBqVWYuDpltPb1e8lyyukW/7CXr0rF9fQYVds39zEITpyjOyyJGqoePHzvgyrxM+isB50Pe9VPX1dlmJS+upso4vUBI1fPBTEbPrtrbA5bkzeqLbNJiMmwar0Z/8wbsIlNcpdmPN9XmA8k=~-1~-1~-1; s_pers=%20s_vnum%3D1627772400731%2526vn%253D2%7C1627772400731%3B%20pn%3D2%7C1630168885194%3B%20s_invisit%3Dtrue%7C1627578727290%3B; persistentBasketCount=1; userBasketCount=1; restoreBasketUrl=%2Fon%2Fdemandware.store%2FSites-adidas-GB-Site%2Fen_GB%2FCart-UpdateItems%3Fpid_0%3DFY6872_660%26qty_0%3D1%26; isCartPreviewShown=1627576927955"
  },
  "referrer": "https://www.adidas.co.uk/x-speedflow_-artificial-grass-boots/FY6872.html",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
};

const fileName = "./data.json";
const fs = require('fs');
let changed;

function getsettings(){
  let content = fs.readFile("settings.json", (err, data) => {
    if (err) throw err;
    let fileData = JSON.parse(data);
    const delay = content["delay"];
    const sku = content["sku"];
  });
  return delay, sku;
}

async function checkstock(sku) {
    changed = false;
    console.log("Main function");
    let productUrl = `https://www.adidas.co.uk/api/products/${sku}.html`;
    let request = await axios.get(`https://www.adidas.co.uk/api/products/${sku}/availability`);
    let availability = request.data;
    //console.log(availability);
    return availability, productUrl;
}
    
function writejson(json){
  fs.writeFile(fileName, json, (err) => {
    if (err) throw err;
  });
}

function getlast() {
  let content = fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    let fileData = JSON.parse(data);
    console.log(fileData);
    let history = content["history"];
    let last = history[-1];
  });
  return last;
}

function check(last,current){
  if (last===current){
    changed = true;
  }
  else{
    changed = false;
  }
  return changed;
}

function stockchange(sku){
  console.log(`Stock change has been detected in SKU: ${sku}`);
}

function getitems(url){
  let res = await axios.post("https://www.adidas.co.uk/api/chk/baskets/367a72ec7df6f5d19e03ef3791/items");
  console.log(res);
}

function postbasket(cart,body){
  let postObj = {
    "headers": {
      "accept": "*/*",
      "acecpt-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "checkout-authorization": "Bearer eyJfdiI6IjEiLCJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfdiI6IjEiLCJleHAiOjE2Mjc2OTM1OTQsImlhdCI6MTYyNzY5MTc5NCwic3ViIjoie1wiX3ZcIjpcIjFcIixcImN1c3RvbWVyX2luZm9cIjp7XCJjdXN0b21lcl9pZFwiOlwiYWJuRlY4Ulp3OFdFUHVtMTduUFRaWmVSVUNcIixcImd1ZXN0XCI6dHJ1ZSxcInZpc2l0X2lkXCI6XCIwZTg0M2FlNTFmZWI5MzJmNTI0YzFiZTViZVwifX0ifQ.dl8XgldAVo8SGRDrrSAdnbD_tnRnfYwIrohjhsPW78JgTif2kukQqnB74RgKHRx6U5CTBee8ktTVwqnmtguRT9AMxWtk30v8g6rd70g14ELlkbqyh5CuPuvw6SvyCEHsTHMe9PczapfLfnG8IMCql_glwU_cyWnx6bpgwIJvKKHH_bPp5JmoBz9HZkbzO22hDAZtkJzSgt6Tq5HR_ki_SE3uiBQMJ9beuopoLIiCMWJ6Y2NpG_mOX_gOmYm_m7hJzKuY4zU90SGc-GYkbBKfRPK3GthTr0LNXVsknydirpsZDI1hlBjrCxNz689-ogulTLxoZHaQcyDN-gDHPqQ35SnuGVctnS2CUtz_lzOPnjxo9nLs8o2yJBIo-2rQzgta6h0oBMECPKh_kp90uxy_dk_2yEjnvWV1qcPTol5xK-8_xnHrNFSTlCPkgNcltRuKFayPbXwLNZvBFvHXg7uZmJVoDiWSi41ukkahKpl9eg_SbxPiWCp6Fo8L0sb0lru3ZdIo3MCwZQjWg8bD19rgH1CmQ4oivCnNBeo52PgwImoFT22Lm4YS1pbZ8H1IqSuR",
      "content-type": "application/json",
      "glassversion": "088576d",
      "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-instana-l": "1,correlationType=web;correlationId=80d5c13a62bd3b2",
      "x-instana-s": "80d5c13a62bd3b2",
      "x-instana-t": "80d5c13a62bd3b2",
      "cookie": "gl-feat-enable=CHECKOUT_PAGES_ENABLED; geo_ip=86.163.131.241; geo_country=GB; onesite_country=GB; akacd_generic_prod_grayling_adidas=3804778770~rv=62~id=7f73834992c4956d8490b921ce108d9e; akacd_plp_prod_adidas_grayling=3804778770~rv=83~id=86abbf74ef04685acc681abb1e89f99c; wishlist=%5B%5D; geoRedirectionAlreadySuggested=false; default_searchTerms_CustomizeSearch=%5B%5D; mt.v=5.1366742023.1627325973272; pagecontext_cookies=; pagecontext_secure_cookies=; ab_decibel=a; channelcloser=any other; utm_source=Adwords; AMCVS_7ADA401053CCF9130A490D4C%40AdobeOrg=1; s_cc=true; isHomePageStartCurtainOpened=false; notice_preferences=2; _gcl_au=1.1.477994986.1627576881; _scid=b87f0cf3-3dc7-4529-a693-3528c6ab7caa; _fbp=fb.2.1627576881354.693581673; _pin_unauth=dWlkPVlqWmpPR000TnpRdE0yVmxZUzAwWTJOaUxXRXlPV0V0WVRjeE5UTTBaRFptWWpGaQ; da_lid=E69F44709A72EA18AE54BB990CA7164D63|0|0|0; RES_TRACKINGID=221755741004834; ResonanceSegment=1; BVBRANDID=cccda767-6435-463e-94e3-ee1406b31ee5; restoreBasketUrl=%2Fon%2Fdemandware.store%2FSites-adidas-GB-Site%2Fen_GB%2FCart-UpdateItems%3Fpid_0%3DFY6872_660%26qty_0%3D1%26; persistentBasketCount=1; userBasketCount=1; isCartPreviewShown=1627576927955; akacd_pdp_prod_adidas_grayling=3805032494~rv=14~id=ebe4fc97459a2ae8893db71c41e42aad; dwanonymous_d6ba5aaa95d9e677ab103d74c76dc070=cewbVrsWvofMmj0naRricTZrAK; fallback_dwanonymous_d6ba5aaa95d9e677ab103d74c76dc070=cewbVrsWvofMmj0naRricTZrAK; AKA_A2=A; bm_sz=E892F1742FB587081127934C224B08A7~YAAQrsNQaKy7A+N6AQAAKrb9+QygLrifHZUps1lSCiFbgRD87fRMdHd1KW4LzAbj88kHj+QfCnJOrjuRMu8SUZFd4+5hS8clM3ls3hKZbFfjxIPyvCKT5cO1yp422GS1Ax979TIK3mhHzUjXgrcrvwEIpX4hv17drPGvPWNiPePI7RPpqNCSwdI8KpBDf7h4NBjORFCZe+lorziT4GsbZtcrDB4Qhtrhg8QHYWmrwNc5zHLakssttrUSt8gk/ajkiyTjA9aJMIfp4k/+S+TFRnibaiqRcD6M1QBSiaF2YLZzKbIBGuP4I5tpdjSjka5V36oXhtZ7U38xxBA0+AJvgGzK9KG/ffkyzulnMfx73Ul9JwSLN81c/Xa3JCuUp8sK6RW7w/57u/IL0lxn7GDxHJnD~4474164~4276803; dwsid=W6ONb6EmakWmB96wxgcT8R5rhD9UyJA_BY6nGdSbEgvT483YLsdwRAh1dP5FnqELC9CFj9NwI2CHc7n3f28fLQ==; fallback_dwsid=W6ONb6EmakWmB96wxgcT8R5rhD9UyJA_BY6nGdSbEgvT483YLsdwRAh1dP5FnqELC9CFj9NwI2CHc7n3f28fLQ==; AMCV_7ADA401053CCF9130A490D4C%40AdobeOrg=-227196251%7CMCIDTS%7C18840%7CMCMID%7C66408849066408274754371535387706051793%7CMCAAMLH-1627930777%7C6%7CMCAAMB-1628296594%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1627698994s%7CNONE%7CMCAID%7CNONE; RES_SESSIONID=442290104253445; _gid=GA1.3.1062768251.1627691795; da_sid=E33D350C8E3CAE987999AA134EAF85D5F5.0|3|0|3; da_intState=; BVBRANDSID=0484eb9f-9d72-432a-a98f-ea7d2723d68e; bm_mi=0D596EAF34E4CE1C0376182BB083E16A~UkRg/Vxolek+fFdpT+VzvPcM97u/9EGZBEOSevR0BqC1e/pBLvNP/cm5jw+lDuOgno2TLrjWUQZe0YUhrwgZVTYO5c3EJ4aL0jGwlUCf0PyOOP2fRkn4DsdeDlMfXf08pw8Nm14elo/OZGctvv+xcvQtsJlFH2+/vb89ZR43VHyYYCGfkI5JfPF7gu8r6ID0l8BnUKK/B0/dKRw2VLbrp6FW4xz8+2gDT3UYK2hAj8IE8FUIBmtT+38dd8y/l2NGoY0/MToF9QAB1ihW3CZadg==; _ga=GA1.1.1027308315.1627576881; QSI_HistorySession=https%3A%2F%2Fwww.adidas.co.uk%2F~1627691829124; s_sess=%5B%5BB%5D%5D; UserSignUpAndSave=17; RT=\"z=1&dm=www.adidas.co.uk&si=94d5be97-71de-4f78-8558-bd69bc5db72a&ss=krr1nzrg&sl=e&tt=4of&bcn=%2F%2F6852bd06.akstat.io%2F&nu=uvycjdf&cl=1cgt&ld=1cxy\"; ak_bmsc=7C53A08BE33294A29493D9AD095284F6~000000000000000000000000000000~YAAQrsNQaIbBA+N6AQAAxbD++Qxo66UASdDb+gjkeyRL5QU4S/9Mfa/ui4txPX/kM/g0cs3g7mTz2B31YaEXT3plNWYuBdYV9Em0VcNx088LYLi1KexYmhX/0XF917yTWtr5X8RlTS269kFAUcF/vINU9eg+qch4Oqvt+Euc0lU2Wps+nNCCC6Pk7AL6fAWMFEyE+QK9JYOY2nQ7l3IBmNSv0pwBtkRrNCycvjzf2mwzOTIDc2Ht6VL5RZd/M/DyM08sWv9qXzq8I1rddH2K+XycbOlsm6y21gGQit2EcKNzReDZ79F8zKlTlqgPeWzBeZvX3UhTPhvC1OwGTNC1RKFpuOXrKsVqzw8oJsW01qG6T90oGgqlj9sFBm+OSAVcjp1TLxT9s9qnIftAAxLLBPXZDHhOS6rR+qKFMkuTZUF/uxn6Mv2WsG+tCZfmsTdjS4WsqWfwZ+mzyAIzoFWWmJCI42FIO1+D4WXEa/d0iUQs; _uetsid=5c1fa610f19711eb97764b246652e0a8; _uetvid=ce02acd0f08b11ebbc4f27b2034fe89b; _ga_4DGGV4HV95=GS1.1.1627691795.4.1.1627691855.60; utag_main=v_id:017ae42fd0f2001fce95e35da9a903073020006b00bd0$_sn:4$_se:62$_ss:0$_st:1627693723005$ab_dc:CONTROL%3Bexp-1632875827886$dc_visit:3$ses_id:1627691794519%3Bexp-session$_pn:2%3Bexp-session$_vpn:16%3Bexp-session$_prevpage:PRODUCT%7CNMD_R1%20SHOES%20(GX1050)%3Bexp-1627695455208$dc_event:49%3Bexp-session$dc_region:eu-west-1%3Bexp-session; _abck=2E59D502110CF10D2F4BB8E194786880~-1~YAAQrsNQaGzIA+N6AQAAWBMA+gZ83MImFKXnk/JOv0dEOna92hJny8JpMW+I46SRbNe4PVWuTRNPU0T68bhs5E/3PxFcNq08dZlHCwdvAqH5gNQtsX8NGNwgfyCYmMJMBQakyoK8BQypOTFuZzXyaYcdElOGpAYumHeaaXSJWF3f7VGwLABPXMp+72ZSLG7chEIoU8tSuo5KU4adg29P+/tBaPSys0haQif8arnYeaZG86I8ZjMbo9pfMkcHjk4I9xA/JI6kx834Icb6DLbU9aNEus23lfYxml6zTu7rmtKH0YzME3idDbje7DcCzL9ILiEjBmfJJy0CmikOtyGO3n/xrjTeFTZoEI0FqsMZjRRkSCTk9H30DfnSwle0EWe3ufVdzyMgEtoA84WPZLf1WVn1JZBdUBtnRrDcD8r2glGd8IE8FKBFp9mC5y+ViswSgPHSF7NZvvP5e3sqEhY=~-1~-1~-1; s_pers=%20s_vnum%3D1627772400731%2526vn%253D4%7C1627772400731%3B%20pn%3D3%7C1630283795033%3B%20s_invisit%3Dtrue%7C1627693745912%3B"
    },
    "referrer": "https://www.adidas.co.uk/ultraboost-5.0-dna-shoes/GY0862.html",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "[{\"product_id\":\"GY0862\",\"quantity\":1,\"product_variation_sku\":\"GY0862_670\",\"productId\":\"GY0862_670\",\"size\":\"10.5\",\"displaySize\":\"10.5\",\"specialLaunchProduct\":false}]",
    "method": "POST",
    "mode": "cors"
};
  let postData = JSON.stringify(postObj);
  let basketRes = await axios.post(`https://www.adidas.co.uk/api/chk/baskets/${cart}/items`, postObj)
  return basketRes.status
}

function autofill(data,cart){
  let patchData = {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "checkout-authorization": "Bearer eyJfdiI6IjEiLCJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfdiI6IjEiLCJleHAiOjE2Mjc5MzcyOTMsImlhdCI6MTYyNzkzMzc4Niwic3ViIjoie1wiX3ZcIjpcIjFcIixcImN1c3RvbWVyX2luZm9cIjp7XCJjdXN0b21lcl9pZFwiOlwiYWIycmZZcnFjVFdBVkNlSUFsY2lqYUo1WU5cIixcImd1ZXN0XCI6dHJ1ZSxcInZpc2l0X2lkXCI6XCI4YzhlMzM4ZDkzZDA0M2FlN2JhZTI2NmZiY1wifX0ifQ.dl8XgldAVo8SGRDrrSAdnbD_tnRnfYwIrohjhsPW78JgTif2kukQqnB74RgKHRx6U5CTBee8ktTVwqnmtguRT37e51ko2_AiIlBhRZx0pWrJg_1H0wAkCeMbTx1_3C1m_Q7RrCfzKUhHLjqEqGVOg_glwU_cyWnx6bpgwIJvKKHH_bPp5JmoBz9HZkbzO22hDAZtkJzSgt6Tq5HR_ki_SE3uiBQMJ9beuopoLIiCMWJ6Y2NpG_mOX_gOmYm_m7hJzKuY4zU90SGc-GYkbBKfRPK3GthTr0LNXVsknydirpsZDI1hlBjrCxNz689-ogulmAMv2enMnFhF-_LWM_cxCWRyl1iUrLdz03nZ8n9yau3mxyrgiYUx1c5d_K3oQU1q6h0oBMECPKh_kp90uxy_dk_2yEjnvWV1qcPTol5xK-9zXv0iNqdTMZfIJqOjmOGTaD6iWYjGiV5D5_IxZmSJ4RDo_54hoa4vClGkrmyLNC_gpkDFvwN5TotrNUzdEkSbnasfEmRPx-zDTUrfVZU1jPZHzPyJhCLMt1z_PkTW3TZTooU9rlkoITMhnv5vp75bQw1sTXnupOrT0vxgncuplQ",
      "content-type": "application/json",
      "glassversion": "088576d",
      "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-instana-l": "1,correlationType=web;correlationId=e54ee821ca33971f",
      "x-instana-s": "e54ee821ca33971f",
      "x-instana-t": "e54ee821ca33971f"
    },
    "referrer": "https://www.adidas.co.uk/delivery",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": data,
    "method": "PATCH",
    "mode": "cors",
    "credentials": "include"
  }
  let fill = await axios.patch(`https://www.adidas.co.uk/api/checkout/baskets/${cart}`,patchData)
  return fill.status

}

const exampleResponse = {
  id: 'FY6872',
  availability_status: 'IN_STOCK',   
  variation_list: [
    {
      sku: 'FY6872_580',
      size: '6',
      availability: 1,
      availability_status: 'IN_STOCK'
    },
    {
      sku: 'FY6872_590',
      size: '6.5',
      availability: 7,
      availability_status: 'IN_STOCK'
    },
    {
      sku: 'FY6872_600',
      size: '7',
      availability: 8,
      availability_status: 'IN_STOCK'
    },
    {
      sku: 'FY6872_610',
      size: '7.5',
      availability: 1,
      availability_status: 'IN_STOCK'
    },
    {
      sku: 'FY6872_620',
      size: '8',
      availability: 2,
      availability_status: 'IN_STOCK'
    },
    {
      sku: 'FY6872_630',
      size: '8.5',
      availability: 2,
      availability_status: 'IN_STOCK'
    },
    {
      sku: 'FY6872_640',
      size: '9',
      availability: 4,
      availability_status: 'IN_STOCK'
    },
    {
      sku: 'FY6872_650',
      size: '9.5',
      availability: 0,
      availability_status: 'NOT_AVAILABLE'
    },
    {
      sku: 'FY6872_660',
      size: '10',
      availability: 1,
      availability_status: 'IN_STOCK'
    },
    {
      sku: 'FY6872_670',
      size: '10.5',
      availability: 1,
      availability_status: 'IN_STOCK'
    },
    {
      sku: 'FY6872_680',
      size: '11',
      availability: 1,
      availability_status: 'IN_STOCK'
    },
    {
      sku: 'FY6872_690',
      size: '11.5',
      availability: 3,
      availability_status: 'IN_STOCK'
    },
    {
      sku: 'FY6872_700',
      size: '12',
      availability: 1,
      availability_status: 'IN_STOCK'
    },
    {
      sku: 'FY6872_710',
      size: '12.5',
      availability: 1,
      availability_status: 'IN_STOCK'
    },
    {
      sku: 'FY6872_720',
      size: '13',
      availability: 1,
      availability_status: 'IN_STOCK'
    }
  ]
};

const exampleBody = `[{\"product_id\":\"GY0862\",\"quantity\":1,\"product_variation_sku\":\"GY0862_670\",\"productId\":\"GY0862_670\",\"size\":\"10.5\",\"displaySize\":\"10.5\",\"specialLaunchProduct\":false}]","method": "POST",`
const exampleData = `"{\"customer\":{\"email\":\"yourmum@gmail.com\",\"receiveSmsUpdates\":false},\"shippingAddress\":{\"address1\":\"No\",\"city\":\"London\",\"country\":\"GB\",\"firstName\":\"No\",\"id\":\"d5cd9803cfea670c5a406a2646\",\"lastName\":\"No\",\"phoneNumber\":\"No\",\"zipcode\":\"No\",\"addressServiceProviderId\":\"No\",\"emailAddress\":\"yourmum@gmail.com\"},\"billingAddress\":{\"address1\":\"No\",\"city\":\"London\",\"country\":\"GB\",\"firstName\":\"No\",\"id\":\"d5cd9803cfea670c5a406a2646\",\"lastName\":\"No\",\"phoneNumber\":\"No\",\"zipcode\":\"No\",\"addressServiceProviderId\":\"GB|RM|B|No\",\"emailAddress\":\"yourmum@gmail.com\"},\"newsletterSubscription\":true,\"consentVersion\":\"ADIBV_VER_20191003_GB_EN\",\"methodList\":[{\"id\":\"Standard-LDN-3\",\"shipmentId\":\"me\",\"carrierCode\":\"ROM\",\"carrierServiceCode\":\"ROM300UK0600002898\",\"shipNode\":\"0629\",\"collectionPeriod\":\"2021-08-03T20:00:00.000Z,2021-08-03T20:00:00.000Z\",\"deliveryPeriod\":\"2021-08-04T08:00:00.000Z,2021-08-04T18:00:00.000Z\"}]}"`


let delayTime;
let globalSku;

delayTime, globalSku = getsettings();

while (true) {
  let stockNumbers, productUrl = (async()=>await checkstock(globalSku))();
  let last = getlast();
  stockChange = check(last,stockNumbers);
  if (stockChange === true){
    stockchange(globalSku);
    console.log("Stockchange triggered")
    let basketcode = postbasket("367a72ec7df6f5d19e03ef3791",exampleBody)
    if (basketcode === 200) console.log("Basket posted")
    let autocode = autofill(exampleData,"367a72ec7df6f5d19e03ef3791")
    if (autocode === 200) console.log("Address filled")
    opn("https://www.adidas.co.uk/payment")
    console.log("Window opened")


  }
  writejson(stockNumbers);
  await delay(delayTime);
}
