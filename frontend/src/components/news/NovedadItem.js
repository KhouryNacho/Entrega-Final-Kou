import React from 'react';

const NovedadItem = (props) => {
    const { project_description, project_members, project_img_id, project_status} = props;

    return (
        <div className="novedades">
            <h1>{project_description}</h1>
            <h2>{project_members}</h2>
            <img src={project_img_id} alt="project"/>
            <div dangerouslySetInnerHTML={{ __html: project_status }} />
            <hr />
        </div>
    );
}

export default NovedadItem;