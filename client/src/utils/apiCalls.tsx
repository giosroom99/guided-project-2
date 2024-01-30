const baseURL = "http://localhost:3000/api/";

export async function fetchData(collection: string, id: number = -1) {
    try {
        let url = baseURL + collection;

        if (id != -1) {
            url += `/${id}`;
        }

        const data = await fetch(url);
        return await data.json();
    } catch(error) {
        console.error("Error has occured fetching data: ", error);
    }
}