
class Note {

    /**
     * Creates a Note
     */
    static create (data) {
        return {
            // Generate a random Note Id
            id: Math.ceil(Math.random() * 100),
            title: data.title,
            text: data.text
        };
    }

    /**
     * Fetches all the Notes
     */
    static fetchAll() {
        return [
            {id: 1, title: 'Foo', text: 'This is just a test note.'},
            {id: 2, title: 'Bar', text: 'This is just another test note.'}
        ];
    }
}

export default Note;
