import React, { Component } from "react";
import {
  useParams
} from "react-router-dom";

const Topic = () => {
  let { topicId } = useParams();
  return (
    <div><h3>Requested topic ID: {topicId}</h3></div>
  );
}

export default Topic;
