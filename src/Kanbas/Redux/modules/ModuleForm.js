import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addModule, updateModule, setModule } from "./ModuleReducer";

function ModuleForm() {
    const { courseId } = useParams();
    const module = useSelector((state) => state.ModuleReducer.module);
    const dispatch = useDispatch();

    return (
        <ul className="list-group mb-5">
            <li className="list-group-item form-control rounded-0">
                <p>
                Module Name: 
                <input 
                className="float-end form-control rounded-0"
                value={module.name}
                onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
                }/>
                </p>
                <p>
                Description: 
                <textarea 
                className="float-end form-control rounded-0"
                value={module.description}
                onChange={(e) => 
                    dispatch(setModule({ ...module, description: e.target.value }))
                }/>
                </p>
                <button className="float-end btn btn-outline-primary mt-2 rounded-0" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
                <button className="float-end btn btn-outline-success mt-2 me-2 rounded-0" onClick={() => dispatch(updateModule(module))}>Update</button>
            </li>
        </ul>
    );
}
export default ModuleForm;