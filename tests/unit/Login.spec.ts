import { shallowMount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import Login from "@/views/LoginView.vue";

describe("測試登入...", () => {
    const wrapper = shallowMount(Login);

    it("測試使用者名稱 nft...", async () => {
        wrapper.find("[data-username]").setValue("nft");
        wrapper.find("[data-password]").setValue("test");

        wrapper.find("form").trigger("submit.prevent")
        //await wrapper.vm.$nextTick();
        await flushPromises();

        //expect(wrapper.find(".message").text())
        //    .toBe("Thank you for your submission, alice.")
    });
});