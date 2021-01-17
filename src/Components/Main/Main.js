import React from "react";
import Home from "./Home";
import Blog from "./Blog";
import NewPost from "./NewPost";
import Nothing from "./Nothing";
import { Route, Switch } from 'react-router-dom'

const Main = () => {
  return (
    <main>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/blog" component={Blog} />
        <Route path="/new_post" component={NewPost} />
        <Route component={Nothing} />
      </Switch>

    </main>
  );
};

export default Main;
