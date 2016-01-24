
import NoteList from './NoteList.jsx';
import NoteForm from './NoteForm.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <section className="note-list-wrapper">
                    <NoteList />
                </section>
                <section className="form-wrapper">
                    <NoteForm />
                </section>
            </div>
        );
    }
}

export default App;
