
import Note from './Note.jsx';

class NoteList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {id: 1, title: 'Foo', text: 'This is just a test note.'},
                {id: 2, title: 'Bar', text: 'This is just another test note.'}
            ]
        };
    }

    hasNotes() {
        return (this.state.notes.length > 0 );
    }

    render() {
        // If there are notes then render the List view
        // Else show the message
        return (
            <section className="note-list-wrapper">
                {this.hasNotes() ? listView(this.state.notes) : emptyMessage()}
            </section>
        );
    }
}

function listView(list) {

    return (
        <div className="note-list list-group">
            {list.map(item => (
                <Note key={item.id} title={item.title} text={item.text} />
            ))}
        </div>
    );
}

function emptyMessage() {
    return (
        <div className="alert alert-warning">No Notes available</div>
    );
}

export default NoteList;
