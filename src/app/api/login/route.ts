import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log('login post');
  return NextResponse.json({
    name: 'CloudShadow',
    email: 'cloudshadow.hjy@gmail.com',
    picture: 'https://avatars.githubusercontent.com/u/1182967?v=4',
    sub: '1182967',
    userRole: 'admin',
    iat: 1689227251,
    exp: 1699819251,
    jti: '7694bc18-b199-4cf7-b59b-53bae6aa22a9',
  });
}
// export async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     // Process a POST request
//     console.log('login post');
//     res.status(200).json({
//       id: '1',
//       name: 'Luke Skywalker',
//       height: '172',
//       mass: '77',
//       hair_color: 'blond',
//       skin_color: 'fair',
//       eye_color: 'blue',
//       gender: 'male',
//     });
//   } else {
//     // Handle any other HTTP method
//     console.log('login other');
//   }
// }
