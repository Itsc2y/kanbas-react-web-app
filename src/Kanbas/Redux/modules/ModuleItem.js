import { useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteModule,
  setModule,
} from "./ModuleReducer";

function ModuleItem () {
    const { pathname } = useLocation();
    const parts = pathname.split('/');
    const screen = parts[parts.length - 1];
    const { courseId } = useParams();
    const modules = useSelector((state) => state.ModuleReducer.modules);
    const dispatch = useDispatch();
    
    return (
        <div>
            {
            modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
                <ul className="list-group mb-5 rounded-0">
                <li key={index} className="list-group-item list-group-item-secondary">
                    {screen === "Home" ? (
                    <>
                    <i className="fa fa-ellipsis-v float-end me-4"></i>
                    <i className="fa fa-plus float-end me-3"></i>
                    <i className="fa fa-check-circle float-end me-3" style={{ color: 'green' }}></i>
                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i> <i className="fa fa-ellipsis-v" aria-hidden="true" style={{ marginRight:'5px'}}></i> {module.name} —— {module.description}
                    </>
                    ) : (
                    <>
                    <button className="float-end btn btn-outline-warning me-2 rounded-0" onClick={() => dispatch(setModule(module))}>
                    Edit
                    </button>
                    <button className="float-end btn btn-outline-danger me-2 rounded-0" onClick={() => dispatch(deleteModule(module._id))}>
                    Delete
                    </button>
                    <div className="mt-2">
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i> <i className="fa fa-ellipsis-v" aria-hidden="true" style={{ marginRight:'5px'}}></i> 
                        {module.name} —— {module.description}
                    </div>
                    </>
                )}
                </li>
                    {
                    module.lessons.map((lesson, index) => (
                        <li key={index} className="list-group-item">
                        <i className="fa fa-ellipsis-v float-end me-4"></i>
                        <i className="fa fa-check-circle float-end me-3" style={{ color: 'green' }}></i>
                        <i className="fa fa-file-text-o"></i> {lesson.name}<br/>{lesson.description}
                        </li>
                    ))
                    }
                </ul>
            ))}  
        </div>
    );
}

export default ModuleItem;