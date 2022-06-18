// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
    if(req === "GET")
        res.status(200).json({products: [{id: 1, name: "product 1"}]})
        else {
            res.status(404).json({message: "not found this method"})
        }
  }
   