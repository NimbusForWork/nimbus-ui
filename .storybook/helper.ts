import addons from '@storybook/addons'
export const emitter = (type, options) => addons.getChannel().emit(type, options)

export const updateKnob = (name, value) => emitter('storybookjs/knobs/change', { name, value })
