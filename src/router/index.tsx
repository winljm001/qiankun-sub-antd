import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import routes from './config/index'
import RouteWithSubRoutes from './routeWithSubRoute'
import NoDataPage from '@/pages/404'
import ErroryBoundary from '@/components/error-boundary'

const Router: React.FC = () => {
  return (
    <ErroryBoundary>
      <HashRouter basename={!window.__POWERED_BY_QIANKUN__ ? '/reactone' : '/'}>
        <Switch>
          {routes.map(route => {
            return <RouteWithSubRoutes key={route.path} {...route} />
          })}
          <Route component={NoDataPage} />
        </Switch>
      </HashRouter>
    </ErroryBoundary>
  )
}

export default Router
