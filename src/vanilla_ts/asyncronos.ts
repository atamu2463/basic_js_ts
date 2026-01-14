type User = {
    name: string;
    id: number;
    email: string;
    website: string;
}

const fetchUsersByDomain = async (domain: string): Promise<User[]> => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
        }
        const users: User[] = await response.json();

        return users.filter(user => user.website.endsWith(domain));

    } catch (error) {
        console.error(`Fetch error: ${error}`);
        return [];
    }
};

fetchUsersByDomain('.org').then(console.log);