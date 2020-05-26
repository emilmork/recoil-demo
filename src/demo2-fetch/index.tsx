import React, { Suspense } from "react";
import Users from "./components/Users";
import Friends from "./components/Friends";

function DemoFetch() {
  return (
    <div>
      <h3>Users</h3>
      <Suspense fallback={<span>Loading users..</span>}>
        <Users />
      </Suspense>
      <h3>Friends</h3>
      <Suspense fallback={<span>Loading friends..</span>}>
        <Friends />
      </Suspense>
    </div>
  );
}

export default DemoFetch;
