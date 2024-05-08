import { lazy, LazyExoticComponent } from 'react'

type JSXComponent = () => JSX.Element

interface IRoutes {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,
    private?: boolean,
}

const LazyHome = lazy(() => import(/*webpackChunkName: "LazyHome*/'../pages/Home'))
const LazyStates = lazy(() => import(/*webpackChunkName: "LazyStates"*/"../pages/States"))
const LazyContact = lazy(() => import(/*webpackChunkName: "LazyContact"*/"../pages/Contact"))
const LazyTeam = lazy(() => import(/*webpackChunkName: "LazyTeam"*/"../pages/Team"))

export const routes: IRoutes[] = [
    {
        to: '/home',
        path:'/home',
        Component: LazyHome,
        name:'Inicio',
        private: false,
    },
    {
        to: '/states',
        path:'/states',
        Component: LazyStates,
        name:'Lotes',
        private: false,
    },
    {
        to: '/team',
        path:'/team',
        Component: LazyTeam,
        name:'Equipo',
        private: false,
    },
    {
        to: '/contact',
        path:'/contact',
        Component: LazyContact,
        name:'Contacto',
        private: false,
    }
]