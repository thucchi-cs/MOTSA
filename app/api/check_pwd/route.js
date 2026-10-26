import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

export async function POST(request) {
    const {pwd} = await request.json();

    const matched = await bcrypt.compare(pwd, "$2b$10$CdgWFpvdsd75r90xqE2UlOvqsyRkEnvsi.W2.HtWSP3EyFlx0v6cG");
    
    if (matched) {
        return NextResponse.json({ 
            success: true, 
            message: 'Password correct',
        });
    } else {
        return NextResponse.json({ 
            success: false, 
            message: 'Password incorrect',
        });
    }
}