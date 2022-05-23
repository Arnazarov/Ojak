import cookie from 'cookie';

export default function loginAPI(req, res ) {
    const {method, body} = req;

    switch (method) {
        case "POST": {
            const {username, password} = body;

            if (username === process.env.USERNAME && password === process.env.PASSWORD) {
                res.setHeaders("Set-Cookie", cookie.serialize("token", process.env.TOKEN, {
                    maxAge: 60* 60,
                    sameSite: "strict",
                    path: "/"
                }))

                res.status(200).json("Successful")
            } else {
                res.status(400).json("Invalid credentials")
            }

            break;
        }

        default:
            break;
    }

}