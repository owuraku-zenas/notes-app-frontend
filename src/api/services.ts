import axios from "./axios";
type NoteType = {
    id: number,
    title: string,
    description: string,
    updated_at: string,
    created_at: string,
}

// Get all Notes
export const getNotes = async (): Promise<NoteType[]> => {
    const response = await axios.get('/notes', {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        console.log(response.data.data);
        return response;
    }).catch((error) => {
        console.error(error);
    })

    return response?.data.data;
    
}

// Get a Note

// Update a Note

// Delete a Note