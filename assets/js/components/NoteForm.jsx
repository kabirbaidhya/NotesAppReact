
class NoteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = getInitialState();
    }

    handleTitleChange(e) {
        this.setState({title: e.target.value});
    }

    handleTextChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        // Delegate it to the parent component
        this.props.onAdd({
            title: this.state.title,
            text: this.state.text
        });

        // Reset the Form
        this.setState(getInitialState());
    }

    render() {
        return (
            <section className="form-wrapper">
                <h3>Add Note</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Title"
                            value={this.state.title} onChange={this.handleTitleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" rows="3" placeholder="Note Text"
                            value={this.state.text} onChange={this.handleTextChange.bind(this)} ></textarea>
                    </div>
                    <button type="submit" className="btn btn-default">Add</button>
                </form>
            </section>
        );
    }
}

function getInitialState() {
    return { title: '', text: '' };
}

export default NoteForm;
