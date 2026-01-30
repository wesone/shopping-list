const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';

export default async function request(method: string, route: string, payload?: object) {
    const url = `${apiUrl}${route}`;
    const options: RequestInit = {
        method,
        headers: { 'Content-Type': 'application/json' }
    };

    if (payload)
        options.body = JSON.stringify(payload);

    const response = await fetch(url, options);

    if (!response.ok)
        throw new Error(`Failed to fetch ${url}`);

    try {
        const data = await response.json();
        return data;
    }
    catch {
        return;
    }
}
