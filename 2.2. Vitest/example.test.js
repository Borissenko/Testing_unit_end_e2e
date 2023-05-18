/**
 * @vitest-environment happy-dom
 */

import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Notification from "./Notification.vue"

describe("notification.vue", () => {
  test("renders the correct style for error", (context) => {
    const type = "error";
    const wrapper = mount(Notification, {
      props: {type},
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["notification--error"])
    )
  })

  test("emits event when close button is clicked", async (context) => {
    const wrapper = mount(Notification, {
      data() {
        return {
          clicked: false,
        }
      },
    })
    const closeButton = wrapper.find("button")
    await closeButton.trigger("click")
    expect(wrapper.emitted()).toHaveProperty("clear-notificatioon")
  })

  test("renders message when message is not empty", () => {
    const message = "Something happened, try again"
    const wrapper = mount(Notification, {
      props: {message},
    })
    expect(wrapper.find("p").text()).toBe(message)
  })

})




