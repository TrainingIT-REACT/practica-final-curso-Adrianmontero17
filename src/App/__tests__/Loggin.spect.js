import React from "react";
import {render, mount, shallow} from 'enzyme';

import Loggin from "../components/loggin";
import {Provider} from "react-redux";
import store from "../store";

describe(Loggin, () =>{
    describe("render",() =>{
        let wrapper;
        beforeEach(() => {
            wrapper = render(<Provider store={store}><Loggin/></Provider>);
        })
        it("Should render all HTML elements", () => {
            expect(wrapper.is('div')).toBeTruthy();
            expect(wrapper.find('h2').length).toBe(1);
            expect(wrapper.find('form').length).toBe(1);
            expect(wrapper.find('input[type="text"]').length).toBe(1);
            expect(wrapper.find('button').length).toBe(1);

        });
    })
})