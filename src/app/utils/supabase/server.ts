import { Database } from '@/types/supabase';
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { cache } from 'react';
import About from '../../../components/about';

export async function createClient() {
    const cookieStore = await cookies();

    return createServerClient<Database>(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return cookieStore.get(name)?.value;
                },
                set(name: string, value: string, options: CookieOptions) {
                    try {
                        cookieStore.set({ name, value, ...options });
                    } catch (error) {
                        // The `set` method was called from a Server Component.
                        // This can be ignored if you have middleware refreshing
                        // user sessions.
                    }
                },
                remove(name: string, options: CookieOptions) {
                    try {
                        cookieStore.set({ name, value: '', ...options });
                    } catch (error) {
                        // The `delete` method was called from a Server Component.
                        // This can be ignored if you have middleware refreshing
                        // user sessions.
                    }
                },
            },
        },
    );
}

export async function fetchFeedbacks() {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('feedback')
        .select()
        .eq('display', true);

    if (error) {
        console.error(error);
        throw new Error('Failed to fetch feedbacks', { cause: error.message });
    }

    if (!data || data.length === 0) {
        return null;
    }

    return data;
}
