
class Note extends React.Component {
    render() {
        return (
            <a key={this.props.id} className="note list-group-item">
                <h4>{this.props.title}</h4>
                <p className="preview-text list-group-item-text">{this.props.previewText}</p>
            </a>
        );
    }
}

export default Note;
