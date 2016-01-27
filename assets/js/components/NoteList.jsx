
import Note from './Note.jsx';

class NoteList extends React.Component {

    render() {
        // If there are notes then render the List view
        // Else show the message
        return (
            <section className="note-list-wrapper">
                {this.hasNotes() ? listView(this.props.items) : emptyMessage()}
            </section>
        );
    }

    hasNotes() {
        return (this.props.items.length > 0 );
    }
}

function listView(items) {

    return (
        <div className="note-list list-group">
            {items.map(item => (
                <Note key={item.id} title={item.title} text={item.text} />
            ))}
        </div>
    );
}

function emptyMessage() {
    return <div className="alert alert-warning">No Notes available</div>;
}

export default NoteList;
