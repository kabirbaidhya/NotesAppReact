
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

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <NoteList items={this.state.notes} />
                <NoteForm />
            </div>
        );
    }
}

export default App;
