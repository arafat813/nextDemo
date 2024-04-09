import { query } from "@/lib/db";
import { unstable_noStore as noStore } from 'next/cache';
export async function getUser() {
    noStore()
    try{
        const users = await query({
            query: "SELECT * FROM users",
            values: [],
        });
        return users;
    }catch(error){
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}