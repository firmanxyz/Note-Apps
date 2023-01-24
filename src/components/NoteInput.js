import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitleChange(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChange(e) {
    this.setState(() => {
      return {
        body: e.target.value,
      };
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    const batas = 50 - this.state.title.length;
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmit}>
          <p className="note-input__title__char-limit">
            Sisa Karakter : {batas}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Silahkan Masukkan Judul"
            required
            value={this.state.title}
            maxLength="50"
            onChange={this.onTitleChange}
          ></input>
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Silahkan Masukkan Catatan Anda..."
            required
            value={this.state.body}
            onChange={this.onBodyChange}
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
