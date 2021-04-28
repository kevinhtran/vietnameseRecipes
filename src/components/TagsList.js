import React from 'react';
import setupTags from '../utils/setupTags';

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes);
  return (
    <div>
      <h4>this is a tagslist</h4>
    </div>
  );
};

export default TagsList;
