function ModuleHeader () {
    return (
        <div className="d-flex justify-content-end gap-1 mb-2">
            <button type="button" className="btn btn-outline-dark rounded-0">Collapse All</button>
            <button type="button" className="btn btn-outline-dark rounded-0">View Progress</button>
            
            <div className="dropdown">
            <button className="btn btn-outline-dark rounded-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-check-circle-o wd-fg-color-green"></i> Publish All
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Publish all items and modules</a></li>
                <li><a className="dropdown-item" href="#">UnPublish</a></li>
            </ul>
            </div>

            <button type="button" className="btn btn-danger rounded-0">+ Modules</button>
            <button type="button" className="btn btn-outline-dark rounded-0"><i className="fa fa-ellipsis-v"></i></button>
        </div>
    );
}

export default ModuleHeader;