import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as client from "./client";
import { useDispatch, useSelector } from 'react-redux';
import { setModules, addModule as addModuleAction, updateModule as updateModuleAction} from "./ModuleReducer";

function ModuleForm() {
    const { courseId } = useParams();
    const selectedModule = useSelector(state => state.ModuleReducer.module); 
    const [module, setModule] = useState({ name: "", description: "" });
    const dispatch = useDispatch();

    const addModuleHandler = async () => {
        try {
            const newModule = await client.addModule(courseId, module);
            dispatch(addModuleAction(newModule)); 
        } catch (error) {
            console.error("Failed to add module:", error);
        }
    };
    
    const handleInputChange = (e) => {
        setModule({ ...module, [e.target.name]: e.target.value });
    };

    const updateModuleHandler = async () => {
        try {
            const updatedModule = await client.updateModule(module._id, module);
            dispatch(updateModuleAction(updatedModule));
            fetchModules(); 
        } catch (error) {
            console.error("Failed to update module:", error);
        }
    };

    const fetchModules = async () => {
        try {
            const modules = await client.findModulesForCourse(courseId);
            dispatch(setModules(modules));
        } catch (error) {
            console.error("Failed to fetch modules:", error);
        }
    };

    useEffect(() => {
        if (selectedModule) {
            setModule(selectedModule); 
        }
    }, [selectedModule]);

    useEffect(() => {
        fetchModules();
    }, [courseId]);
    

    return (
        <ul className="list-group mb-5">
            <li className="list-group-item form-control rounded-0">
                <p>
                Module Name: 
                <input 
                    name="name"
                    className="float-end form-control rounded-0"
                    value={module.name}
                    onChange={handleInputChange}/>
                </p>
                <p>
                Description: 
                <textarea 
                    name="description" 
                    className="float-end form-control rounded-0"
                    value={module.description}
                    onChange={handleInputChange}/>
                </p>
                <button className="float-end btn btn-outline-primary mt-2 rounded-0" onClick={addModuleHandler}>Add</button>
                <button className="float-end btn btn-outline-success mt-2 me-2 rounded-0" onClick={updateModuleHandler}>Update</button>
            </li>
        </ul>
    );
}
export default ModuleForm;