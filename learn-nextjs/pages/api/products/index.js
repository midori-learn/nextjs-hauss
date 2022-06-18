// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
    if(req.method !=='GET') res.status(404).json({message: 'this method is not supported'})
    const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1&_limit=10')
    const responseJSON = await response.json()

    res.status(200).json(responseJSON)
}
