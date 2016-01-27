
import NoteList from './NoteList.jsx';
import NoteForm from './NoteForm.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {id: 1, title: 'Foo', text: 'This is just a test note.'},
                {id: 2, title: 'Bar', text: 'This is just another test note.'}
            ]
        };
    }

    // TODO: Separation of Concern! Move this logic to a separate class
    createNote(data) {
        // Generate a random note id for the timebeing
        data.id = Math.ceil(Math.random() * 100);

        return data;
    }

    handleAdd(data) {
        // Note: Create Note
        var note = this.createNote(data);

        this.setState({
            notes: this.state.notes.concat([note])
        });
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>

                <NoteList items={this.state.notes} />
                <NoteForm onAdd={this.handleAdd.bind(this)}/>
            </div>
        );
    }
}

export default App;
