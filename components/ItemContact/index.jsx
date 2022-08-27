import React from 'react'

import { Item, Icon, Text } from './style'

const ItemContact = ({ IconFa, LinkContact }) => {
  return (
    <Item>
      <Icon>
        <IconFa />
      </Icon>
      <Text>
        {LinkContact}
      </Text>
    </Item>
  )
}

export default ItemContact
