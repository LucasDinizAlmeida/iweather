import { getNextDays } from "./getNextDays"

describe('getNextDays', () => {
    it('should be return to next fixes days', () => {
        const days = getNextDays()
    
        expect(days.length).toBe(5)
    })
})