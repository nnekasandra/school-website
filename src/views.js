import { useState } from "react";
import {Route, Routes,Link } from "react-router-dom";
import Found from "./found";
import Posts from "./posts";
function Views() {
    const [num, setNum] = useState(2);
  return (
    <Routes>
      <Route path="/home" element={<div>I love God <Link to={`/posts/ ${2}`} >Go to Posts</Link> </div>} />
      <Route path="/posts">
        <Route index element={<div>Blog Page Home </div>} />
        <Route path="1" element={<p>Blog Post 1</p>} />
        <Route path=":id" element={<Posts />} />
      </Route>
      <Route path="*" element={<div> <Found/> </div>} />
      <Route index element={<div>I love God so much </div>} />
    </Routes>
  );
}
export default Views;