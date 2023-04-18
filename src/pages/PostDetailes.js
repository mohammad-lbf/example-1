import React from 'react';
import { useParams } from 'react-router-dom';
const PostDetailes = () => {
    const params = useParams().id
    return (
        <div>
            PostDetailes - {params}
        </div>
    );
};

export default PostDetailes;