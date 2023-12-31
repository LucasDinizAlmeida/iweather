import { render, screen, fireEvent } from "@testing-library/react-native";
import { SelectList } from ".";

describe("Component: SelectList", () => {
    
    it('should de return city details selected', () => {
        const data = [
            { id: '1', name: 'Campinas', latitude: 123, longitude: 321 },
            { id: '2', name: 'Campo Grande', latitude: 456, longitude: 654 },
        ]

        const onPress = jest.fn()

        render(
            <SelectList 
                data={data}
                onChange={() => {}}
                onPress={onPress}
            />
        )

        const selectedCity = screen.getByText(/campo/i)
        fireEvent.press(selectedCity)

        expect(onPress).toBeCalledTimes(1)
    })
})