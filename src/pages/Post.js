import React from 'react';

const Post = ({match, location}) => {
    return (
        <div>
            포스트 {match.params.id}

            "location.pathname:" {location.pathname}
            <br/>
            "match.path: " {match.path}
            <br/>
            "match.url: " {match.url}
        </div>
    );
};
export default Post;