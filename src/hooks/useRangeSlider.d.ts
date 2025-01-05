interface SelectedValsType {
    [key: number]: {
        textValue: number;
        percent: number;
    };
}
interface SelectedRangesType {
    [key: number]: string;
}
export default function useRangeSlider(): {
    selectedVals: SelectedValsType;
    selectedRanges: SelectedRangesType;
    onSlide: (index: number, value: number[], percent: number[]) => void;
    onSlide2: (index: number, value: number[]) => void;
};
export {};
