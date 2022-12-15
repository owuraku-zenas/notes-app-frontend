import axios from "./axios";
type NoteType = {
    id: number,
    title: string,
    description: string,
    updated_at: string,
    created_at: string,
}

export interface Response {
    success: boolean;
    data:    Data;
    message: string;
    status: number;
}

export interface Data {
    id:          number;
    title:       string | Array<string>;
    description: string;
    created_at:  Date;
    updated_at:  Date;
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
export const getNote = async (noteId:number): Promise<NoteType> => {
    const response = await axios.get('/notes/'+ noteId, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        console.log(response.data.data);
        return response.data.data;
    }).catch((error) => {
        console.error(error);
    })

    return response;
}

// Update a Note
export const updateNote = async (id: number, title:string, description: string|null): Promise<Response> => {
    const response: Promise<Response> = await axios.patch('/notes/'+ id,{
        title: title,
        description: description
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        console.log(response.data.data);
        return response?.data.data;
    })
    .catch((error) => {
        return error.response;
    })

    return response;
}

// Delete a Note
export const deleteNote = async (noteId:number): Promise<NoteType> => {
    const response = await axios.delete('/notes/'+ noteId, {
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