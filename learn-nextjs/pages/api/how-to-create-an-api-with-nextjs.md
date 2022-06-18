### API Routes

- nextjs chay tren nodejs server, so i co the tan dung nodejs nay de tao mot api su dung ben phia client
- nextjs cung ho tro de cho phep tao ra api mot cach de dang
- tao file trong folder pages/api de chuyen thanh mot api tuong ung
  

```
import type { NextApiRequest, NextAPi Response } from 'next'

type Data = {
    name: string
}

export default function handler (
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    res.status(200).json({name: 'John Doe'})
}
```

Quy tac dat ten tuong tu nhu dat ten component

file => API generated

/pages/api/hello.ts => /api/hello

/pages/api/products/index.ts => /api/products

/pages/api/products/[productId].ts => /api/products/123 (any method)

(in this case, we can check by if else look like:
    if(req.method === 'POST') {

    }else if(req.method === 'GET'){

    } else ... anything
)
/pages/api/[...slug].ts => /api/test or /api/another/test or ...
(to pass all of cases)

ref: 


** Issues**

if project co nhieu api

=> setup 1 nhung co the nhan tat ca request?

=> goi la proxy server => http-proxy 