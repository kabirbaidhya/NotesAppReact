
import NoteList from './NoteList.jsx';
import NoteForm from './NoteForm.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <NoteList />
                <NoteForm />
            </div>
        );
    }
}

export default App;
