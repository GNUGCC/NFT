import { shallowMount } from "@vue/test-utils";
import Home from "@/views/HomeView.vue";

describe("主頁測試...", () => {
    it("測試進入主頁內容...", () => {
        const wrapper = shallowMount(Home);
        expect(wrapper.text()).toBe('歡迎進入本系統');
    });
});
