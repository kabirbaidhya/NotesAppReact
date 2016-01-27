
import NoteList from './NoteList.jsx';
import NoteForm from './NoteForm.jsx';
import Note from '../services/Note.js';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notes: Note.fetchAll()
        };
    }

    handleAdd(data) {
        var note = Note.create(data);

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
