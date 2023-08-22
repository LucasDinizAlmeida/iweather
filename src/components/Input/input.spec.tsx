import { render, screen } from '@testing-library/react-native'

import { Input } from '.'


describe('Component: Input', () => {
    it('should be render without activy indicator if isLoading prop is undefined', () => {
        render(<Input />)

        const activityIndicator = screen.queryByTestId('activity-indicator')
        expect(activityIndicator).toBeNull()
    })

    it('should be render without activy indicator if isLoading prop is true', () => {
        render(<Input isLoading />)

        const activityIndicator = screen.getByTestId('activity-indicator')
        expect(activityIndicator).toBeTruthy()
    })
})