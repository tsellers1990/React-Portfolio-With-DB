import React from "react";
export function Input(props) {
    return (
        <div className="form-group" style={{ marginLeft : 20, marginRight: 50}}>
            <input className="form-control" {...props} />
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} /*disable="true" */ style={{ float: "left", marginBottom: 10, margin: 20 }} className="btn btn-success" >
            Submit➢
        </button>
    );
}
