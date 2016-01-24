
class NoteForm extends React.Component {
    render() {
        return (
            <div>
                <h3>Add Note</h3>
                <form>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" rows="3" placeholder="Note Text"></textarea>
                    </div>
                    <button type="submit" className="btn btn-default">Add</button>
                </form>
            </div>
        );
    }
}

export default NoteForm;
