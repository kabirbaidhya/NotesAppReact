
import Note from './Note.jsx';

class NoteList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {id: 1, title: 'Foo', previewText: 'This is just a test note.'},
                {id: 2, title: 'Bar', previewText: 'This is just another test note.'}
            ]
        };
    }

    hasNotes() {
        return (this.state.notes.length > 0 );
    }

    listView() {

        return (
            <div className="note-list list-group">
                {this.state.notes.map((item) => (
                    <Note key={item.id} title={item.title} previewText={item.previewText} />
                ))}
            </div>
        );
    }

    emptyMessage() {
        return (
            <div className="alert alert-warning">No Notes available</div>
        );
    }

    render() {
        // If there are notes then render the List view
        // Else show the message
        if (this.hasNotes()) {
            return this.listView();
        } else {
            return this.emptyMessage();
        }
    }
}

export default NoteList;
