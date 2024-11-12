export const getPosts = async () => {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts`
        );
        return response.json();
    } catch (error) {
        throw new Error(error);
    }
};
