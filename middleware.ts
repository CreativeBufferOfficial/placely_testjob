import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'
import Cookies from "js-cookie";
import { NextCookies } from "next/dist/server/web/spec-extension/cookies";

export function middleware(req: NextRequest) {
    const { url } = req;
    if (url.includes('/dashboard')) {
        const cookies:NextCookies = req.cookies;
        const token = cookies.get('token')
        if(!token || typeof token === undefined)
            return NextResponse.redirect(new URL('/sign-in', req.nextUrl));

        return NextResponse.next();
    }

    return NextResponse.next();
}