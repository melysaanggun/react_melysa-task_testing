import { renderHook, act } from "@testing-library/react";
import { useInputValue } from "./useInputValue";

describe("when rendered", () => {
    it("returns current initial value", () => {
        const {result} = renderHook(
            () => useInputValue("Test String")
        )
        expect(result.current.value).toEqual("Test String")
    });
});