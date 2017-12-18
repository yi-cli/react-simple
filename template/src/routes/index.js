import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch,
  Redirect
} from 'react-router-dom'

const routes = [
  // { path: '/', component: App, exact: true },
  // { path: '/about', component: About }
]

const Router = () => (
  <Switch>
    {
      routes.map(route => {
        <Route key={route.path} path={route.path} exact={route.path} component={route.component} />
      })
    }
    <Redirect path="*" to="/" />
  </Switch>
)

export default Router