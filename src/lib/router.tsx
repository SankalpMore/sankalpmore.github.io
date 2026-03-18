import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

interface RouterContextType {
  currentPath: string
  navigate: (path: string) => void
}

const RouterContext = createContext<RouterContextType | undefined>(undefined)

const normalizePath = (path: string) => {
  if (!path || path === '#') {
    return '/'
  }

  return path.startsWith('/') ? path : `/${path.replace(/^#/, '')}`
}

const getCurrentPath = () => normalizePath(window.location.hash.slice(1) || window.location.pathname)

export function Router({ children }: { children: ReactNode }) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath)

  useEffect(() => {
    const syncRoute = () => {
      const nextPath = getCurrentPath()
      setCurrentPath(nextPath)

      if (window.location.hash.slice(1) !== nextPath) {
        window.history.replaceState({}, '', `#${nextPath}`)
      }
    }

    syncRoute()
    window.addEventListener('hashchange', syncRoute)
    window.addEventListener('popstate', syncRoute)

    return () => {
      window.removeEventListener('hashchange', syncRoute)
      window.removeEventListener('popstate', syncRoute)
    }
  }, [])

  const navigate = (path: string) => {
    const nextPath = normalizePath(path)

    if (window.location.hash.slice(1) !== nextPath) {
      window.history.pushState({}, '', `#${nextPath}`)
    }

    setCurrentPath(nextPath)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return <RouterContext.Provider value={{ currentPath, navigate }}>{children}</RouterContext.Provider>
}

export function useRouter() {
  const context = useContext(RouterContext)
  if (!context) {
    throw new Error('useRouter must be used within a Router')
  }
  return context
}

interface RouteProps {
  path: string
  children: ReactNode
}

export function Route({ path, children }: RouteProps) {
  const { currentPath } = useRouter()
  return currentPath === path ? <>{children}</> : null
}
