import { NextResponse } from 'next/server';
// import { NextApiHandler } from 'next'

// const handler: NextApiHandler = (req, res) => {
//   console.log(req.method)

//   res.json({ ok: true })
// }

// export default handler

// GET
// POST
// PATCH
// PUT
// DELETE


export async function GET(request: Request, response: NextResponse) {
  const { method } = request

  const data = { ok: true }

  switch(method) {
    case 'POST': 
      return NextResponse.json(data)
    default:
      return NextResponse.json({status: 404})
  }

}