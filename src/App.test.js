import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";
configure({ adapter: new Adapter() });

const setup = (props = {}) => {
  return shallow(<App {...props} />);
};
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();

  expect(count).toBe("0");
});

test("counter increments when button is clicked", () => {
  const wrapper = setup();

  // find button and click
  const button = findByTestAttr(wrapper, "increment-button");
  button.simulate("click");

  // check the counter
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});
