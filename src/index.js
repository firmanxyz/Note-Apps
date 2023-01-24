import React from "react";
import { createRoot } from "react-dom/client";
import NoteAppHeader from "./components/NoteAppHeader";
import NoteAppBody from "./components/NoteAppBody";
import { getInitialData } from "./utils/index";

// import style
import "./styles/style.css";
import { getByTitle } from "@testing-library/react";

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Datas: getInitialData(),
    };
    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onAddEventHandler = this.onAddEventHandler.bind(this);
  }

  onDeleteEventHandler(id) {
    const datas = this.state.Datas.filter((data) => data.id !== id);
    this.setState({ Datas: datas });
  }

  onAddEventHandler({ body, title }) {
    this.setState((prevState) => {
      return {
        Datas: [
          ...prevState.Datas,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    return (
      <>
        <NoteAppHeader />
        <NoteAppBody
          datas={this.state.Datas}
          onDelete={this.onDeleteEventHandler}
          addNote={this.onAddEventHandler}
        />
      </>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<Container />);
