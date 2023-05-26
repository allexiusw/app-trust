import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../TheWelcome.vue'

describe('TheWelcome', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.text()).toContain('Welcome to AppTrust');
  });

  it('renders properly WelcomeItem', () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.find('[data-testid="welcome-item"]').exists()).toBe(true);
  });
})
