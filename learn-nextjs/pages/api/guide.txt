-----------------------------------------------------------------------------------------------------
- we can create an api with nextjs because nextjs is run in a nodejs server

- create a api with a "export default function handler (req, res){}"

- call nextjs so nextjs call a api so api will return to nextjs and return for client

- issue: co cach nao de setup one but call all requests and pass to api

- this is called proxy server -> http-proxy

-----------------------------------------------------------------------------------------------------
**API Login**
- json server: js-post-api

- login api
    {
        username: "min length 4",
        password: "min length 6",
    }

    => return {
        access_token: "",
        expiredAt: ""
    }

- profile api
    - is a private api (login so we can use it)
    HEADERS
    Authorization: Bearer access_token

    - watch out: remember "Bearer " before your token

response {
    username: "",
    city: "",
    email: ""
}
-----------------------------------------------------------------------------------------------------
**COOKIES TO NEXTJS**
https://js-post-api.herokuapp.com/api




-----------------------------------------------------------------------------------------------------