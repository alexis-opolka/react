import React from 'react'
import {Meta} from '@storybook/react'
import {Component} from '.'

export default {
  title: 'Drafts/Components/CSSComponent',
} as Meta<typeof Component>

export const Default = () => <Component>Default</Component>

export const Disabled = () => <Component disabled>Disabled</Component>
