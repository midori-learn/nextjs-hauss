// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import httpProxy from 'http-proxy'

const proxy = httpProxy.createProxyServer()

export const config = {
    api: {
        bodyParser: false
    }
}
export default function handler(req, res) {
    req.headers.cookie = '';
    proxy.web(req, res, {
        target: process.env.API_URL,
        changeOrigin: true,
        selfHandleResponse: false, // khong xu ly ma tra ve luon cho client 
    })
    // res.status(200).json({name: "PATH - Match all here"})

    // trong truong hop co su dung body (with update and post) => khong muon chuyen sang parse co san thi 
}
