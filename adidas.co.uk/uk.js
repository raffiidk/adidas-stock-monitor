const fetch = require('node-fetch');
const axios = require("axios")
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
}

const fileName = "./data.json"
const fs = require('fs');
let changed;

function getsettings(){
  let content = fs.readFile("settings.json", (err, data) => {
    if (err) throw err;
    let fileData = JSON.parse(data);
    const delay = content["delay"]
    const sku = content["sku"]
  });
  return delay, sku;
}

async function checkstock(sku) {
    changed = false
    console.log("Main function");
    let productUrl = `https://www.adidas.co.uk/api/products/${sku}.html`
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
    let history = content["history"]
    let last = history[-1]
  });
  return last
}

function check(last,current){
  if (last===current){
    changed = true
  }
  else{
    changed = false
  }
  return changed
}

function stockchange(sku){
  console.log(`Stock change has been detected in SKU: ${sku}`);
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
}

const delayTime,globalSku = getsettings();
while (true) {
  let stockNumbers, productUrl = (async()=>await checkstock(globalSku))();
  let last = getlast();
  stockChange = check(last,stockNumbers);
  if (stockChange === true){
    stockchange(globalSku);
  }
  writejson(stockNumbers);
  await delay(delayTime)

}