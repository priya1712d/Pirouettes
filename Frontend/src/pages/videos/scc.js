import http from 'k6/http'
import {check,fail}from 'k6'
import crypto from 'k6/crypto'
import encoding from 'k6/encoding'

const SYSTEM_SLUG = __ENV.SYSTEM_SLUG||"none";
const SYSTEM_SECRET = __ENV.SYSTEM_SECRET||"none";

const thresholdErrorRate = __ENV.THRESHOLD_ERROR_RATE || "0.1";
const thresholdRttP95 = __ENV.THRESHOLD_P95 || "350";
const thresholdRttAvg = __ENV.THRESHOLD_AVG || "300";

export let options = {
    thresholds: {
        "Errors": ["rate<" + thresholdErrorRate],
        "RTT": [
            "p(95)<" + thresholdRttP95,
            "avg<" + thresholdRttAvg
        ],
    },
    stages: [
        { duration: "5m", target: 100 },
        { duration: "9m", target: 200 },
        { duration: "12m", target: 300 },
        { duration: "10m", target: 400 },
        { duration: "12m", target: 500 },
        { duration: "10m", target: 550 },
        { duration: "2m", target: 0 },
    ],
    userAgent: 'Haubitze/gdpr-bnd-api'
};

export default function main(){
    // If you add any other query parameters make sure they are sorted in alphabetical order
    let path = "/api/v1/request?offset=500"
    let hmac = NewHMAC("GET", path,SYSTEM_SLUG,SYSTEM_SECRET)
    const response = http.get(`https://deletion-st.deliveryhero.com${path}`, {
        headers: {
            "Content-Type": "application/json",
            "Date": hmac.Date,
            "Authorization": "HMAC "+hmac.Signature
        }
    })
    // Verify the response looks ok.
    check(response, {
        'status is 200': (r) => r.status === 200,
    });
}

function NewHMAC(method, url,  keyID, key){
    let ts = new Date().toISOString()
    const hasher = crypto.createHMAC('sha256', encoding.b64decode(key));
    hasher.update(method+url+ts)

    let sum = hasher.digest("base64");
    let signature = encoding.b64encode(keyID+":"+sum)

    return {
        Date: ts,
        Signature: signature
    }
}

