import { shallowMount } from "@vue/test-utils";
import Login from "@/components/Login.vue";

describe("測試 Login...", () => {
    it("測試使用者名稱...", () => {
        const wrapper = shallowMount(Login);
        expect(wrapper.text()).toMatch('');
  });
});
