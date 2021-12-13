// 테스트 주도 개발이기 때문에 얘부터 작성할거임.
//describe는 유닛의 묶음이다.
describe('텍스트 관리자입니다.', () => {
    //유닛테스트할때 유닛은? 함수다.

    let textManager;
    // beforeEach : it 함수 호출 직전에 실행됩니다.
    beforeEach(() => {
        textManager = new TextManager();
    })

    it('텍스트 값을 전달합니다.', () => {
        const initValue = textManager.getValue();
        expect(textManager.getValue()).tobe(initValue)
    })

    it('텍스트 값을 수정합니다.', () => {
        const newText = { data: 'Hello Zebras' };

        expect(textManager.getValue()).toBe(newText.data);
    })
})
