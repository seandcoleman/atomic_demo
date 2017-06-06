import React from 'react'
import {Route, Redirect, Switch} from 'react-router'
import {createBrowserHistory} from 'history'
import {App, Inbox, Dashboard, Login, Projects, Project} from 'containers'
import {RouteAuth} from 'components'

export const history = getHistory()

export const appRouting = [
  {
    path: '/',
    icon: 'area chart',
    name: 'Dashboard',
    exact: true,
    sidebarVisible: true,
    tag: RouteAuth,
    component: Dashboard
  },
  {
    path: '/projects',
    name: 'Projects',
    exact: true,
    icon: 'list layout',
    sidebarVisible: true,
    tag: RouteAuth,
    component: Projects
  },
  {
    path: '/team',
    name: 'Team',
    exact: true,
    icon: 'users',
    sidebarVisible: true,
    tag: RouteAuth,
    component: Inbox
  },
  {
    path: '/auth',
    name: 'Auth',
    tag: Route,
    component: Login
  },
  {
    path: '/projects/project123',
    name: 'Project',
    exact: true,
    tag: RouteAuth,
    component: Project
  }
]

/**
 * Returns application routing with protected by AuthCheck func routes
 * @param {Function} authCheck checks is user logged in
 */
export const Routing = authCheck => {
  // remove components that aren't application routes
  let routes = appRouting.filter(a => a.tag || a.component)
  // render components that are inside Switch (main view)
  let routesRendered = routes.map((a, i) => {
    // get tag for Route. is it RouteAuth `protected route` or Route?
    let Tag = a.tag
    let {path, exact, strict, component} = a
    // can visitor access this route?
    let canAccess = authCheck
    // select only props that we need
    let b = {path, exact, strict, component, canAccess}
    return <Tag key={i} {...b} />
  })

  return (
    <App>
      <Switch>
        {routesRendered}
        <Redirect to="/" />
      </Switch>
    </App>
  )
}

function getHistory () {
  const basename = process.env.BUILD_DEMO ? '/react-semantic.ui-starter' : ''

  return createBrowserHistory({basename})
}
