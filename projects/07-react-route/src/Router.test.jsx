import { describe, it, expect, beforeEach, vi } from "vitest"
import { render, screen, cleanup} from "@testing-library/react";
import { Router } from './Router.jsx'
import { Link } from './Link.jsx'
import { Route } from './Route.jsx'
import { getCurrentPath } from "./utils.js";

vi.mock('./utils.js', () => ({
    getCurrentPath: vi.fn()
}))

describe('Router', () => {
    beforeEach(() => {
        cleanup()
        vi.clearAllMocks()
    })

    it('should render without problems', () => {
        render(<Router routes={[]} />)
        expect(true).toBeTruthy()
    })

    it('should render 404 if mo router watch', () => {
        render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
        expect(screen.getByText('404')).toBeTruthy()
    })

    it('should render the component of the first route that matches', () => {
        getCurrentPath.mockReturnValue('/about')
        const routes = [
            {
                path: '/',
                Component: () => <h1>Home</h1>
            },
            {
                path: '/about',
                Component: () => <h1>About</h1>
            }
        ]
        render(<Router routes={routes} />)
        expect(screen.getByText('About')).toBeTruthy()
    })

      it('should navigate using Links', () => {
            getCurrentPath.mockReturnValue('/')

            render(
                <Router>
                    <Route path='/' Component={() => {
                        return (
                            <>
                                <h1>Home</h1>
                                <Link to='/about'>About</Link>
                            </>
                        )
                    }}/>
                    <Route path='/about' Component={() => <h1>About</h1>} />
                </Router>
            )

            screen.getByText('About').click()

            expect(screen.getByText('About')).toBeTruthy()
        })
})